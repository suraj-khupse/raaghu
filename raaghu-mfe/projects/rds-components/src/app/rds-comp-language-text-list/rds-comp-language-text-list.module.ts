import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompLanguageTextListComponent } from './rds-comp-language-text-list.component';
import { RdsCompEditLanguageTextModule } from "../rds-comp-edit-language-text/rds-comp-edit-language-text.module";
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import { RdsSelectListModule, RdsOffcanvasModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompLanguageTextListComponent
  ],
  exports: [
    RdsCompLanguageTextListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsSelectListModule,
    RdsOffcanvasModule,
    RdsCompDataTableModule,
    RdsCompEditLanguageTextModule
  ]
})
export class RdsCompLanguageTextListModule { }
