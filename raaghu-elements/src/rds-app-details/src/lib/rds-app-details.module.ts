import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsAppDetailsComponent } from './rds-app-details.component';
@NgModule({
  declarations: [
    RdsAppDetailsComponent
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule
  ],
  exports: [
    RdsAppDetailsComponent
  ]
})
export class RdsAppDetailsModule { }
