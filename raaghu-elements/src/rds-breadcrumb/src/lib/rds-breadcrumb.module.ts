import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBreadcrumbComponent } from './rds-breadcrumb.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
@NgModule({
  declarations: [
    RdsBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsBreadcrumbComponent
  ]
})
export class RdsBreadcrumbModule { }
