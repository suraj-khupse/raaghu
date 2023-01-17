import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompFeedsComponent } from './rds-comp-feeds.component';
import { RdsAvatarModule, RdsFeedModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'



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
