import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RdsAddressDetailModule, RdsCardDetailModule, RdsLabelModule } from '@libs/rds-elements';


import { SharedModule } from '@libs/shared';
import { RdsCompOrderDetailsModule } from 'projects/rds-components/src/app/rds-comp-order-details/rds-comp-order-details.module';
import { RdsCompOrderSummaryModule } from 'projects/rds-components/src/app/rds-comp-order-summary/rds-comp-order-summary.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsLabelModule,
    RdsAddressDetailModule,
    RdsCardDetailModule,
    RdsCompOrderDetailsModule,
    RdsCompOrderSummaryModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
