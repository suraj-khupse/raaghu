import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompClaimsComponent } from './rds-comp-claims.component';
import { RdsCompClaimsShimmerComponent } from './rds-comp-claims-shimmer/rds-comp-claims-shimmer.component';
import { RdsCheckboxModule, RdsLabelModule, RdsButtonModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompClaimsComponent,
    RdsCompClaimsShimmerComponent
  ],
  exports: [
    RdsCompClaimsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCheckboxModule,
    RdsLabelModule,
    RdsButtonModule
  ]
})
export class RdsCompClaimsModule { }
