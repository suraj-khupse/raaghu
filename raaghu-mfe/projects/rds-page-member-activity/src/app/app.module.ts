import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsDropdownlistModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';

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
    RdsSearchInputModule,
    RdsDropdownlistModule,
    NgxTranslateModule,
    RdsCompDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
