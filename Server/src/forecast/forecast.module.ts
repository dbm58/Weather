import {
         HttpModule,
         Logger,
         Module,
         Scope,
       } from '@nestjs/common';

import { ForecastController } from './forecast.controller';

import { ClimacellService }   from './climacell.service';
import { DarkskyService }     from './darksky.service';
import { OpenweatherService } from './openweather.service';
import { NoaaService }        from './noaa.service';
import { NullService }        from './null.service';

@Module(
         {
           controllers: [ ForecastController ],
           imports:     [ HttpModule ],
           providers:   [
                          ClimacellService,
                          DarkskyService,
                          {
                            provide:  Logger,
                            useClass: Logger,
                            scope:    Scope.TRANSIENT,
                          },
                          OpenweatherService,
                          NoaaService,
                          NullService,
                        ]
         }
       )
export class ForecastModule { }
