import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-noaa-map',
  templateUrl: './noaa-map.component.html',
  styleUrls: ['./noaa-map.component.css']
})
export class NoaaMapComponent implements OnInit {

  overlay;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit()
  {
    this.activatedRoute.data.subscribe(data => {
          this.overlay=data.overlay;
      }
      );
  }

}
