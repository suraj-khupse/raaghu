import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { RdsTextEditorComponent } from './rds-text-editor.component';

@NgModule({
  declarations: [
    RdsTextEditorComponent,
  ],
  imports: [
     CommonModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
  exports: [
    RdsTextEditorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RdsTextEditorModule { }
