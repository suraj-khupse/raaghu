import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompFaqComponent } from './rds-comp-faq.component';
import { RdsLabelModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompFaqComponent
  ],
  exports: [
    RdsCompFaqComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule
  ]
})
export class RdsCompFaqModule { }
