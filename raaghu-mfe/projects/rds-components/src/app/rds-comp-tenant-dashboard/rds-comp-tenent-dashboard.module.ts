import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard.component';
import { RdsWidgetModule, RdsChartLineModule, RdsBigNumberWidgetModule, RdsChartDoughnutModule, RdsChartBoolModule, RdsChartBarHorizontalModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';



@NgModule({
  declarations: [RdsCompTenantDashboardComponent],
  imports: [
    CommonModule,
    RdsCompDataTableModule,
    RdsWidgetModule,
    RdsChartLineModule,
    RdsBigNumberWidgetModule,
    RdsChartDoughnutModule,
    RdsChartBoolModule,
    RdsChartBarHorizontalModule
  ],
  exports: [
    RdsCompTenantDashboardComponent
  ]
})
export class RdsCompTenentDashboardModule { }
