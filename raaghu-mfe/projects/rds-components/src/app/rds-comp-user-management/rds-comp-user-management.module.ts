import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserManagementComponent } from './rds-comp-user-management.component';
import { RdsCompUserManagementShimmerComponent } from './rds-comp-user-management-shimmer/rds-comp-user-management-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { FormsModule } from '@angular/forms';
import { RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [RdsCompUserManagementComponent, RdsCompUserManagementShimmerComponent],
  exports: [RdsCompUserManagementComponent],
  imports: [
    CommonModule,
    NgxShimmerLoadingModule,
    FormsModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsInputModule,
  ]
})
export class RdsCompUserManagementModule { }
