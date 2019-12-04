import { NgModule } from '@angular/core';
import {
         MatButtonModule,
         MatGridListModule,
         MatIconModule,
         MatSidenavModule
       } from '@angular/material';

const  MaterialComponents =
       [
         MatButtonModule,
         MatGridListModule,
         MatIconModule,
         MatSidenavModule
       ];

@NgModule({
  declarations: [ ],
  imports:      [ MaterialComponents ],
  exports:      [ MaterialComponents ]
})
export class MaterialModule { }
