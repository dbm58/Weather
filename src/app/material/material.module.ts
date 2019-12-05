import { NgModule } from '@angular/core';
import {
         MatButtonModule,
         MatGridListModule,
         MatIconModule,
         MatSidenavModule,
         MatTooltipModule
       } from '@angular/material';

const  MaterialComponents =
       [
         MatButtonModule,
         MatGridListModule,
         MatIconModule,
         MatSidenavModule,
         MatTooltipModule
       ];

@NgModule({
  declarations: [ ],
  imports:      [ MaterialComponents ],
  exports:      [ MaterialComponents ]
})
export class MaterialModule { }
