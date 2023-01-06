import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree.component';
import { RdsCompOrganizationTreeShimmerComponent } from './rds-comp-organization-tree-shimmer/rds-comp-organization-tree-shimmer.component';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompAlertPopupModule } from '../rds-comp-data-table/rds-comp-alert-popup/rds-comp-alert-popup.module';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';
import { NestGroupDirective } from '../rds-comp-hierarchy/node-label.directive';



@NgModule({
  declarations: [
    RdsOrganizationTreeComponent,
    RdsCompOrganizationTreeShimmerComponent,
    NestGroupDirective

  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule,
    RdsInputModule,
    RdsPaginationModule,
    RdsLabelModule,
    RdsButtonModule,
    NgxShimmerLoadingModule,  
    RdsCompAlertPopupModule ,
    NgxTranslateModule,
    FormsModule,
    RdsDropdownlistModule
  ],
  exports: [
    RdsOrganizationTreeComponent
  ],
})
export class RdsCompOrganizationTreeModule { }
