import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompContactInformationComponent } from './rds-comp-contact-information.component';
import { RdsButtonModule, RdsInputModule, RdsCheckboxModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompContactInformationComponent
  ],
  exports: [
    RdsCompContactInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsCheckboxModule
  ]
})
export class RdsCompContactInformationModule { }
