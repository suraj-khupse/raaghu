import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompOrganizationTreeComponent } from './rds-comp-organization-tree.component';
import { RdsButtonModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';
import { NestGroupDirective } from '../rds-comp-hierarchy/node-label.directive';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompOrganizationTreeShimmerComponent } from './rds-comp-organization-tree-shimmer/rds-comp-organization-tree-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';


@NgModule({
  declarations: [
    RdsCompOrganizationTreeComponent,
    RdsCompOrganizationTreeShimmerComponent,
    NestGroupDirective
  ],
  imports: [
    CommonModule,
    NgxShimmerLoadingModule,
    RdsIconModule,
    RdsButtonModule,
    RdsCompAlertPopupModule,
    NgxTranslateModule.forRoot()
  ],
  exports: [
    RdsCompOrganizationTreeComponent
  ]
})
export class RdsCompOrganizationTreeModule { }
