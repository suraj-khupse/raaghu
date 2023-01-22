import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantListNewComponent } from './rds-comp-tenant-list-new.component';
import { RdsButtonModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompTenantBasicProfileRightModule } from '../rds-comp-tenant-basic-profile-right/rds-comp-tenant-basic-profile-right.module';
import { RdsCompTenantFeaturesModule } from '../rds-comp-tenant-features/rds-comp-tenant-features.module';
import { RdsCompEditionNewFeaturesModule } from '../rds-comp-edition-new-features/rds-comp-edition-new-features.module';



@NgModule({
  declarations: [RdsCompTenantListNewComponent],
  exports: [RdsCompTenantListNewComponent],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsCompDataTableModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCompTenantBasicProfileRightModule,
    RdsCompTenantFeaturesModule,
    RdsCompEditionNewFeaturesModule
    
  ]
})
export class RdsCompTenantListNewModule { }
