import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { SharedModule } from '@libs/shared';
import { RdsLabelModule } from 'projects/libs/rds-elements/src/rds-label/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsTextareaModule,
    RdsLabelModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
