import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources.component';
import { RdsCheckboxModule } from "../../../../libs/rds-elements/src/rds-checkbox/src/lib/rds-checkbox.module";
import { RdsAccordionModule } from "../../../../libs/rds-elements/src/rds-accordion/src/lib/rds-accordian.module";


@NgModule({
  declarations: [
    RdsCompClientResourcesComponent
  ],
  exports: [
    RdsCompClientResourcesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCheckboxModule,
    RdsAccordionModule
  ]
})
export class RdsCompClientResourcesModule { }
