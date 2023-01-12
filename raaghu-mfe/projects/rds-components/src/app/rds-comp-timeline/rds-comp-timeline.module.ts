import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTimelineComponent } from './rds-comp-timeline.component';
import { RdsIconModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompTimelineComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsIconModule,
  ],
  exports: [
    RdsCompTimelineComponent
  ]
})
export class RdsCompTimelineModule { }
