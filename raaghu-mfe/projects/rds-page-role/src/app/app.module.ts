import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsAlertModule, RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompNewRoleModule } from 'projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-permission-tree.module';
// import { RdsCompRoleListModule } from 'projects/rds-components/src/app/rds-comp-role-list/rds-comp-role-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    NgxTranslateModule.forRoot(),
    RdsFabMenuModule,
    RdsCompAlertModule,
    RdsAlertModule,
    RdsCompDataTableModule,
    RdsCompNewRoleModule,
    RdsPermissionTreeModule,
    RdsBannerModule
  ],

  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
