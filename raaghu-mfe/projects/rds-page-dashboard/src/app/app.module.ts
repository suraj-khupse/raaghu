import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, NgxTranslateModule } from '@libs/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RdsSideNavModule } from '@libs/rds-elements';
import { RdsBigNumberWidgetModule, RdsChartStackedModule, RdsButtonModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartDoughnutModule, RdsDropdownModule,RdsChartPieModule, RdsChartAreaModule, RdsDatepickerModule, RdsChartLineModule } from '@libs/rds-elements';
import { RdsWidgetModule } from 'projects/libs/rds-elements/src/rds-widget/src/public-api';
import { RdsCompAdminDashboardModule } from 'projects/rds-components/src/app/rds-comp-admin-dashboard/rds-comp-admin-dashboard.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompTenentDashboardModule } from 'projects/rds-components/src/app/rds-comp-tenant-dashboard/rds-comp-tenent-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    RdsSideNavModule,
    HttpClientModule,
    RdsDropdownModule,
    RdsBigNumberWidgetModule,
    RdsChartBarHorizontalModule,
    RdsButtonModule,
    RdsChartDoughnutModule,
    RdsChartBoolModule,
    RdsChartPieModule,
    RdsChartAreaModule,
    RdsDatepickerModule,
    RdsChartStackedModule,
    RdsChartLineModule,
    RdsWidgetModule,
    RdsCompAdminDashboardModule,
    RdsCompDataTableModule,
    RdsCompTenentDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
