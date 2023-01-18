import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTeamsComponent } from './rds-comp-teams.component';
import {RdsLabelModule, RdsTeamMemberModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'



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
