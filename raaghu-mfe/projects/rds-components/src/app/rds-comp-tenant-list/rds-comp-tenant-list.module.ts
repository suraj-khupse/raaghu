import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantListComponent } from './rds-comp-tenant-list.component';
import { RdsButtonModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompAlertModule } from '../rds-comp-alert/rds-comp-alert.module';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompTenantInformationShimmerComponent } from '../rds-comp-tenant-information/rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { RdsCompTenantInformationModule } from '../rds-comp-tenant-information/rds-comp-tenant-information.module';
import { RdsCompTenantSettingsModule } from '../rds-comp-tenant-settings/rds-comp-tenant-settings.module';
import { RdsPermissionTreeModule } from '../rds-comp-permission-tree/rds-permission-tree.module';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [RdsCompTenantListComponent],
  exports: [RdsCompTenantListComponent],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsCompAlertModule,
    RdsCompDataTableModule,
    RdsFabMenuModule,
    RdsNavTabModule,
    RdsCompTenantInformationModule,
    RdsCompTenantSettingsModule,
    RdsPermissionTreeModule,
    RdsOffcanvasModule,
    NgxShimmerLoadingModule
    
  ]
})
export class RdsCompTenantListModule { }
