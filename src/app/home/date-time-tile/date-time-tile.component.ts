import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-tile',
  templateUrl: './date-time-tile.component.html',
  styleUrls: ['./date-time-tile.component.css']
})
export class DateTimeTileComponent implements OnInit
{
  datetime: Date;

  constructor() { }

  ngOnInit() {
    this.datetime = new Date( );
    setInterval( ( ) => this.datetime = new Date( ), 60000 );
  }
}
