import {
         HttpService,
         Injectable,
         Logger,
       } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable( )
export class OpenweatherService
{
  constructor(
               private readonly logger:      Logger,
               private readonly httpService: HttpService,
             )
  {
    logger.setContext( OpenweatherService.name );
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

  get( )
  {
    this.logger.log( 'Making REST request to OpenWeather' );

    const lat = '43.044';
    const lon = '-88.002';
    const key = process.env.openWeatherKey;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

    return this.httpService
               .get( url )
               .pipe(
                      map( response => response.data ),
                      map( response =>
                           (
                             {
                               'latitude':  response.lat,
                               'longitude': response.lon,
                               'timezone':  response.timezone,
                               'currently':
                               {
                                 'time':                response.current.dt,
                                 'temperature':         response.current.temp,
                                 'apparentTemperature': response.current.feels_like,
                                 'windSpeed':           response.current.wind_speed,
                                 'windBearing':         response.current.wind_deg,
                                 'icon':                response.current.weather[0].icon,
                                 //  todo:  this needs to also calculate 'night'
                                 'iconClass':           `wi-owm-day-${response.current.weather[0].id}`,
                                 'summary':             response.current.weather[0].main,
                               },
                               'daily':
                               {
                                 'data': response.daily.map( d => this.cvt( d ) ),
                               },
                             }
                           )
                         ),
                    );
  }
}
