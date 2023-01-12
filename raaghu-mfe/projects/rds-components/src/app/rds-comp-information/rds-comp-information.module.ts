import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompInformationComponent } from './rds-comp-information.component';
import { RdsCompInformationShimmerComponent } from './rds-comp-information-shimmer/rds-comp-information-shimmer.component';
import { RdsDropdownlistModule, RdsInputModule, RdsLabelModule } from "@libs/rds-elements";
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';


@NgModule({
  declarations: [
    RdsCompInformationComponent,
    RdsCompInformationShimmerComponent
  ],
  exports: [
    RdsCompInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    RdsInputModule,
    RdsLabelModule,
    RdsDropdownlistModule
  ]
})
export class RdsCompInformationModule { }
