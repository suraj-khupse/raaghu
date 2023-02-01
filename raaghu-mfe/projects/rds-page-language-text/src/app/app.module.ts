import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsOffcanvasModule, RdsSearchInputModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditLanguageTextComponent } from './edit-language-text/edit-language-text.component';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompEditLanguageTextModule } from 'projects/rds-components/src/app/rds-comp-edit-language-text/rds-comp-edit-language-text.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EditLanguageTextComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,SharedModule,
    RdsOffcanvasModule,
    RdsCompDataTableModule,
    NgxTranslateModule.forRoot(),
    RdsButtonModule,RdsTextareaModule,FormsModule,RdsSelectListModule,RdsSearchInputModule,
    RdsCompEditLanguageTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
