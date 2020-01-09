import { Controller, Get, Logger } from '@nestjs/common';
import { Observable }              from 'rxjs';

import { BustimeService } from './bustime.service';

const ENDPOINT: string = 'bustime';

@Controller( ENDPOINT )
export class BustimeController
{
  constructor(
               private readonly logger:  Logger,
               private readonly service: BustimeService,
             )
  {
    this.logger.setContext( BustimeController.name );
    this.logger.log( 'Loading...' );
  }

  @Get( )
  async get( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.service.get( );
  }
}
