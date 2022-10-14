import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsBigNumberWidgetComponent } from './rds-big-number-widget.component';
import { RdsIconModule } from '@libs/rds-icon';
// import { RdsChartBarHorizontalModule } from '@libs/rds-chart-bar-horizontal';
// import { RdsChartLineModule } from '@libs/rds-chart-line';
// import { RdsLabelModule } from '@libs/rds-label';

@NgModule({
  declarations: [
    RdsBigNumberWidgetComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    // RdsChartBarHorizontalModule,
    // RdsChartLineModule,
    // RdsLabelModule
  ],
  exports: [
    RdsBigNumberWidgetComponent
  ]
})
export class RdsBigNumberWidgetModule { }
