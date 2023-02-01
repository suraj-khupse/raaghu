import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';



@NgModule({
  declarations: [RdsCompNewClaimTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsLabelModule,
    RdsDropdownlistModule,
    RdsButtonModule,
  ],
  exports:[RdsCompNewClaimTypeComponent]
})
export class RdsCompNewClaimTypeModule { }
