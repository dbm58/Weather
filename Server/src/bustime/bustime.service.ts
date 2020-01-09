import { Injectable, Logger, HttpService } from '@nestjs/common';
import { map }                             from 'rxjs/operators';

@Injectable( )
export class BustimeService
{
  constructor(
               private readonly logger:      Logger,
               private readonly httpService: HttpService,
             )
  {
    logger.setContext( BustimeService.name );
  }

  get( )
  {
    this.logger.log( 'Makeing REST request to ridemcts.com' );

    const key  = `key=${process.env.mctsKey}`;
    const rte  = 'rt=GOL';
    const stop = 'stpid=582';
    const fmt  = 'format=json';
    const url  = `http://realtime.ridemcts.com/bustime/api/v3/getpredictions?${key}&${rte}&${stop}&${fmt}`;

    return this.httpService
               .get( url )
               .pipe(
                      map( response => response.data ),
                    );
  }
}
