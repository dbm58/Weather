import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const  MaterialComponents =
       [
         MatButtonModule,
         MatCardModule,
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
