import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompOrganizationTreeModule } from 'projects/rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    RdsIconModule,
    RdsCompDataTableModule,
    RdsCompOrganizationTreeModule

  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
