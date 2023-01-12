import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompsUserClaimsComponent } from './rds-comps-user-claims.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompsUserClaimsShimmerComponent } from './rds-comps-user-claims-shimmer/rds-comps-user-claims-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

@NgModule({
  declarations: [
    RdsCompsUserClaimsComponent,
    RdsCompsUserClaimsShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsInputModule,
    RdsButtonModule,
    NgxShimmerLoadingModule
  ],
  exports: [
    RdsCompsUserClaimsComponent
  ]
})
export class RdsCompUserClaimsModule { }
