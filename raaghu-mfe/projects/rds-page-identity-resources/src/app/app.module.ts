import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@libs/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  RdsButtonModule, RdsSearchInputModule, RdsSelectListModule, RdsInputModule, RdsPaginationModule, RdsCheckboxModule, RdsAvatarModule, RdsDropdownModule, RdsModalModule,
  RdsNavTabModule, RdsCardModule, RdsChartPieModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsBadgeModule,
  RdsSideNavModule, RdsDatepickerModule, RdsBannerModule, RdsFileUploaderModule, RdsTextEditorModule, RdsOffcanvasModule, RdsTextareaModule
} from '@libs/rds-elements';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicresourceComponent } from './basicresource/basicresource.component';
import { ClaimsComponent } from './claims/claims.component';
import { PropertiesComponent } from './properties/properties.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicresourceComponent,
    ClaimsComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsInputModule,
    RdsPaginationModule,
    RdsCheckboxModule,
    RdsAvatarModule,
    RdsDropdownModule,
    RdsModalModule,
    RdsNavTabModule,
    RdsCardModule,
    RdsChartPieModule,
    RdsChartBarHorizontalModule,
    RdsChartBoolModule,
    RdsBadgeModule,
    RdsSideNavModule,
    RdsOffcanvasModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
