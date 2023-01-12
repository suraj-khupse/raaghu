import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompNewLanguageComponent } from './rds-comp-new-language.component';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompNewLanguageShimmerComponent } from './rds-comp-new-lang-shimmer/rds-comp-new-lang-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsCompNewLanguageComponent,
    RdsCompNewLanguageShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsLabelModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxTranslateModule,
    NgxShimmerLoadingModule,
    
  ],
  exports: [
    RdsCompNewLanguageComponent
  ]
})
export class RdsCompNewLanguageModule { }
