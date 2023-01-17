
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsStatComponent } from './rds-stat.component';



@NgModule({
  declarations: [
    RdsStatComponent
  ],
  imports: [
    RdsIconModule,
    CommonModule
  ],
  exports: [
    RdsStatComponent
  ]
})
export class RdsStatModule { }
