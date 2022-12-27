import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@libs/shared';
import { RdsCompFaqModule } from 'projects/rds-components/src/app/rds-comp-faq/rds-comp-faq.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsCompFaqModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
