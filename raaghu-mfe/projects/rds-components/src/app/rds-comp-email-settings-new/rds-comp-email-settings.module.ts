import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEmailSettingsNewComponent } from './rds-comp-email-settings-new.component';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RdsCompEmailSettingsNewComponent
  ],
  imports: [
    CommonModule,
    RdsInputModule,
    FormsModule,
    RdsCheckboxModule,
    RdsButtonModule
  ],
  exports: [
    RdsCompEmailSettingsNewComponent
  ]
})
export class RdsCompEmailSettingsModule { }
