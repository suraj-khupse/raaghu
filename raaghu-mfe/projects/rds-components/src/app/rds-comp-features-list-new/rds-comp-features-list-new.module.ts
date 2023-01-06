import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompFeaturesListNewComponent } from './rds-comp-features-list-new.component';
import { RdsButtonModule, RdsCardModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompEditionNewBasicModule } from '../rds-comp-edition-new-basic/rds-comp-edition-new-basic.module';
import { RdsCompEditionNewFeaturesModule } from '../rds-comp-edition-new-features/rds-comp-edition-new-features.module';



@NgModule({
  declarations: [
    RdsCompFeaturesListNewComponent
  ],
  imports: [
    CommonModule,
    RdsCardModule,
    RdsLabelModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCompEditionNewBasicModule,
    RdsCompEditionNewFeaturesModule
  ],
  exports: [
    RdsCompFeaturesListNewComponent
  ]
})
export class RdsCompFeaturesListNewModule { }
