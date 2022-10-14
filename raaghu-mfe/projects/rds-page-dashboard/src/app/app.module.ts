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
    RdsWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
