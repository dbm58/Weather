import { Controller, Get, Logger } from '@nestjs/common';

const ENDPOINT: string = 'config';

@Controller( ENDPOINT )
export class ConfigController
{
  constructor( private readonly logger:  Logger )
  {
    this.logger.setContext( ConfigController.name );
    this.logger.log( 'Loading...' );
  }

  @Get( )
  async getConfig( )
  {
    this.logger.log( `Handling /${ENDPOINT} request` );

    let config = 
      {
        noaaMapUrl: process.env[ "weather-noaa-map-url" ] || 'testing'
      };
    return config;
  }
}
