import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsDropdownlistModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompMemberActivityModule } from 'projects/rds-components/src/app/rds-comp-member-activity/rds-comp-member-activity.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsSearchInputModule,
    RdsDropdownlistModule,
    NgxTranslateModule,
    RdsCompMemberActivityModule,
    RdsCompDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
