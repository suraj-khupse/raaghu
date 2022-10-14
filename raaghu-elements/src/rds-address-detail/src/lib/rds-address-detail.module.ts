import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsAddressDetailComponent } from './rds-address-detail.component';



@NgModule({
  declarations: [
    RdsAddressDetailComponent
  ],
  imports: [
    RdsIconModule
  ],
  exports: [
    RdsAddressDetailComponent
  ]
})
export class RdsAddressDetailModule { }
