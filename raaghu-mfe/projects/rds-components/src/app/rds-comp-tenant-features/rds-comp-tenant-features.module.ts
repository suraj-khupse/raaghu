import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantFeaturesComponent } from './rds-comp-tenant-features.component';
import { FormsModule } from '@angular/forms';
import { RdsSelectListModule,RdsLabelModule, RdsCounterModule, RdsCheckboxModule, RdsButtonModule } from '@libs/rds-elements';



@NgModule({
  declarations: [RdsCompTenantFeaturesComponent],
  exports:[RdsCompTenantFeaturesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsCounterModule,
    RdsCheckboxModule,
    RdsButtonModule
  ]
})
export class RdsCompTenantFeaturesModule { }
