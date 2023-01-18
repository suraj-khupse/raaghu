import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsAddressDetailModule, RdsCardDetailModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { SharedModule } from '@libs/shared';
import { RdsCompOrderSummaryModule } from 'projects/rds-components/src/app/rds-comp-order-summary/rds-comp-order-summary.module';
import { RdsCompShoppingCartProductModule } from 'projects/rds-components/src/app/rds-comp-shopping-cart-product/rds-comp-shopping-cart-product.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsLabelModule,
    RdsAddressDetailModule,
    RdsCardDetailModule,
    RdsIconModule,
    RdsCompOrderSummaryModule,
    RdsCompShoppingCartProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
