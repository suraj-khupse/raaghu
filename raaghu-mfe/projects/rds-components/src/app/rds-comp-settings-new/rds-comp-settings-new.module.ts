import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompSettingsNewComponent } from './rds-comp-settings-new.component';
import { RdsNavTabModule } from '@libs/rds-elements';
import { RdsCompEmailSettingsModule } from '../rds-comp-email-settings-new/rds-comp-email-settings.module';
import { RdsCompIdentityManagementNewModule } from '../rds-comp-identity-management-new/rds-comp-identity-management-new.module';
import { RdsCompThemeNewModule } from '../rds-comp-theme-new/rds-comp-theme-new.module';
import { RdsCompAccountNewModule } from '../rds-comp-account-new/rds-comp-account-new.module';



@NgModule({
  declarations: [
    RdsCompSettingsNewComponent
  ],
  imports: [
    CommonModule,
    RdsNavTabModule,
    RdsCompEmailSettingsModule,
    RdsCompIdentityManagementNewModule,
    RdsCompThemeNewModule,
    RdsCompAccountNewModule
  ],
  exports: [
    RdsCompSettingsNewComponent
  ]
})
export class RdsCompSettingsNewModule { }
