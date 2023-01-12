import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RdsCompSecretsComponent } from './rds-comp-secrets.component';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompSecretsComponent
  ],
  exports: [
    RdsCompSecretsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RdsCompDataTableModule,
    RdsInputModule,
    RdsButtonModule
  ]
})
export class RdsCompSecretsModule { }
