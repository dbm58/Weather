import { Module, HttpModule, Logger, Scope } from '@nestjs/common';

import { BustimeController }  from './bustime.controller';
import { BustimeService }     from './bustime.service';

@Module(
         {
           controllers: [BustimeController],
           imports:     [HttpModule],
           providers:   [
                          BustimeService,
                          {
                            provide:  Logger,
                            useClass: Logger,
                            scope:    Scope.TRANSIENT
                          }
                        ]
         }
       )
export class BustimeModule { }
