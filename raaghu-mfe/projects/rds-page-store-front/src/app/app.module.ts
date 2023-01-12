import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RdsCardModule, RdsLabelModule } from '@libs/rds-elements';
import { SharedModule } from '@libs/shared';
import { RdsCompBackgroundImageModule } from 'projects/rds-components/src/app/rds-comp-background-image/rds-comp-background-image.module';
import { RdsCompProductListModule } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.module';

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
    RdsCardModule,
    RdsCompProductListModule,
    RdsCompBackgroundImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
