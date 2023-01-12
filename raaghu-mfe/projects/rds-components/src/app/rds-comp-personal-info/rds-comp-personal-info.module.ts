import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPersonalInfoComponent } from './rds-comp-personal-info.component';
import { FormsModule } from '@angular/forms';
import { RdsAvatarModule, RdsButtonModule, RdsFileUploaderModule, RdsInputModule, RdsLabelModule, RdsSelectListModule, RdsTextEditorModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompPersonalInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsAvatarModule,
    RdsButtonModule,
    RdsInputModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsTextEditorModule,
    RdsFileUploaderModule,
  ],
  exports: [
    RdsCompPersonalInfoComponent
  ]
})
export class RdsCompPersonalInfoModule { }
