import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector:    'app-noaa-map-lite',
  templateUrl: './noaa-map-lite.component.html',
  styleUrls:   ['./noaa-map-lite.component.css' ]
})
export class NoaaMapLiteComponent implements OnInit {

  mapUrl;
  link;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit( )
  {
    this.activatedRoute
        .data
        .subscribe(
                    data =>
                    {
                      this.mapUrl = data.mapUrl;
                      this.link   = data.link;
                    }
                  );
    
  }
}
