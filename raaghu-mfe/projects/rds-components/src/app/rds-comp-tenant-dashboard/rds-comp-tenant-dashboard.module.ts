import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard.component';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import {
  RdsWidgetModule, RdsChartLineModule, RdsBigNumberWidgetModule, RdsChartDoughnutModule, RdsChartBoolModule,
  RdsChartBarHorizontalModule
} from "@libs/rds-elements";

@NgModule({
  declarations: [
    RdsCompTenantDashboardComponent
  ],
  exports: [
    RdsCompTenantDashboardComponent
  ],
  imports: [
    CommonModule,
    RdsCompDataTableModule,
    RdsWidgetModule,
    RdsChartLineModule,
    RdsBigNumberWidgetModule,
    RdsChartDoughnutModule,
    RdsChartBoolModule,
    RdsChartBarHorizontalModule
  ]
})
export class RdsCompTenantDashboardModule { }
