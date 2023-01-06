import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompClaimTypeRoleComponent } from './rds-comp-claim-type-role.component';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';



@NgModule({
  declarations: [
    RdsCompClaimTypeRoleComponent
  ],
  imports: [
    CommonModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsBannerModule,
    RdsButtonModule,
    FormsModule,
    RdsLabelModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsDropdownlistModule,
    RdsCompDataTableModule
  ],
  exports:[
    RdsCompClaimTypeRoleComponent
  ]
})
export class RdsCompClaimsTypeRoleModule { }
