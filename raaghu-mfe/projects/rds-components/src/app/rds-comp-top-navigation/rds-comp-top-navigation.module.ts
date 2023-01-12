import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation.component';
import { RdsCompNotificationModule } from '../rds-comp-notification/rds-comp-notification.module';
import { RdsCompNotificationSettingsModule } from '../rds-comp-notification-settings/rds-comp-notification-settings.module';
import { RdsCompProfileModule } from '../rds-comp-profile/rds-comp-profile.module';
import { RdsDropdownlistModule, RdsButtonModule, RdsIconModule, RdsBadgeModule, RdsAvatarModule } from "@libs/rds-elements";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RdsTopNavigationComponent
  ],
  exports: [
    RdsTopNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RdsDropdownlistModule,
    RdsButtonModule,
    RdsIconModule,
    RdsBadgeModule,
    RdsAvatarModule,
    RdsCompNotificationModule,
    RdsCompNotificationSettingsModule,
    RdsCompProfileModule
  ]
})
export class RdsCompTopNavigationModule { }
