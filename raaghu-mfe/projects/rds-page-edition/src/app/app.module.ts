import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCounterModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsRadioButtonModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-permission-tree.module';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,    
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    RdsCompAlertModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsCounterModule,
    RdsRadioButtonModule,
    RdsDropdownlistModule,
    RdsPermissionTreeModule,
    RdsCompDataTableModule
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
