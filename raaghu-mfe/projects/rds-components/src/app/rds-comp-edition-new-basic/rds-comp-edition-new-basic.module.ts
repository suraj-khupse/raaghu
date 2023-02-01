import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEditionNewBasicComponent } from './rds-comp-edition-new-basic.component';
import { FormsModule } from '@angular/forms';
import { RdsDropdownlistModule, RdsInputModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompEditionNewBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsSelectListModule,
    RdsDropdownlistModule,
    RdsLabelModule,
    NgxTranslateModule.forRoot(),
  ],
  exports: [
    RdsCompEditionNewBasicComponent
  ]
})
export class RdsCompEditionNewBasicModule { }
