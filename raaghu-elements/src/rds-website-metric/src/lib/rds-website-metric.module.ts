import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsWebsiteMetricComponent } from './rds-website-metric.component';



@NgModule({
  declarations: [
    RdsWebsiteMetricComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsIconModule,
    RdsButtonModule
  ],
  exports: [
    RdsWebsiteMetricComponent
  ]
})
export class RdsWebsiteMetricModule { }
