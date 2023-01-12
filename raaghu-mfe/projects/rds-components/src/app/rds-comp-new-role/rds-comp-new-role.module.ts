import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsCompNewRoleComponent } from './rds-comp-new-role.component';
import { RdsCompNewRoleShimmerComponent } from './rds-comp-new-role-shimmer/rds-comp-new-role-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompNewRoleComponent,
    RdsCompNewRoleShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsLabelModule,
    RdsBannerModule,
    RdsButtonModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompNewRoleComponent
  ]
})
export class RdsCompNewRoleModule { }
