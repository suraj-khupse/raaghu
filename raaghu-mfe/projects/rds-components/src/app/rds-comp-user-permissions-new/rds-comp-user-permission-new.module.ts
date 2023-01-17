import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserPermissionsNewComponent } from './rds-comp-user-permissions-new.component';
import { RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';
import { RdsCompUserBasicProfileRightModule } from '../rds-comp-user-basic-profile-right/rds-comp-user-basic-profile-right.module';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompPermissionTreeModule } from '../rds-comp-permission-tree/rds-comp-permission-tree.module';
import { RdsCompTreeStructureModule } from '../rds-comp-tree-structure/rds-comp-tree-structure.module';
import { RdsCompClaimsModule } from '../rds-comp-claims/rds-comp-claims.module';
import { RdsCompClaimsTypeRoleModule } from '../rds-comp-claim-type-role/rds-comp-claims-type-role.module';
@NgModule({
  declarations: [RdsCompUserPermissionsNewComponent],
  exports:[RdsCompUserPermissionsNewComponent],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCheckboxModule,
    FormsModule,
    RdsCompUserBasicProfileRightModule,
    RdsCompPermissionTreeModule,
    RdsCompTreeStructureModule,
    RdsCompDataTableModule,
    RdsCompClaimsTypeRoleModule
  ]
})
export class RdsCompUserPermissionNewModule { }
