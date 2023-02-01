import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompEditLanguageTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsTextareaModule,
    RdsButtonModule,
    RdsLabelModule,
    NgxTranslateModule.forRoot()
  ],
  exports: [
    RdsCompEditLanguageTextComponent
  ]
})
export class RdsCompEditLanguageTextModule { }
