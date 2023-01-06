import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsCompClaimsTypeRoleModule } from 'projects/rds-components/src/app/rds-comp-claim-type-role/rds-comp-claims-type-role.module';
import { RdsCompNewRoleModule } from 'projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role.module';
import { RdsCompOrganizationTreeModule } from 'projects/rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.module';
import { RdsCompPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    NgxTranslateModule.forRoot(),
    RdsBannerModule,
    CommonModule,
    RdsIconModule,
    FormsModule,
    RdsCompNewRoleModule,
    RdsCompClaimsTypeRoleModule,
    RdsCompPermissionTreeModule,
    RdsCompOrganizationTreeModule
  ],

  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
