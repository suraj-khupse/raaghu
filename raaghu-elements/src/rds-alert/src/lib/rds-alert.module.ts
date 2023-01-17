import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsAlertComponent } from './rds-alert.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsAlertComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsAlertComponent
  ]
})
export class RdsAlertModule { }
