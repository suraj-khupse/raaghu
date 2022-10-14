import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsOffcanvasModule, RdsSearchInputModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditLanguageTextComponent } from './edit-language-text/edit-language-text.component';

@NgModule({
  declarations: [
    AppComponent,
    EditLanguageTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,
    RdsOffcanvasModule,
    NgxTranslateModule.forRoot(),
    RdsButtonModule,RdsTextareaModule,FormsModule,RdsSelectListModule,RdsSearchInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
