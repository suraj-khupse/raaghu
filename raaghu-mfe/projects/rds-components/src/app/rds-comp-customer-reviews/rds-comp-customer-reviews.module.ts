import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompCustomerReviewsComponent } from './rds-comp-customer-reviews.component';
import { RdsLabelModule, RdsIconModule, RdsProgressbarModule, RdsRatingModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompCustomerReviewsComponent
  ],
  exports: [
    RdsCompCustomerReviewsComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsProgressbarModule,
    RdsIconModule,
    RdsRatingModule
  ]
})
export class RdsCompCustomerReviewsModule { }
