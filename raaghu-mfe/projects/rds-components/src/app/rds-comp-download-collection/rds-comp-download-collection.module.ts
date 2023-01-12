import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompDownloadCollectionComponent } from './rds-comp-download-collection.component';
import { RdsIconModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompDownloadCollectionComponent],
  exports:[RdsCompDownloadCollectionComponent],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsPaginationModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompDownloadCollectionModule { }
