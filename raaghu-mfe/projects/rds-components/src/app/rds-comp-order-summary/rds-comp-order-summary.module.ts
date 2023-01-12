import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompOrderSummaryComponent } from './rds-comp-order-summary.component';
import { RdsButtonModule, RdsLabelModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompOrderSummaryComponent
  ],
  exports: [
    RdsCompOrderSummaryComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsButtonModule
  ]
})
export class RdsCompOrderSummaryModule { }
