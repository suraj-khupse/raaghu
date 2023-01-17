import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompSubscriptionComponent } from './rds-comp-subscription.component';
import { RdsCompSubscriptionShimmerComponent } from './rds-comp-subscription-shimmer/rds-comp-subscription-shimmer.component';
import { RdsButtonModule, RdsCardModule } from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'


@NgModule({
  declarations: [
    RdsCompSubscriptionComponent,
    RdsCompSubscriptionShimmerComponent
  ],
  exports: [
    RdsCompSubscriptionComponent
  ],
  imports: [
    CommonModule,
    NgxShimmerLoadingModule,
    RdsIconModule,
    RdsButtonModule,
    RdsCardModule
  ]
})
export class RdsCompSubscriptionModule { }
