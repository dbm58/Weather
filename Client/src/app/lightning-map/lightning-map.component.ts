import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { environment } from './../../environments/environment';

@Component(
            {
              selector:    'app-lightning-map',
              templateUrl: './lightning-map.component.html',
              styleUrls:   ['./lightning-map.component.css']
            }
          )
export class LightningMapComponent
{
  //  Build up the URL here, instead of in the <iframe>.  This makes it easier
  //  to play with the parameters.
  url: string = environment.lightningMapBaseUrl
                + "?interactive=0"
                + "&NavigationControl=0"
                + "&FullScreenControl=0"
                + "&Cookies=0"
                + "&InfoDiv=0"
                + "&MenuButtonDiv=0"
                + "&ScaleControl=0"
                + "&LinksCheckboxChecked=1"
                + "&LinksRangeValue=10"
                + "&MapStyle=2"
                + "&MapStyleRangeValue=10"
                + "&Advertisment=0"
                + environment.lightningMapLatLon
                ;

  constructor( private domSanitizer: DomSanitizer ) { }

  getUrl( ): SafeResourceUrl
  {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( this.url );
  }
}
