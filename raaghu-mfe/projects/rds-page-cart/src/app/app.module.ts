import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { RdsIconLabelModule } from '@libs/rds-icon-label';
// import { RdsIconLabelModule } from '@libs/rds-elements';
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
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsCompShoppingCartProductModule,
    RdsCompOrderSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
