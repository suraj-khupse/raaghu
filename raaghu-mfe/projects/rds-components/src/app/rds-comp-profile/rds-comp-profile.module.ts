import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompProfileComponent } from './rds-comp-profile.component';
import { RdsCompLinkedAccountsModule } from "../rds-comp-linked-accounts/rds-comp-linked-accounts.module";
import {
  RdsIconModule, RdsLabelModule, RdsButtonModule, RdsModalModule, RdsOffcanvasModule,
  RdsAvatarModule, RdsNavTabModule, RdsDropdownlistModule
} from '@libs/rds-elements';
import { RdsCompUserDelegationsModule } from '../rds-comp-user-delegations/rds-comp-user-delegations.module';
import { RdsCompLoginAttemptsModule } from '../rds-comp-login-attempts/rds-comp-login-attempts.module';
import { RdsCompMysettingsModule } from '../rds-comp-mysettings/rds-comp-mysettings.module';
import { RdsCompDownloadCollectionModule } from '../rds-comp-download-collection/rds-comp-download-collection.module';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';

@NgModule({
  declarations: [
    RdsCompProfileComponent
  ],
  exports: [
    RdsCompProfileComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule,
    RdsButtonModule,
    RdsModalModule,
    RdsOffcanvasModule,
    RdsCompLinkedAccountsModule,
    RdsAvatarModule,
    RdsNavTabModule,
    RdsDropdownlistModule,
    RdsCompUserDelegationsModule,
    RdsCompLoginAttemptsModule,
    RdsCompMysettingsModule,
    RdsCompDownloadCollectionModule,
    RdsCompAlertPopupModule
  ]
})
export class RdsCompProfileModule { }
