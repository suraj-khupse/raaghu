import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompNewClaimTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
    RdsLabelModule,
    RdsDropdownlistModule
  ],
  exports: [
    RdsCompNewClaimTypeComponent
  ]
})
export class RdsCompNewClaimTypeModule { }
