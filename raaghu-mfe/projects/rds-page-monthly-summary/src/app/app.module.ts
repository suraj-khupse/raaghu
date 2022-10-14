import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsChartAreaModule, RdsDropdownlistModule } from '@libs/rds-elements';
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
    RdsDropdownlistModule,
    RdsChartAreaModule,
    NgxTranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
