import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPaymentDetailsComponent } from './rds-comp-payment-details.component';
import { RdsButtonModule, RdsInputModule, RdsRadioButtonModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RdsCompPaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsRadioButtonModule,
    RdsInputModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompPaymentDetailsComponent
  ]
})
export class RdsCompPaymentDetailsModule { }
