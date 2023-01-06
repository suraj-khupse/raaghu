import { NgModule } from '@angular/core';
import { RdsButtonModule, RdsIconModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { CommonModule } from '@angular/common';
import { RdsCompClientAdvancedModule } from 'projects/rds-components/src/app/rds-comp-client-advanced/rds-comp-client-advanced.module';
import { RdsCompClientBasicsModule } from 'projects/rds-components/src/app/rds-comp-client-basics/rds-comp-client-basics.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.module';
import { RdsCompSecretsModule } from 'projects/rds-components/src/app/rds-comp-secrets/rds-comp-secrets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsButtonModule,
    RdsIconModule,
    RdsCompClientResourcesModule,
    RdsCompClientAdvancedModule,
    RdsCompSecretsModule,
    RdsCompClientBasicsModule,
    RdsCompDataTableModule,
    RdsCompPermissionTreeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
