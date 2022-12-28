import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule } from '@libs/rds-elements';
import { RdsCompOpenPositionModule } from 'projects/rds-components/src/app/rds-comp-open-position/rds-comp-open-position.module';
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
    RdsButtonModule,
    RdsCompOpenPositionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
