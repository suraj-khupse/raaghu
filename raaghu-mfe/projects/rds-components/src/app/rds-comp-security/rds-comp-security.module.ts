import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompSecurityComponent } from './rds-comp-security.component';
import { RdsCompSecurityShimmerComponent } from './rds-comp-security-shimmer/rds-comp-security-shimmer.component';
import { FormsModule } from '@angular/forms';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCheckboxModule, RdsCounterModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [RdsCompSecurityComponent,RdsCompSecurityShimmerComponent],
  exports: [RdsCompSecurityComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsLabelModule,
    RdsCheckboxModule,
    RdsCounterModule,
    RdsInputModule
  ]
})
export class RdsCompSecurityModule { }
