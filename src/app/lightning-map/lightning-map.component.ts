import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lightning-map',
  templateUrl: './lightning-map.component.html',
  styleUrls: ['./lightning-map.component.css']
})
export class LightningMapComponent implements OnInit
{
  //  Build up the URL here, instead of in the <iframe>.  This makes it easier
  //  to play with the parameters.
  url: string = "http://map.blitzortung.org/index.php"
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
                + "#6.5/44.542/-88.728"
                ;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() { }

  getUrl( ): SafeResourceUrl
  {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( this.url );
  }
}
