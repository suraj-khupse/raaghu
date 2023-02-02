import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@libs/shared';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsDropdownlistModule, RdsDropdownModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { CommonModule } from '@angular/common';

import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompNewClaimTypeModule } from 'projects/rds-components/src/app/rds-comp-new-claim-type/rds-comp-new-claim-type.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsInputModule,
    RdsOffcanvasModule,
    RdsCompNewClaimTypeModule,
    RdsCompDataTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
