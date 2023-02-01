import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompProductOverviewComponent } from './rds-comp-product-overview.component';
import { RdsAccordionModule, RdsBadgeModule, RdsButtonModule, RdsColorModule, RdsFeatureListModule, RdsIconLabelModule, RdsLabelModule, RdsPriceModule, RdsRatingModule, RdsSizeModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
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
