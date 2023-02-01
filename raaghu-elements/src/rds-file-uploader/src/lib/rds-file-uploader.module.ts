import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsFileUploaderComponent } from './rds-file-uploader.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsFileUploaderComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsFileUploaderComponent
  ]
})
export class RdsFileUploaderModule { }
