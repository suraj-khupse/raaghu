import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBadgeComponent } from './rds-badge.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsBadgeComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
  ],
  exports: [
    RdsBadgeComponent
  ]
})
export class RdsBadgeModule { }
