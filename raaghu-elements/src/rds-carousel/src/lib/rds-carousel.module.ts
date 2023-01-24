import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsCarouselComponent } from './rds-carousel.component';

@NgModule({
  declarations: [RdsCarouselComponent],
  imports: [FormsModule, CommonModule,RdsIconModule],
  exports: [RdsCarouselComponent],
})
export class RdsCarouselModule {}
