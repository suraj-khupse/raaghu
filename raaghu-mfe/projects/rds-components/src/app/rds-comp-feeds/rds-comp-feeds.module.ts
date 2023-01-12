import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompFeedsComponent } from './rds-comp-feeds.component';
import { RdsAvatarModule, RdsFeedModule, RdsIconModule, RdsLabelModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompFeedsComponent
  ],
  exports: [
    RdsCompFeedsComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule,
    RdsAvatarModule,
    RdsFeedModule
  ]
})
export class RdsCompFeedsModule { }
