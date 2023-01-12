import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type.component';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompNewClaimTypeComponent
  ],
  exports: [
    RdsCompNewClaimTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule
  ]
})
export class RdsCompNewClaimTypeModule { }
