import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantBasicProfileRightComponent } from './rds-comp-tenant-basic-profile-right.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsInputModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompTenantBasicProfileRightComponent],
  exports:[RdsCompTenantBasicProfileRightComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsSelectListModule,
    RdsLabelModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompTenantBasicProfileRightModule { }
