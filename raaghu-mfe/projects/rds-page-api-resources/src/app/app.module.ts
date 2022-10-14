import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiBasicsComponent } from './api-basics/api-basics.component';
import { ApiClaimsComponent } from './api-claims/api-claims.component';
import { ApiSecretsComponent } from './api-secrets/api-secrets.component';
import { ApiPropertiesComponent } from './api-properties/api-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiBasicsComponent,
    ApiClaimsComponent,
    ApiSecretsComponent,
    ApiPropertiesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsCheckboxModule,
    RdsDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
