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

  get( )
  {
    this.logger.log( 'Making REST request to Climacell' );

    const baseurl        = 'https://api.climacell.co/v3/weather'
    const apikey         = `apikey=${process.env.climacellKey}`;
    const loc            = `&lat=${process.env.LAT}&lon=${process.env.LON}&unit_system=us`;
    const realtimeFields = '&fields=precipitation,precipitation_type,temp,feels_like,wind_speed,wind_gust,wind_direction,weather_code';
    const dailyFields    = `&fields=precipitation_probability,precipitation,precipitation_accumulation,temp,feels_like,wind_speed,wind_direction,weather_code`;

    const realtimeUrl = `${baseurl}/realtime?${apikey}${loc}${realtimeFields}`;
    this.logger.log( `realtimeUrl: ${realtimeUrl}` );

    const forecastUrl = `${baseurl}/forecast/daily?${apikey}${loc}${dailyFields}`;
    this.logger.log( `forecastUrl: ${forecastUrl}` );

    var calls = [
                  this.httpService.get( realtimeUrl  ).pipe( map( response => response.data ) ),
                  this.httpService.get( forecastUrl  ).pipe( map( response => response.data ) ),
                ];

    return forkJoin( calls )
             .pipe(
                    map( response => 
                         (
                           {
                             'provider': 'climacell',
                             'currently': response[0],
                             'daily':     response[1],
                           }
                         )
                       ),
                  );
  }

  getx( )
  {
    return {
             'provider':  'null',
             'latitude':  '0',
             'longitude': '0',
             'timezone':  '0',
             'currently':
             {
               'time':                moment( ).unix( ),
               'temperature':         '0',
               'apparentTemperature': '0',
               'windSpeed':           '0',
               'windBearing':         '0',
               'windGust':            '0',
               'iconClass':           'wi-day-sunny',
               'summary':             'Dummy weather data',
             },
             'daily':
             {
               'data':
               [ 
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
                 {
                   'time':               moment( ).unix( ),
                   'temperatureLow':     '0',
                   'temperatureHigh':    '0',
                   'iconClass':          'wi-day-sunny',
                   'windSpeed':          '0',
                   'windBearing':        '0',
                   'windGust':           '0',
                   'precipType':         '0',
                   'precipProbability':  '0',
                   'precipAccumulation': '0',
                 },
               ]
             },
           };
  }
}
