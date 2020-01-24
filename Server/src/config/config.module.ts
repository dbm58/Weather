import { Logger, Module, Scope } from '@nestjs/common';
import { ConfigController }      from './config.controller';

@Module(
         {
           controllers: [ ConfigController ],
           providers:   [
                          {
                            provide:  Logger,
                            useClass: Logger,
                            scope:    Scope.TRANSIENT
                          }
                        ]
         }
       )
export class ConfigModule { }
