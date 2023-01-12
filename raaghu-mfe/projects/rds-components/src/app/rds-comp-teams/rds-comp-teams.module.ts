import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTeamsComponent } from './rds-comp-teams.component';
import { RdsIconModule, RdsLabelModule, RdsTeamMemberModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompTeamsComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsIconModule,
    RdsTeamMemberModule,
  ],
  exports: [
    RdsCompTeamsComponent
  ]
})
export class RdsCompTeamsModule { }
