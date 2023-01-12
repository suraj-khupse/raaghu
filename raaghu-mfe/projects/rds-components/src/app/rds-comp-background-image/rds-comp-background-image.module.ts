import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompBackgroundImageComponent } from './rds-comp-background-image.component';
import { RdsLabelModule, RdsButtonModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompBackgroundImageComponent
  ],
  exports: [
    RdsCompBackgroundImageComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsButtonModule
  ]
})
export class RdsCompBackgroundImageModule { }
