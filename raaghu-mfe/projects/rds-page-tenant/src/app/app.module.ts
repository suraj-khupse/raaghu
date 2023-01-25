import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsAlertModule, RdsButtonModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompTenantInformationModule } from 'projects/rds-components/src/app/rds-comp-tenant-information/rds-comp-tenant-information.module';
import { RdsCompTenantSettingsModule } from 'projects/rds-components/src/app/rds-comp-tenant-settings/rds-comp-tenant-settings.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-permission-tree.module';
import { CommonModule } from '@angular/common';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';


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
        AppRoutingModule,
        SharedModule,
        CommonModule,
        RdsButtonModule,
        RdsAlertModule,
        RdsCompDataTableModule,
        NgxTranslateModule.forRoot(),
        RdsFabMenuModule,
        RdsOffcanvasModule,
        RdsNavTabModule,
        RdsCompTenantInformationModule,
        RdsCompTenantSettingsModule,
        RdsPermissionTreeModule,
        RdsCompAlertModule
    ]
})
export class AppModule { }
