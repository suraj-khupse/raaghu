import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsDropdownComponent } from './rds-dropdown.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsDropdownComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsDropdownComponent
  ]
})
export class RdsDropdownModule { }
