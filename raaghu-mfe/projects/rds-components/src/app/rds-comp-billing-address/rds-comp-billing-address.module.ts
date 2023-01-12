import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompBillingAddressComponent } from './rds-comp-billing-address.component';
import { RdsInputModule, RdsButtonModule, RdsSelectListModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompBillingAddressComponent
  ],
  exports: [
    RdsCompBillingAddressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule,
    RdsSelectListModule
  ]
})
export class RdsCompBillingAddressModule { }
