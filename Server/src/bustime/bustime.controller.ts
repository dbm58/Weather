import {
         Controller,
         Get,
         Logger,
         Param,
       } from '@nestjs/common';
import { Observable } from 'rxjs';

import { BustimeService } from './bustime.service';

const ENDPOINT: string = 'bus';

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
  async getPredictions( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.service.get( );
  }

  @Get( ':vid' )
  async getBusInfo( @Param( 'vid' ) vid )
  {
    this.logger.log( `Handling /${ENDPOINT}/${vid} request` );

    return this.service.getBusInfo( vid );
  }
}
