import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RdsAddressInputComponent } from './rds-comp-address-input.component';
import { RdsCompAddressInputShimmerComponent } from './rds-comp-address-input-shimmer/rds-comp-address-input-shimmer.component';

@NgModule({
  declarations: [
    RdsAddressInputComponent,
    RdsCompAddressInputShimmerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RdsAddressInputComponent
  ]
})
export class RdsCompAddressInputModule { }
