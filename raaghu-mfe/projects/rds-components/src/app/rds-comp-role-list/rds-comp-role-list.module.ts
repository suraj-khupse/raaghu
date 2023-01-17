import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompRoleListComponent } from './rds-comp-role-list.component';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsFabMenuModule, RdsInputModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsNavTabModule } from '@libs/rds-nav-tab';
import { RdsPermissionTreeModule } from '../rds-comp-permission-tree/rds-permission-tree.module';
import { RdsCompNewRoleModule } from '../rds-comp-new-role/rds-comp-new-role.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RdsCompAlertModule } from '../rds-comp-alert/rds-comp-alert.module';
//import { RdsIconModule } from '@libs/rds-icon';
//import { RdsCompNewRoleShimmerComponent } from '../rds-comp-new-role/rds-comp-new-role-shimmer/rds-comp-new-role-shimmer.component';
// import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [RdsCompRoleListComponent,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RdsButtonModule,
    RdsBannerModule,
    RdsCompDataTableModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCompNewRoleModule,
    RdsPermissionTreeModule,
    RdsSearchInputModule,
    
    RdsCompAlertModule,
   

    
  ],
  exports: [RdsCompRoleListComponent]
})
export class RdsCompRoleListModule { }
