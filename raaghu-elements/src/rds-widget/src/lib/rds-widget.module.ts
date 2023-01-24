import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsWidgetComponent } from './rds-widget.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';



@NgModule({
  declarations: [
    RdsWidgetComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsWidgetComponent
  ]
})
export class RdsWidgetModule { }
