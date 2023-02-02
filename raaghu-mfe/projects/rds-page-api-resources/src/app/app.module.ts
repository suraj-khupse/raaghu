import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsButtonModule,RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompBasicResourcesModule } from 'projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resources.module';
import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { RdsCompPropertiesModule } from 'projects/rds-components/src/app/rds-comp-properties/rds-comp-properties.module';
import { RdsCompSecretsModule } from 'projects/rds-components/src/app/rds-comp-secrets/rds-comp-secrets.module';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RdsCompDataTableModule,
    RdsCompBasicResourcesModule,
    RdsCompClientResourcesModule,
    RdsCompPropertiesModule,
    RdsCompSecretsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }