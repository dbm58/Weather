import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForecastModule } from './forecast/forecast.module';
import { BustimeModule } from './bustime/bustime.module';
import { TrashModule } from './trash/trash.module';

@Module({
  imports: [ForecastModule, BustimeModule, TrashModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
