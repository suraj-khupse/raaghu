import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsNotificationComponent } from './rds-comp-notification.component';
import { RdsButtonModule, RdsCardModule, RdsBadgeModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'

@NgModule({
  declarations: [
    RdsNotificationComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsButtonModule,
    RdsBadgeModule,
    RdsCardModule,
    RdsOffcanvasModule
  ],
  exports: [
    RdsNotificationComponent
  ]
})
export class RdsCompNotificationModule { }
