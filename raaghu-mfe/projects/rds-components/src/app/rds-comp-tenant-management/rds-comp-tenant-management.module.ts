import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantManagementComponent } from './rds-comp-tenant-management.component';
import { RdsCheckboxModule, RdsDropdownlistModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompTenantManagementShimmerComponent } from './rds-comp-tenant-management-shimmer/rds-comp-tenant-management-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RdsCompTenantManagementComponent, RdsCompTenantManagementShimmerComponent],
  exports:[RdsCompTenantManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsDropdownlistModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompTenantManagementModule { }
