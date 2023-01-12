import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompDeliveryMethodComponent } from './rds-comp-delivery-method.component';
import { RdsButtonModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompDeliveryMethodComponent
  ],
  exports: [
    RdsCompDeliveryMethodComponent
  ],
  imports: [
    CommonModule,
    RdsButtonModule
  ]
})
export class RdsCompDeliveryMethodModule { }
