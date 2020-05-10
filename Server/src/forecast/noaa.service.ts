import {
         HttpService,
         Injectable,
         Logger,
       } from '@nestjs/common';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';

@Injectable( )
export class NoaaService
{
  //  probably want to use https://api.weather.gov/gridpoints/MKX/84,64, as it
  //  has all of the data that we are looking for.
  //
  //  Documentation here:
  //  https://www.weather.gov/documentation/services-web-api#/
  //
  //  https://api.weather.gov/points/43.044,-88.002
  //  Information about the grid containing the lat/lon
  //  Includes a bunch of URLs already formatted.  Might be able to use them
  //  Includes other metadata about the station.  Not sure this is of interest
  //
  //  https://api.weather.gov/gridpoints/MKX/84,64/forecast
  //  brief day/night forecasts for 7 days.  Not enough data.
  //
  //  https://api.weather.gov/gridpoints/MKX/84,64/forecast/hourly
  //  Hourly forecasts for the next 156 hours.  
  //
  //  https://api.weather.gov/gridpoints/MKX/84,64
  //  Hourly values for a bunch of data elements.  Includes everything that we need,
  //  except current conditions.  I think that will have to come from somewhere else.
  //  I think that this is what NOAA uses for their graphs.
  //
  //  https://api.weather.gov/stations/KMKE/observations/latest
  //  latest observations @ mitchell field.  I think this is what we want for the
  //  current weather.
  //
  //  So we need to merge the forecast and observations together (.forkJoin).  Then
  //  transform them into a single document.


  constructor(
               private readonly logger:      Logger,
               private readonly httpService: HttpService,
             )
  {
    logger.setContext( NoaaService.name );
  }

  cvt( forecast )
  {
    var newForecast = 
    {
      'time':                forecast.dt,
      'temperatureHigh':     forecast.temp.max,
      'temperatureLow':      forecast.temp.min,
      'apparentTemperature': forecast.feels_like,
      'windSpeed':           forecast.wind_speed,
      'windBearing':         forecast.wind_deg,
      'icon':                forecast.weather[0].icon,
      //  todo:  this needs to also calculate 'night'
      'iconClass':           `wi-owm-day-${forecast.weather[0].id}`,
      'summary':             forecast.weather[0].main,
    };
    return newForecast;
  }

  cvtCurrent( src )
  {
    return {
             'time':        moment( src.properties.timestamp ).unix( ),
             'summary':     src.properties.textDescription,
             'iconClass':   'x',
             'temperature': ( src.properties.temperature.value * 1.8 ) + 32,
             'windSpeed':   src.properties.windSpeed.value,
             'windBearing': src.properties.windDirection.value,
             'windGust':    src.properties.windGust.value,
           };
  }

  cvtDaily( src )
  {
    return {};
  }

  get( )
  {
    this.logger.log( 'Making REST request to NOAA' );

    const url  = 'https://api.weather.gov/stations/KMKE/observations/latest';
    const url2 = 'https://api.weather.gov/gridpoints/MKX/84,64';

    var calls = [
                  this.httpService.get( url  ).pipe( map( response => response.data ) ),
                  this.httpService.get( url2 ).pipe( map( response => response.data ) ),
                ];

    return forkJoin( calls )
             .pipe(
                    map( response => 
                         (
                           {
                             'provider': 'noaa',
                             'currently': this.cvtCurrent( response[0] ),
                             'daily':     this.cvtDaily  ( response[1] ),
                           }
                         )
                       ),
                  );

    return this.httpService
               .get( url )
               .pipe(
                      map( response => response.data ),
                      map( response =>
                           (
                             {
                               'provider': 'noaa',
                               'daily':
                               {
                                 'data':
                                 [
                                   {
                                     'time':        '0',
                                     'iconClass':   'x',
                                     'windSpeed':   response.properties.windSpeed.value || '0',
                                     'windBearing': response.properties.windDirection.value || '0',
                                     'windGust':    response.properties.windGust.value,
                                   },
                                   {
                                     'time':        '0',
                                     'iconClass':   'x',
                                     'windBearing': '0',
                                   },
                                   {
                                     'time':        '0',
                                     'iconClass':   'x',
                                     'windBearing': '0',
                                   },
                                   {
                                     'time':        '0',
                                     'iconClass':   'x',
                                     'windBearing': '0',
                                   },
                                   {
                                     'time':        '0',
                                     'iconClass':   'x',
                                     'windBearing': '0',
                                   },
                                   {
                                     'time':        '0',
                                     'iconClass':   'x',
                                     'windBearing': '0',
                                   },
                                 ],
                               },
                               'hourly':
                               {
                                 'data':
                                 [
                                 ],
                               },
                             }
                           )
                         ),
                      //  map( response => JSON.stringify( response, null, 4) ),
                    );

    return { };

    //  return this.httpService
    //             .get( url )
    //             .pipe(
    //                    map( response => response.data ),
    //                    map( response =>
    //                         (
    //                           {
    //                             'latitude':  response.lat,
    //                             'longitude': response.lon,
    //                             'timezone':  response.timezone,
    //                             'currently':
    //                             {
    //                               'time':                response.current.dt,
    //                               'temperature':         response.current.temp,
    //                               'apparentTemperature': response.current.feels_like,
    //                               'windSpeed':           response.current.wind_speed,
    //                               'windBearing':         response.current.wind_deg,
    //                               'icon':                response.current.weather[0].icon,
    //                               //  todo:  this needs to also calculate 'night'
    //                               'iconClass':           `wi-owm-day-${response.current.weather[0].id}`,
    //                               'summary':             response.current.weather[0].main,
    //                             },
    //                             'daily':
    //                             {
    //                               'data': response.daily.map( d => this.cvt( d ) ),
    //                             },
    //                           }
    //                         )
    //                       ),
    //                  );
  }
}
