import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text.component'
import { RdsButtonModule, RdsLabelModule, RdsTextareaModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompEditLanguageTextComponent
  ],
  exports: [
    RdsCompEditLanguageTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsLabelModule,
    RdsTextareaModule
  ]
})
export class RdsCompEditLanguageTextModule { }
