import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompProductOverviewComponent } from './rds-comp-product-overview.component';
import { RdsAccordionModule, RdsBadgeModule, RdsButtonModule, RdsColorModule, RdsFeatureListModule, RdsIconLabelModule, RdsIconModule, RdsLabelModule, RdsPriceModule, RdsRatingModule, RdsSizeModule } from '@libs/rds-elements';
import { RdsCompBenefitModule } from '../rds-comp-benefit/rds-comp-benefit.module';



@NgModule({
  declarations: [
    RdsCompProductOverviewComponent
  ],
  imports: [
    CommonModule,
    RdsPriceModule,
    RdsRatingModule,
    RdsColorModule,
    RdsSizeModule,
    RdsIconModule,
    RdsIconLabelModule,
    RdsButtonModule,
    RdsBadgeModule,
    RdsLabelModule,
    RdsFeatureListModule,
    RdsAccordionModule,
    RdsCompBenefitModule
  ],
  exports:[
    RdsCompProductOverviewComponent
  ]
})
export class RdsCompProductOverviewModule { }
