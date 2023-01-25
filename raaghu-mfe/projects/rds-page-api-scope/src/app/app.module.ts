import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';
import { RdsAccordionModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsCompBasicResourcesModule } from 'projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resources.module';
import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { RdsCompPropertiesModule } from 'projects/rds-components/src/app/rds-comp-properties/rds-comp-properties.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { CommonModule } from '@angular/common';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsOffcanvasModule,
    NgxTranslateModule.forRoot(),
    RdsNavTabModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule,
    RdsCheckboxModule,
    RdsAccordionModule,
    FormsModule,
    RdsIconModule,
    RdsCompBasicResourcesModule,
    RdsCompClientResourcesModule,
    RdsCompPropertiesModule,
    RdsCompDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
