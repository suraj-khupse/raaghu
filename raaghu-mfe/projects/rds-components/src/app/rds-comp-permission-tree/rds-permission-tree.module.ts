import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPermissionTreeComponent } from './rds-comp-permission-tree.component';
import { RdsCheckboxModule, RdsCounterModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'


@NgModule({
  declarations: [
    RdsCompPermissionTreeComponent,
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule,
    RdsCounterModule,
  ],
  exports: [
    RdsCompPermissionTreeComponent
  ]
})
export class RdsPermissionTreeModule { }
