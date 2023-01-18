import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  RdsButtonModule,RdsInputModule, RdsCheckboxModule, RdsDropdownModule, RdsModalModule,
  RdsNavTabModule, RdsCardModule, RdsBadgeModule,
RdsOffcanvasModule,
RdsAlertModule
} from '@libs/rds-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompBasicResourcesModule } from 'projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resources.module';
import { CommonModule } from '@angular/common';

import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompPropertiesModule } from 'projects/rds-components/src/app/rds-comp-properties/rds-comp-properties.module';

@NgModule({
  declarations: [
    AppComponent,
    // BasicresourceComponent,
    // ClaimsComponent,
    // PropertiesComponent,
  
  ],
  imports: [
    // BrowserModule,
    RdsCompDataTableModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsDropdownModule,
    RdsModalModule,
    RdsNavTabModule,
    RdsCardModule,
    RdsBadgeModule,
    RdsOffcanvasModule,
    FormsModule,
    ReactiveFormsModule,
    RdsCompClientResourcesModule,
    RdsCompBasicResourcesModule,
    RdsAlertModule,
    RdsCompPropertiesModule,
   
  ],
  providers: [
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
