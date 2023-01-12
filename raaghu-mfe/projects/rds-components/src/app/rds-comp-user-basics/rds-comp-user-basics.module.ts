import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompUserBasicsComponent } from './rds-comp-user-basics.component';
import { RdsCompUserBasicsShimmerComponent } from './rds-comp-user-basics-shimmer/rds-comp-user-basics-shimmer.component';
import { RdsInputModule, RdsCheckboxModule, RdsButtonModule } from "@libs/rds-elements";
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

@NgModule({
  declarations: [
    RdsCompUserBasicsComponent,
    RdsCompUserBasicsShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxShimmerLoadingModule
  ],
  exports: [
    RdsCompUserBasicsComponent
  ]
})
export class RdsCompUserBasicsModule { }
