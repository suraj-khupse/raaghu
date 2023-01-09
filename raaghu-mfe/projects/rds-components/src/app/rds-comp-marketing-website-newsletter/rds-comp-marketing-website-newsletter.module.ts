import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompMarketingWebsiteNewsletterComponent } from './rds-comp-marketing-website-newsletter.component';
import { RdsButtonModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompMarketingWebsiteNewsletterComponent
  ],
  exports: [
    RdsCompMarketingWebsiteNewsletterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsLabelModule
  ]
})
export class RdsCompMarketingWebsiteNewsletterModule { }
