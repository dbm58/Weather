import { Controller, Get, Logger } from '@nestjs/common';
import { Observable }              from 'rxjs';

import { ClimacellService }   from './climacell.service';
import { DarkskyService }     from './darksky.service';
import { OpenweatherService } from './openweather.service';
import { NoaaService }        from './noaa.service';
import { NullService }        from './null.service';

const ENDPOINT: string = 'forecast';

@Controller( ENDPOINT )
export class ForecastController
{
  provider;

  constructor(
               private readonly logger:             Logger,
               private readonly climacellService:   ClimacellService,
               private readonly darkskyService:     DarkskyService,
               private readonly openweatherService: OpenweatherService,
               private readonly noaaService:        NoaaService,
               private readonly nullService:        NullService,
             )
  {
    this.logger.setContext( ForecastController.name );
    this.logger.log( 'Loading...' );

    switch( process.env.PROVIDER )
    {
      case 'climacell':   this.provider = climacellService;   break;
      case 'darksky':     this.provider = darkskyService;     break;
      case 'openweather': this.provider = openweatherService; break;
      case 'noaa':        this.provider = noaaService;        break;
      case 'null':        this.provider = nullService;        break;
    }
  }




  @Get( )
  async get( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.provider.get( );
  }

  @Get( 'climacell' )
  async getClimacell( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.climacellService.get( );
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

  @Get( 'null' )
  async getNull( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    return this.nullService.get( );
  }
}
