import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompReviewCategoryComponent } from './rds-comp-review-category.component';
import { RdsReviewCategoryModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompReviewCategoryComponent
  ],
  imports: [
    CommonModule,
    RdsReviewCategoryModule
  ],
  exports:[
    RdsCompReviewCategoryComponent
  ]
})
export class RdsCompReviewCategoryModule { }
