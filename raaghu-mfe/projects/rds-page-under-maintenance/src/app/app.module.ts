import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule, SharedModule } from '@libs/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsButtonModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateModule.forRoot()
  ],
  providers: [ TranslateService, TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
