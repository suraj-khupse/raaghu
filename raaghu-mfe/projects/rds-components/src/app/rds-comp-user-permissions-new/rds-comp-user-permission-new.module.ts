import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserPermissionsNewComponent } from './rds-comp-user-permissions-new.component';
import { RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';
import { RdsCompUserBasicProfileRightModule } from '../rds-comp-user-basic-profile-right/rds-comp-user-basic-profile-right.module';



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
    RdsCompUserBasicProfileRightModule
  ]
})
export class RdsCompUserPermissionNewModule { }
