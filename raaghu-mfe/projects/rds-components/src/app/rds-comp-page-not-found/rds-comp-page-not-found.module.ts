import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPageNotFoundComponent } from './rds-comp-page-not-found.component';
import { RdsIconModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompPageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsIconModule
  ],
  exports: [
    RdsCompPageNotFoundComponent
  ]
})
export class RdsCompPageNotFoundModule { }
