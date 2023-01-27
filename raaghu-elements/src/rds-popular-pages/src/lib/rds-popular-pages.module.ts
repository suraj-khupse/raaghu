import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsPopularPagesComponent } from './rds-popular-pages.component';



@NgModule({
  declarations: [
    RdsPopularPagesComponent
  ],
  imports: [ 
     CommonModule,
    RdsIconModule,
    RdsLabelModule
    
  ],
  exports: [
    RdsPopularPagesComponent
  ]
})
export class RdsPopularPagesModule { }
