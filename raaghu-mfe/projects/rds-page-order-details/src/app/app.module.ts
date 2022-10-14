import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsAddressDetailModule, RdsCardDetailModule, RdsLabelModule } from '@libs/rds-elements';


import { SharedModule } from '@libs/shared';
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
    RdsLabelModule,
    RdsAddressDetailModule,
    RdsCardDetailModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
