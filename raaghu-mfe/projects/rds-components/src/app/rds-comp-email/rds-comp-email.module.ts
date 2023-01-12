import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEmailComponent } from './rds-comp-email.component';
import { RdsCompEmailShimmerComponent } from './rds-comp-email-shimmer/rds-comp-email-shimmer.component';
import { RdsButtonModule, RdsInputModule, RdsCheckboxModule } from "@libs/rds-elements";
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';

@NgModule({
  declarations: [RdsCompEmailComponent,RdsCompEmailShimmerComponent],
  exports:[RdsCompEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsButtonModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
  ]
})
export class RdsCompEmailModule { }
