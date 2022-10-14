import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsNavBarComponent } from './rds-nav-bar.component';
import { RdsIconModule } from '@libs/rds-icon';

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
