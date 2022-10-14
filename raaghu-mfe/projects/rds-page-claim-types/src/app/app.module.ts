import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimTypesComponent } from './claim-types/claim-types.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
@NgModule({
  declarations: [
    AppComponent,
    ClaimTypesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsOffcanvasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
