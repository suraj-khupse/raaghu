import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsDropdownlistModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsSearchInputModule,
    RdsDropdownlistModule,
    NgxTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
