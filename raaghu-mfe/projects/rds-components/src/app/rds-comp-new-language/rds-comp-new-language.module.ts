import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompNewLanguageComponent } from './rds-comp-new-language.component';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsLabelModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';
import { RdsCompNewLangShimmerComponent } from './rds-comp-new-lang-shimmer/rds-comp-new-lang-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [
    RdsCompNewLanguageComponent,
    RdsCompNewLangShimmerComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsDropdownlistModule,
    FormsModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule
  ],
  exports: [
    RdsCompNewLanguageComponent
  ]
})
export class RdsCompNewLanguageModule { }
