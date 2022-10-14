import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule } from '@libs/rds-elements';
import { SharedModule } from '../../../libs/shared/src/public-api';

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
    RdsButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
