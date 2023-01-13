import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompShippingAddressComponent } from './rds-comp-shipping-address.component';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsSelectListModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompShippingAddressComponent
  ],
  exports: [
    RdsCompShippingAddressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule,
    RdsSelectListModule,
    RdsCheckboxModule
  ]
})
export class RdsCompShippingAddressModule { }
