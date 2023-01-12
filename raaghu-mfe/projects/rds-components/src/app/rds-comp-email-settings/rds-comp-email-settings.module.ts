import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompEmailSettingsComponent } from './rds-comp-email-settings.component';
import { RdsButtonModule, RdsInputModule, RdsLabelModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompEmailSettingsComponent
  ],
  exports: [
    RdsCompEmailSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsInputModule,
    RdsButtonModule
  ]
})
export class RdsCompEmailSettingsModule { }
