import { Component, OnInit } from '@angular/core';

import { DataService }       from '../../Services/data.service';

@Component(
            {
              selector:    'app-date-time-tile',
              templateUrl: './date-time-tile.component.html',
              styleUrls:   ['./date-time-tile.component.css']
            }
          )
export class DateTimeTileComponent implements OnInit
{
  constructor( private dataService: DataService ) { }

  datetime: Date;

  private readonly trashDayInfo$ = this.dataService.getTrashDay( );

  ngOnInit( )
  {
    this.datetime = new Date( );
    setInterval( ( ) => this.datetime = new Date( ), 60000 );

    let x = this.dataService.getTrashDay( ).subscribe(
      x => console.log( x )
    );
  }
}
