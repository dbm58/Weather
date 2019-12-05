import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-tile-small',
  templateUrl: './forecast-tile-small.component.html',
  styleUrls: ['./forecast-tile-small.component.css']
})
export class ForecastTileSmallComponent implements OnInit {

  @Input( ) forecast;

  constructor() { }

  ngOnInit() {
  }

}
