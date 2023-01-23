import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsAdminDashboardComponent } from './rds-comp-admin-dashboard.component';
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import {
  RdsWidgetModule, RdsChartLineModule, RdsBigNumberWidgetModule, RdsChartDoughnutModule,
  RdsChartBoolModule, RdsChartBarHorizontalModule, RdsLabelModule
} from "@libs/rds-elements";

@NgModule({
  declarations: [
    RdsAdminDashboardComponent
  ],
  exports: [
    RdsAdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RdsWidgetModule,
    RdsChartLineModule,
    RdsBigNumberWidgetModule,
    RdsChartDoughnutModule,
    RdsChartBoolModule,
    RdsChartBarHorizontalModule,
    RdsCompDataTableModule,
    RdsLabelModule
  ]
})
export class RdsCompAdminDashboardModule { }
