import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RdsCompProductListComponent } from './rds-comp-product-list.component';
import {
  RdsLabelModule, RdsCardModule, RdsPriceModule, RdsBadgeModule, RdsButtonModule, RdsRatingModule,
  RdsColorModule, RdsProductImageModule
} from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'



@NgModule({
  declarations: [
    RdsCompProductListComponent
  ],
  exports: [
    RdsCompProductListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RdsLabelModule,
    RdsCardModule,
    RdsIconModule,
    RdsPriceModule,
    RdsBadgeModule,
    RdsButtonModule,
    RdsRatingModule,
    RdsColorModule,
    RdsProductImageModule
  ]
})
export class RdsCompProductListModule { }
