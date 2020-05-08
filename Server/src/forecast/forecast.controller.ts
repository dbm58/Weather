import { Controller, Get, Logger } from '@nestjs/common';
import { Observable }              from 'rxjs';

import { ForecastService }    from './forecast.service';
import { OpenweatherService } from './openweather.service';
import { NoaaService }        from './noaa.service';

const ENDPOINT: string = 'forecast';

@Controller( ENDPOINT )
export class ForecastController
{
  constructor(
               private readonly logger:             Logger,
               private readonly darkskyService:     ForecastService,
               private readonly openweatherService: OpenweatherService,
               private readonly noaaService:        NoaaService,
             )
  {
    this.logger.setContext( ForecastController.name );
    this.logger.log( 'Loading...' );
  }

  @Get( )
  async get( )
  {
    return this.getNoaa( );
  }

  @Get( 'darksky' )
  async getDarksky( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.darkskyService.get( );
  }

  @Get( 'openweather' )
  async getOpenweather( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.openweatherService.get( );
  }

  @Get( 'noaa' )
  async getNoaa( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.noaaService.get( );
  }
}
