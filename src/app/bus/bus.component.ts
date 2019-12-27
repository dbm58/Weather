import { Component, OnInit } from '@angular/core';

import { BusDataService } from '../Services/bus-data.service';

@Component(
            {
              selector:    'app-bus',
              templateUrl: './bus.component.html',
              styleUrls:   ['./bus.component.css']
            }
          )
export class BusComponent implements OnInit
{
  busTimes$;

  constructor( private dataService: BusDataService ) { }

  ngOnInit( )
  {
    this.busTimes$ = this.dataService.getBusTimes( );
  }

}
