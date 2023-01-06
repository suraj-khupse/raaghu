import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompIdentityManagementNewComponent } from './rds-comp-identity-management-new.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompIdentityManagementNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule
  ],
  exports: [
    RdsCompIdentityManagementNewComponent
  ]
})
export class RdsCompIdentityManagementNewModule { }
