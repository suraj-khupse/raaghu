import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RdsBreadcrumbModule, RdsProductImageModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompBenefitModule } from 'projects/rds-components/src/app/rds-comp-benefit/rds-comp-benefit.module';
import { RdsCompProductListModule } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.module';
import { RdsCompProductOverviewModule } from 'projects/rds-components/src/app/rds-comp-product-overview/rds-comp-product-overview.module';
import { RdsCompReviewCategoryModule } from 'projects/rds-components/src/app/rds-comp-review-category/rds-comp-review-category.module';

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
    RdsProductImageModule,
    RdsBreadcrumbModule,
    NgxTranslateModule.forRoot(),
    RdsCompProductOverviewModule,
    RdsCompBenefitModule,
    RdsCompReviewCategoryModule,
    RdsCompProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
