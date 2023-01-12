import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompWebsiteLogComponent } from './rds-comp-website-log.component';
import { RdsBadgeModule, RdsIconModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompWebsiteLogComponent
  ],
  imports: [
    CommonModule,
    RdsBadgeModule,
    RdsPaginationModule,
    RdsIconModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompWebsiteLogComponent
  ]
})
export class RdsCompWebsiteLogModule { }
