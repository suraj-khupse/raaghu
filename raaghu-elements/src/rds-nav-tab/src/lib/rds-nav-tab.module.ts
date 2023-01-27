import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsNavTabComponent } from './rds-nav-tab.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsNavTabComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsNavTabComponent
  ]
})
export class RdsNavTabModule { }
