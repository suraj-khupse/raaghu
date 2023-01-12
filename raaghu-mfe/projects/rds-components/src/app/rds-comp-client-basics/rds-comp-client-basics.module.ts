import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompClientBasicsComponent } from './rds-comp-client-basics.component';
import { RdsInputModule, RdsTextareaModule, RdsCheckboxModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompClientBasicsComponent
  ],
  exports: [
    RdsCompClientBasicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsCheckboxModule
  ]
})
export class RdsCompClientBasicsModule { }
