import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompWebhookSubscriptionComponent } from './rds-comp-webhook-subscription.component';
import { RdsButtonModule, RdsInputModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompWebhookSubscriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsButtonModule,
    RdsCompDataTableModule,
    NgxTranslateModule,
    RdsLabelModule
  
  ],
  exports: [RdsCompWebhookSubscriptionComponent]
})
export class RdsCompWebhookSubscriptionModule { }
