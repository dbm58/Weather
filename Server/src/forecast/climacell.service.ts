import {
         HttpService,
         Injectable,
         Logger,
       } from '@nestjs/common';
import { forkJoin } from 'rxjs';
import { map }      from 'rxjs/operators';

import * as moment from 'moment';


@Injectable()
export class ClimacellService
{
  constructor(
               private readonly logger:      Logger,
               private readonly httpService: HttpService,
             )
  {
    logger.setContext( ClimacellService.name );
  }

  cvtCurrent( data )
  {
    return {
             'time':                moment( data.observation_time.value ).unix( ),
             'temperature':         data.temp.value,
             'apparentTemperature': data.feels_like.value,
             'windSpeed':           data.wind_speed.value,
             'windBearing':         data.wind_direction.value,
             'windGust':            data.wind_gust.value,
             'iconClass':           'wi-cc-' + data.weather_code.value,
             //  We should try and translate the weather code to something more meaningful
             'summary':             data.weather_code,
           };
  }

  cvtDaily( data )
  {
    //  wind gusts are rolled up from the hourly forecast at a later point
    return {
             'time':               moment( data.observation_time.value ).unix( ),
             'temperatureLow':     data.temp[0].min.value,
             'temperatureHigh':    data.temp[1].max.value,
             'iconClass':          'wi-cc-' + data.weather_code.value,
             'windSpeed':          data.wind_speed[1].max.value,
             'windBearing':        Math.round( data.wind_direction[0].min.value ),
             'windGust':           '0',
             //  get precip type from the hourly
             'precipType':         '?',
             'precipProbability':  data.precipitation_probability.value / 100,
             'precipAccumulation': data.precipitation_accumulation.value,
           };
  }

  cvtHourly( data )
  {
    //  hourly data points:
    //    h.time
    //    h.temperature
    //    h.precipProbability
    //    h.precipAccumulation or precipIntensity
    //    h.apparentTemperature
    //    h.windSpeed
    //    h.windBearing
    //    h.windGust
    return {
             'time':               moment( data.observation_time.value ).unix( ),
             'temperature':        data.temp.value,
             'windSpeed':          data.wind_speed.value,
             'windBearing':        Math.round( data.wind_direction.value ),
             'windGust':           data.wind_gust.value,
             'precipType':         data.precipitation_type.value,
             'precipProbability':  data.precipitation_probability.value / 100,
             'precipIntensity':    data.precipitation.value,
           };
  }

  rollUpGusts( data )
  {
    data.daily
        .data
        .forEach( d => d.windGust = 
                       Math.max( ... data.hourly
                                         .data
                                         .filter( h => moment.unix( h.time )
                                                             .isSame( moment.unix( d.time ), 'day' ) )
                                         .map( h => h.windGust )
                               )
                );

    return data;
  }

  rollUpPrecipType( data )
  {
    //  climacell values are:
    //      one of:  none, rain, snow, ice pellets, and freezing rain
    //  darksky values are:
    //      "rain", "snow", or "sleet" (which refers to each of freezing rain,
    //      ice pellets, and “wintery mix”)

    data.daily
        .data
        .forEach( d => d.precipType = 
                  Array.from(
                              data.hourly
                                  .data
                                  .filter( h => moment.unix( h.time ).isSame( moment.unix( d.time ), 'day' ) )
                                  .map( h => h.precipType )
                                 .filter( h => h && h != 'none' )
                                 .reduce( (acc,val) => acc.set(val, (acc.get(val) || 0) + 1), new Map( ) )
                                 .entries( )
                            )
                       .map( e => ( { 'key': e[0], 'value': e[1] } ) )
                       .sort( (a,b) => (a.value<b.value) ? -1 : (a.value>b.value) ? 1 : 0 )
                       .map( e => e.key )
                       [0] || ''
                );
    this.logger.log( data.daily );
    return data;
  }

  get( )
  {
    this.logger.log( 'Making REST request to Climacell' );

    const baseurl        = 'https://api.climacell.co/v3/weather'
    const apikey         = `apikey=${process.env.climacellKey}`;
    const loc            = `&lat=${process.env.LAT}&lon=${process.env.LON}&unit_system=us`;
    const realtimeFields = '&fields=precipitation,precipitation_type,temp,feels_like,wind_speed,wind_gust,wind_direction,weather_code';
    const dailyFields    = '&fields=precipitation_probability,precipitation,precipitation_accumulation,temp,feels_like,wind_speed,wind_direction,weather_code';
    const hourlyFields = '&fields=precipitation,precipitation_type,precipitation_probability,precipitation,temp,feels_like,wind_speed,wind_direction,wind_gust';

    const realtimeUrl = `${baseurl}/realtime?${apikey}${loc}${realtimeFields}`;
    this.logger.log( `realtimeUrl: ${realtimeUrl}` );

    const forecastUrl = `${baseurl}/forecast/daily?${apikey}${loc}${dailyFields}`;
    this.logger.log( `forecastUrl: ${forecastUrl}` );

    const hourlyUrl = `${baseurl}/forecast/hourly?${apikey}${loc}${hourlyFields}`;
    this.logger.log( `hourlyUrl: ${hourlyUrl}` );

    var calls = [
                  this.httpService.get( realtimeUrl ).pipe( map( response => response.data ) ),
                  this.httpService.get( forecastUrl ).pipe( map( response => response.data ) ),
                  this.httpService.get( hourlyUrl   ).pipe( map( response => response.data ) ),
                ];

    return forkJoin( calls )
             .pipe(
                    map( response => 
                         (
                           {
                             'provider': 'climacell',
                             'currently': this.cvtCurrent( response[0] ),
                             'daily':
                             {
                               'data':    response[1].map( data => this.cvtDaily( data ) ),
                             },
                             'hourly':
                             {
                               'data':    response[2].map( data => this.cvtHourly( data ) ),
                             }
                           }
                         )
                       ),
                    map( response => this.rollUpGusts( response ) ),
                    map( response => this.rollUpPrecipType( response ) ),
                  );
  }
}
