import { Component, OnInit, Input } from '@angular/core';

@Component(
            {
              selector:    'app-forecast-tile',
              templateUrl: './forecast-tile.component.html',
              styleUrls:   ['./forecast-tile.component.css']
            }
          )
export class ForecastTileComponent implements OnInit
{
  @Input( ) conditions;
  @Input( ) forecast;

  constructor( ) { }

  ngOnInit( ) { }
}
