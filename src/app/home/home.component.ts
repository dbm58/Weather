import { Component, OnInit } from '@angular/core';

import { DataService }       from '../Services/data.service';

@Component(
            {
              selector:    'app-home',
              templateUrl: './home.component.html',
              styleUrls:   ['./home.component.css']
            }
          )
export class HomeComponent
{
  constructor( private dataService: DataService ) { }

  //  todo:  add auto refresh.  see bus component.  refresh every 15 minutes
  private readonly forecast$ = this.dataService.getForecast( );
}
