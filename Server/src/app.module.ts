import { Module }         from '@nestjs/common';

import { AppController }  from './app.controller';
import { AppService }     from './app.service';
import { BustimeModule }  from './bustime/bustime.module';
import { ConfigModule }   from './config/config.module';
import { ForecastModule } from './forecast/forecast.module';
import { KillModule }     from './kill/kill.module';
import { TrashModule }    from './trash/trash.module';

@Module(
         {
           imports:     [
                          BustimeModule,
                          ConfigModule,
                          ForecastModule,
                          KillModule,
                          TrashModule,
                        ],
           controllers: [ AppController ],
           providers:   [ AppService ],
         }
       )
export class AppModule { }
