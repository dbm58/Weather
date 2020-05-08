import { Component }   from '@angular/core';

import { DataService } from '../Services/data.service';

@Component(
            {
              selector:    'app-home2',
              templateUrl: './home2.component.html',
              styleUrls:   ['./home2.component.css']
            }
          )
export class Home2Component
{
  constructor( private dataService: DataService ) { }

  private readonly forecast$ = this.dataService.getForecast( );
}

