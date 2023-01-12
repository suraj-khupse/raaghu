import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, NgxTranslateModule } from '@libs/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  RdsSideNavModule, RdsWidgetModule, RdsBigNumberWidgetModule, RdsChartStackedModule, RdsButtonModule,
  RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartDoughnutModule, RdsDropdownModule, RdsChartPieModule, RdsChartAreaModule, RdsDatepickerModule, RdsChartLineModule
} from '@libs/rds-elements';
import { RdsCompAdminDashboardModule } from '../../../rds-components/src/app/rds-comp-admin-dashboard/rds-comp-admin-dashboard.module'

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
    RdsCompAdminDashboardModule,
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
    RdsWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
