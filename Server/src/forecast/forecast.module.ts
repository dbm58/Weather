import {
         HttpModule,
         Logger,
         Module,
         Scope,
       } from '@nestjs/common';

import { ForecastController } from './forecast.controller';
import { ForecastService }    from './forecast.service';

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
                          }
                        ]
         }
       )
export class ForecastModule { }
