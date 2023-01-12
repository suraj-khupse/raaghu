import { NgModule } from '@angular/core';
import { RdsButtonModule, RdsNavTabModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsCompEmailModule } from 'projects/rds-components/src/app/rds-comp-email/rds-comp-email.module';
import { RdsCompInvoiceModule } from 'projects/rds-components/src/app/rds-comp-invoice/rds-comp-invoice.module';
import { RdsCompOtherSettingsModule } from 'projects/rds-components/src/app/rds-comp-other-settings/rds-comp-other-settings.module';
import { RdsCompSecurityModule } from 'projects/rds-components/src/app/rds-comp-security/rds-comp-security.module';
import { RdsCompTenantManagementModule } from 'projects/rds-components/src/app/rds-comp-tenant-management/rds-comp-tenant-management.module';
import { RdsCompUserManagementModule } from 'projects/rds-components/src/app/rds-comp-user-management/rds-comp-user-management.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsNavTabModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsCompTenantManagementModule,
    RdsCompUserManagementModule,
    RdsCompSecurityModule,
    RdsCompEmailModule,
    RdsCompInvoiceModule,
    RdsCompOtherSettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
