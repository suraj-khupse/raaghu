import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsLikeDislikeComponent } from './rds-like-dislike.component';

@NgModule({
  declarations: [
    RdsLikeDislikeComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsLikeDislikeComponent
  ]
})
export class RdsLikeDislikeModule { }
