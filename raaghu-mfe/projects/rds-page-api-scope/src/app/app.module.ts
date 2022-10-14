import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';
import { RdsAccordionModule, RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsOffcanvasModule,
    NgxTranslateModule.forRoot(),
    RdsNavTabModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsCheckboxModule,
    RdsAccordionModule,
    FormsModule,
    RdsIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
