import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionItemComponent, RdsAccordionModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@libs/shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsCheckboxModule,
    RdsAccordionModule,
    FormsModule,
    SharedModule,
    RdsIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
