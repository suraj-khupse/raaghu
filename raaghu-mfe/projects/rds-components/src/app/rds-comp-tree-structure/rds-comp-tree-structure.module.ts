import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTreeStructureComponent } from './rds-comp-tree-structure.component';
import { RdsCheckboxModule, RdsCounterModule, RdsIconModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    RdsCompTreeStructureComponent,
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule,
    RdsCounterModule,
  ],
  exports: [
    RdsCompTreeStructureComponent
  ]
})
export class RdsCompTreeStructureModule { }
