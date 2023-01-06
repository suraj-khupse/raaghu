import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompAccountNewComponent } from './rds-comp-account-new.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompAccountNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsDropdownlistModule,
    RdsInputModule,
    RdsDropdownlistModule,
    RdsButtonModule
  ],
  exports: [
    RdsCompAccountNewComponent
  ]
})
export class RdsCompAccountNewModule { }
