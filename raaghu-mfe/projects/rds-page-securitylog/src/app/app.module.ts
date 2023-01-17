import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
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
    RdsButtonModule,
    RdsIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
