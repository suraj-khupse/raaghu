import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompNotificationSettingsComponent } from './rds-comp-notification-settings.component';
import { RdsButtonModule, RdsLabelModule, RdsCheckboxModule, RdsCardModule, RdsModalModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    RdsCompNotificationSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsCardModule,
    RdsModalModule
  ],
  exports: [
    RdsCompNotificationSettingsComponent
  ]
})
export class RdsCompNotificationSettingsModule { }
