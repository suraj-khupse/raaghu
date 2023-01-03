import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';
import { RdsCompNewRoleComponent } from './rds-comp-new-role.component';
import { RdsCompNewRoleShimmerComponent } from './rds-comp-new-role-shimmer/rds-comp-new-role-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [
    RdsCompNewRoleComponent,
    RdsCompNewRoleShimmerComponent
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
    NgxTranslateModule.forRoot()
  ],
  exports: [
    RdsCompNewRoleComponent
  ],
})
export class RdsCompNewRoleModule { }
