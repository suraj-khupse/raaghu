import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonGroupComponent } from './rds-button-group.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsButtonGroupComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    FormsModule
  ],
  exports: [
    RdsButtonGroupComponent
  ]
})
export class RdsButtonGroupModule { }
