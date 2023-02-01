import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPageNotFoundComponent } from './rds-comp-page-not-found.component';
import { RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'


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
