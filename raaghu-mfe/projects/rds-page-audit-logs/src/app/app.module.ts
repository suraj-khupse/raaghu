import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsBadgeModule, RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        TranslateService,
        TranslateStore
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        CommonModule,
        NgxTranslateModule.forRoot(),
        RdsButtonModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsDatepickerModule,
        RdsCheckboxModule,
        RdsInputModule,
        RdsFabMenuModule,
        RdsDropdownlistModule,
        RdsCompDataTableModule,
        RdsOffcanvasModule,
        RdsBadgeModule
    ]
})
export class AppModule { }
