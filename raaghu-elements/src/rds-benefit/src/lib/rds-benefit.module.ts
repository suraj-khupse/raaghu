import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsBadgeModule } from '@libs/rds-badge';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsBenefitComponent } from './rds-benefit.component';



@NgModule({
  declarations: [
    RdsBenefitComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule,
    RdsBadgeModule
  ],
  exports: [
    RdsBenefitComponent
  ]
})
export class RdsBenefitModule { }
