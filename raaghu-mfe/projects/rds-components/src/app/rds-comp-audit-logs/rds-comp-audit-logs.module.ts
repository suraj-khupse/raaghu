import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompAuditLogsComponent } from './rds-comp-audit-logs.component';
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import {
  RdsButtonModule, RdsInputModule, RdsDropdownlistModule, RdsNavTabModule, RdsDatepickerModule,
  RdsCheckboxModule, RdsFabMenuModule, RdsOffcanvasModule, RdsBadgeModule
} from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'



@NgModule({
  declarations: [
    RdsCompAuditLogsComponent
  ],
  exports: [
    RdsCompAuditLogsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCompDataTableModule,
    RdsButtonModule,
    RdsInputModule,
    RdsIconModule,
    RdsNavTabModule,
    RdsDatepickerModule,
    RdsCheckboxModule,
    RdsFabMenuModule,
    RdsDropdownlistModule,
    RdsOffcanvasModule,
    RdsBadgeModule
  ]
})
export class RdsCompAuditLogsModule { }
