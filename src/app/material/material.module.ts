import { NgModule } from '@angular/core';
import {
         MatButtonModule,
         MatGridListModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatSidenavModule,
         MatTableModule,
         MatTooltipModule
       } from '@angular/material';

const  MaterialComponents =
       [
         MatButtonModule,
         MatGridListModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatSidenavModule,
         MatTableModule,
         MatTooltipModule
       ];

@NgModule({
  declarations: [ ],
  imports:      [ MaterialComponents ],
  exports:      [ MaterialComponents ]
})
export class MaterialModule { }
