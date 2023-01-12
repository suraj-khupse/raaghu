import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompContactUsComponent } from './rds-comp-contact-us.component';
import { RdsButtonModule, RdsInputModule, RdsTextareaModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompContactUsComponent
  ],
  exports: [
    RdsCompContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule
  ]
})
export class RdsCompContactUsModule { }
