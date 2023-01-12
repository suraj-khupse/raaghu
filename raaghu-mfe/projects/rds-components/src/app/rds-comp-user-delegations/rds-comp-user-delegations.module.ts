import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsUserDelegationsComponent } from './rds-comp-user-delegations.component';
import { RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RdsUserDelegationsComponent],
  exports:[RdsUserDelegationsComponent],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsDropdownlistModule,
    RdsDatepickerModule,
    RdsCompDataTableModule,
    RdsLabelModule,
    FormsModule
  ]
})
export class RdsCompUserDelegationsModule { }
