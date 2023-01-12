import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompMemberActivityComponent } from './rds-comp-member-activity.component';
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import { RdsDropdownlistModule, RdsSearchInputModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompMemberActivityComponent
  ],
  exports: [
    RdsCompMemberActivityComponent
  ],
  imports: [
    CommonModule,
    RdsCompDataTableModule,
    RdsDropdownlistModule,
    RdsSearchInputModule
  ]
})
export class RdsCompMemberActivityModule { }
