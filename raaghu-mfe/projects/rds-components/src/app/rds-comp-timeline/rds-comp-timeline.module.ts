import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTimelineComponent } from './rds-comp-timeline.component';
import { RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'




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
