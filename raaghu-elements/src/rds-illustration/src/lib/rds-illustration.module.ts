import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsIllustrationComponent } from './rds-illustration.component';

@NgModule({
  declarations: [
    RdsIllustrationComponent
  ],
  imports: [
    RdsIconModule
  ],
  exports: [
    RdsIllustrationComponent
  ]
})
export class RdsIllustrationModule { }
