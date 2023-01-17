import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { SharedModule } from '@libs/shared';
import { RdsCompContactUsModule } from 'projects/rds-components/src/app/rds-comp-contact-us/rds-comp-contact-us.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    SharedModule,
    RdsLabelModule,
    RdsIconModule,
    AppRoutingModule,
    RdsCompContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
