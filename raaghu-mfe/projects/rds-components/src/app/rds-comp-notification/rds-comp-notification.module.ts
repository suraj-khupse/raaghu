import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsNotificationComponent } from './rds-comp-notification.component';
import { RdsButtonModule, RdsCardModule, RdsIconModule, RdsBadgeModule, RdsOffcanvasModule } from '@libs/rds-elements';

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
