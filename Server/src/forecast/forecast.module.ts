import {
         HttpModule,
         Logger,
         Module,
         Scope,
       } from '@nestjs/common';

import { ForecastController } from './forecast.controller';
import { ForecastService }    from './forecast.service';
import { OpenweatherService } from './openweather.service';
import { ClimacellService } from './climacell.service';
import { NoaaService }        from './noaa.service';

@Module(
         {
           controllers: [ ForecastController ],
           imports:     [ HttpModule ],
           providers:   [
                          ForecastService,
                          {
                            provide:  Logger,
                            useClass: Logger,
                            scope:    Scope.TRANSIENT,
                          },
                          OpenweatherService,
                          NoaaService,
                          ClimacellService
                        ]
         }
       )
export class ForecastModule { }
