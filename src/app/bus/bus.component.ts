import { Component }            from '@angular/core';
import { interval }             from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

import { DataService }          from '../Services/data.service';

@Component(
            {
              selector:    'app-bus',
              templateUrl: './bus.component.html',
              styleUrls:   ['./bus.component.css']
            }
          )
export class BusComponent
{
  constructor( private dataService: DataService ) { }

  private readonly autoRefresh$ =
    interval( 60 * 1000 ) // 60 seconds
      .pipe( startWith( 0 ) );

  private readonly busTimes$ =
    this.autoRefresh$
        .pipe(
               switchMap( ( ) => this.dataService.getBusTimes( ) )
             );
}
