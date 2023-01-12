import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompApplyForPositionComponent } from './rds-comp-apply-for-position.component';
import { RdsCompAlertPopupModule } from "../rds-comp-alert-popup/rds-comp-alert-popup.module";
import { RdsLabelModule, RdsInputModule, RdsButtonModule, RdsTextareaModule, RdsFileUploaderModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompApplyForPositionComponent
  ],
  exports: [
    RdsCompApplyForPositionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsInputModule,
    RdsButtonModule,
    RdsTextareaModule,
    RdsFileUploaderModule,
    RdsCompAlertPopupModule
  ]
})
export class RdsCompApplyForPositionModule { }
