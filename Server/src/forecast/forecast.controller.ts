import { Controller, Get, Logger } from '@nestjs/common';
import { Observable }              from 'rxjs';

import { ForecastService } from './forecast.service';

const ENDPOINT: string = 'forecast';

@Controller( ENDPOINT )
export class ForecastController
{
  constructor(
               private readonly logger:  Logger,
               private readonly service: ForecastService
             )
  {
    this.logger.setContext( ForecastController.name );
    this.logger.log( 'Loading...' );
  }

  @Get( )
  async get( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.service.get( );
  }
}
