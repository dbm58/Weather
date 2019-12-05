import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  @Input( ) routerLink;
  @Input( ) fontIcon;

  constructor( public matIconRegistry: MatIconRegistry )
  {
    matIconRegistry.registerFontClassAlias ('wi');
  }

  ngOnInit() {
  }

}
