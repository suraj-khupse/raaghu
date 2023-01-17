import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompAlertComponent } from './rds-comp-alert.component';
import { RdsAlertModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompAlertComponent
  ],
  imports: [
    CommonModule,
    RdsAlertModule
  ],
  exports : [
    RdsCompAlertComponent
  ]
})
export class RdsCompAlertModule { }
