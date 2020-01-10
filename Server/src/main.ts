import { NestFactory } from '@nestjs/core';
import { Logger }      from '@nestjs/common';
import { AppModule }   from './app.module';

import * as dotenv from 'dotenv';

dotenv.config( );

let logger = new Logger( 'bootstrap' );
logger.log( `Listening on port ${process.env.PORT}` );

async function bootstrap( )
{
  const app = await NestFactory.create( AppModule );
  app.enableCors( );
  await app.listen( process.env.PORT );
}

bootstrap( );
