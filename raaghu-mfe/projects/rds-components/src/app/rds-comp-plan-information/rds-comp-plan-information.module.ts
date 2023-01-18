import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPlanInformationComponent } from './rds-comp-plan-information.component';
import { RdsButtonModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule } from '@libs/shared';




@NgModule({
  declarations: [RdsCompPlanInformationComponent],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule,
    RdsIconModule,
    RdsButtonModule,
    NgxTranslateModule
  ],
  exports:[RdsCompPlanInformationComponent]
})
export class RdsCompPlanInformationModule { }
