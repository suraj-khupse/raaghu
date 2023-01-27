import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonComponent } from './rds-button.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsButtonComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsButtonComponent
  ]
})
export class RdsButtonModule { }
