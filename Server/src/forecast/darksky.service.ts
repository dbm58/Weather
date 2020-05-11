import {
         HttpService,
         Injectable,
         Logger,
       } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable( )
export class DarkskyService
{
  constructor(
               private readonly logger:      Logger,
               private readonly httpService: HttpService,
             )
  {
    logger.setContext( DarkskyService.name );
  }

  get( )
  {
    this.logger.log( 'Making REST request to DarkSky' );

    const key = process.env.darkSkyKey;
    const url = `https://api.darksky.net/forecast/${key}/${process.env.LAT},${process.env.LON}`;

    return this.httpService
               .get( url )
               .pipe(
                      map( response => response.data ),
                      map(
                           response =>
                           {
                             response.provider = 'darksky';
                             response.currently.iconClass = 'wi-dark-sky-' + response.currently.icon;
                             response.daily.data.forEach( datum =>
                                 datum.iconClass = 'wi-dark-sky-' + datum.icon );
                             return response;
                           }
                         ),
                    );
  }
}
