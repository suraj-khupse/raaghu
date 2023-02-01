import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsAddressDetailComponent } from './rds-address-detail.component';

@NgModule({
  declarations: [
    RdsAddressDetailComponent,
    
  ],
  imports: [
    RdsIconModule,
    CommonModule
  ],
  exports: [
    RdsAddressDetailComponent
  ]
})
export class RdsAddressDetailModule { }
