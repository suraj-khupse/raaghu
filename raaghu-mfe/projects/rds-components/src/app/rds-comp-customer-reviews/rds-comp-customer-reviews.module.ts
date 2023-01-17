import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompCustomerReviewsComponent } from './rds-comp-customer-reviews.component';
import { RdsLabelModule, RdsProgressbarModule, RdsRatingModule } from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'



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
