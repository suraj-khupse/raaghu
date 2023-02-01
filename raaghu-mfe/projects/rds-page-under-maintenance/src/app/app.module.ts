import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule } from '@libs/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateModule.forRoot(),
    RdsIconModule
  ],
  providers: [ TranslateService, TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
