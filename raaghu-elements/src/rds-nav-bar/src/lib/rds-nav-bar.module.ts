import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsNavBarComponent } from './rds-nav-bar.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsNavBarComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsNavBarComponent
  ]
})
export class RdsNavBarModule { }
