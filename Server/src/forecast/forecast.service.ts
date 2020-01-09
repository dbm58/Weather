import {
         HttpService,
         Injectable,
         Logger,
       } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable( )
export class ForecastService
{
  constructor(
               private readonly logger:      Logger,
               private readonly httpService: HttpService,
             )
  {
    logger.setContext( ForecastService.name );
  }

  get( )
  {
    this.logger.log( 'Making REST request to DarkSky' );

    const lat = '43.044';
    const lon = '-88.002';
    const key = process.env.darkSkyKey;
    const url = `https://api.darksky.net/forecast/${key}/${lat},${lon}`;

    return this.httpService
               .get( url )
               .pipe(
                      map( response => response.data ),
                    );
  }
}
