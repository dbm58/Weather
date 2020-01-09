import { Module, Logger, Scope }  from '@nestjs/common';

import { TrashController } from './trash.controller';
import { TrashService }    from './trash.service';

@Module(
         {
           controllers: [TrashController],
           providers:   [
                          TrashService,
                          {
                            provide:  Logger,
                            useClass: Logger,
                            scope:    Scope.TRANSIENT
                          }
                        ]
         }
       )
export class TrashModule { }
