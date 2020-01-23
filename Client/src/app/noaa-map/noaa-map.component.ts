import { Component }                      from '@angular/core';
import { ActivatedRoute }                 from '@angular/router';
import { interval }                       from "rxjs/internal/observable/interval";
import { map, startWith, switchMap, tap } from "rxjs/operators";

@Component({
  selector:    'app-noaa-map',
  templateUrl: './noaa-map.component.html',
  styleUrls:   ['./noaa-map.component.css' ]
})
export class NoaaMapComponent
{
  constructor( private activatedRoute: ActivatedRoute ) { }

  private readonly mapInfo$ =
    interval( 5 * 60 * 1000 ) // 5 minutes
      .pipe(
             startWith( 0 ),
             switchMap(
                        ( ) => this.activatedRoute
                                   .data
                                   .pipe(
                                          map(
                                               v =>
                                               ({
                                                 ...v,
                                                 timestamp: Date.now( )
                                               })
                                             )
                                        )
                      )
           );
}
