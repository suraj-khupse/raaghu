import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsLinkedAccountsComponent } from './rds-comp-linked-accounts.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsLinkedAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule,
    RdsCompDataTableModule,
    NgxTranslateModule
  ],
  exports: [
    RdsLinkedAccountsComponent
  ]
})
export class RdsCompLinkedAccountsModule { }
