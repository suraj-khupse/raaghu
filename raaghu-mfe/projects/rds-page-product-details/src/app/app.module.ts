import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsBreadcrumbModule, RdsProductImageModule } from '@libs/rds-elements';
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
    RdsProductImageModule,
    RdsBreadcrumbModule,
    NgxTranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
