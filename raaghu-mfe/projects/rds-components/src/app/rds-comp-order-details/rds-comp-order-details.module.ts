import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompOrderDetailsComponent } from './rds-comp-order-details.component';
import { RdsAddressDetailModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsProgressbarModule, RdsTextEditorModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompOrderDetailsComponent
  ],
  exports: [
    RdsCompOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsIconModule,
    RdsInputModule,
    RdsAddressDetailModule,
    RdsTextEditorModule,
    RdsProgressbarModule
  ]
})
export class RdsCompOrderDetailsModule { }
