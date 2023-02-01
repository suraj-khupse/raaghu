import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTestimonialsComponent } from './rds-comp-testimonials.component';
import { RdsCarouselModule, RdsLabelModule, RdsTestimonialModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'




@NgModule({
  declarations: [
    RdsCompTestimonialsComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsCarouselModule,
    RdsIconModule,
    RdsTestimonialModule
  ],
  exports:[
    RdsCompTestimonialsComponent
  ]
})
export class RdsCompTestimonialsModule { }
