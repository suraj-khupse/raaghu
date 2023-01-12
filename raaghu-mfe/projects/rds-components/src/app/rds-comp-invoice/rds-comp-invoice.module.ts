import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompInvoiceComponent } from './rds-comp-invoice.component';
import { RdsCompInvoiceShimmerComponent } from './rds-comp-invoice-shimmer/rds-comp-invoice-shimmer.component';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';
import { RdsInputModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [RdsCompInvoiceComponent, RdsCompInvoiceShimmerComponent],
  exports:[RdsCompInvoiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsLabelModule,
    RdsInputModule,
    RdsTextareaModule
  ]
})
export class RdsCompInvoiceModule { }
