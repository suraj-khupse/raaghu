import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsDropdownModule, RdsOffcanvasModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompNewLanguageModule } from 'projects/rds-components/src/app/rds-comp-new-language/rds-comp-new-language.module';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    RdsCompDataTableModule,
    AppRoutingModule,
    RdsOffcanvasModule,
    RdsButtonModule,
    RdsDropdownModule,
    RdsCheckboxModule,
    SharedModule,
    RdsDropdownlistModule,
    RdsSelectListModule,
    FormsModule,
    RdsFabMenuModule,
    RdsIconModule,
    NgxTranslateModule.forRoot(),
    RdsCompNewLanguageModule
  ],
  // providers: [[HttpClient,

  //   { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestResponseInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
