import { Logger, Module, Scope } from '@nestjs/common';

import { KillController } from './kill.controller';

@Module(
         {
           controllers: [ KillController ],
           providers:   [
                          {
                            provide:  Logger,
                            useClass: Logger,
                            scope:    Scope.TRANSIENT,
                          }
                        ],
         }
       )
export class KillModule { }
