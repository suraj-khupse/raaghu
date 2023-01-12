import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsLabelModule } from '@libs/rds-elements';
import { SharedModule } from '@libs/shared';
import { RdsCompProductListModule } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.module';

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
    RdsLabelModule,
    SharedModule,
    RdsCompProductListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
