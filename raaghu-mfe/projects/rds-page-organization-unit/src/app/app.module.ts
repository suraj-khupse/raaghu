import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompDataTableModule } from "../../../rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module";
import { RdsCompAlertModule } from "../../../rds-components/src/app/rds-comp-alert/rds-comp-alert.module";
import { RdsCompOrganizationTreeModule } from 'projects/rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [ArrayToTreeConverterService],
    bootstrap: [AppComponent],
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
        RdsCompAlertModule,
        RdsCompOrganizationTreeModule
    ]
})
export class AppModule { }
