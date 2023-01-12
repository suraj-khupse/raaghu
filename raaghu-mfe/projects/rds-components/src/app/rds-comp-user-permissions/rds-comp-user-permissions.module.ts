import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserPermissionsComponent } from './rds-comp-user-permissions.component';
import { RdsCompAlertModule } from "../rds-comp-alert/rds-comp-alert.module";
import { RdsPermissionTreeModule } from "../rds-comp-permission-tree/rds-permission-tree.module";
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import { RdsCompUserBasicsModule } from "../rds-comp-user-basics/rds-comp-user-basics.module";
import {
  RdsButtonModule, RdsFabMenuModule, RdsOffcanvasModule, RdsNavTabModule, RdsCheckboxModule, RdsSearchInputModule
} from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsCompUserPermissionsComponent
  ],
  exports: [
    RdsCompUserPermissionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCompAlertModule,
    RdsPermissionTreeModule,
    RdsCompDataTableModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    RdsCompUserBasicsModule
  ]
})
export class RdsCompUserPermissionsModule { }
