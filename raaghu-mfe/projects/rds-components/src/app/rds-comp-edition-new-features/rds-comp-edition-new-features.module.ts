import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEditionNewFeaturesComponent } from './rds-comp-edition-new-features.component';
import { FormsModule } from '@angular/forms';
import { RdsCheckboxModule, RdsCounterModule, RdsDropdownlistModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';




@NgModule({
  declarations: [
    RdsCompEditionNewFeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsCounterModule,
    RdsCheckboxModule,
    RdsDropdownlistModule,
  ],
  exports: [
    RdsCompEditionNewFeaturesComponent
  ]
})
export class RdsCompEditionNewFeaturesModule { }
