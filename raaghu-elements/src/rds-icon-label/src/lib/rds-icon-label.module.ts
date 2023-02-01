import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { RdsIconLabelComponent } from './rds-icon-label.component';



@NgModule({
  declarations: [
    RdsIconLabelComponent
  ],
  imports: [
    RdsIconModule,
    CommonModule
  ],
  exports: [
    RdsIconLabelComponent
  ]
})
export class RdsIconLabelModule { }
