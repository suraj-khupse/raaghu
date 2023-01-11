import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompAuditLogsNewComponent } from './rds-comp-audit-logs-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsBadgeModule, RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';



@NgModule({
  declarations: [
    RdsCompAuditLogsNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsDatepickerModule,
    RdsInputModule,
    RdsSelectListModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsBadgeModule,
    RdsNavTabModule,
    NgxTranslateModule,
    RdsCompDataTableModule,
    RdsDropdownlistModule
    ],
  exports:[
    RdsCompAuditLogsNewComponent
  ]
})
export class RdsCompAuditLogsNewModule { }
