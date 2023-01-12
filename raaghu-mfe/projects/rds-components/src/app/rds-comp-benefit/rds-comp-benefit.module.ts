import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompBenefitComponent } from './rds-comp-benefit.component';
import { RdsBenefitModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompBenefitComponent
  ],
  exports: [
    RdsCompBenefitComponent
  ],
  imports: [
    CommonModule,
    RdsBenefitModule
  ]
})
export class RdsCompBenefitModule { }
