import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompDynamicPropertiesComponent } from './rds-comp-dynamic-properties.component';
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import { RdsCompInformationModule } from '../rds-comp-information/rds-comp-information.module';
import { RdsPermissionTreeModule } from '../rds-comp-permission-tree/rds-permission-tree.module';
import { RdsOffcanvasModule, RdsNavTabModule, RdsButtonModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompDynamicPropertiesComponent
  ],
  exports: [
    RdsCompDynamicPropertiesComponent
  ],
  imports: [
    CommonModule,
    RdsCompDataTableModule,
    RdsCompInformationModule,
    RdsPermissionTreeModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsButtonModule
  ]
})
export class RdsCompDynamicPropertiesModule { }
