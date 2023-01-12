import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompCardDetailListComponent } from './rds-comp-card-detail-list.component';
import { RdsCardDetailModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompCardDetailListComponent
  ],
  exports: [
    RdsCompCardDetailListComponent
  ],
  imports: [
    CommonModule,
    RdsCardDetailModule
  ]
})
export class RdsCompCardDetailListModule { }
