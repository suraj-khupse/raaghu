import { NgModule } from '@angular/core';
import { RdsBannerModule, RdsButtonModule, RdsIconModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsWebhooksSubscriptionShimmerComponent } from './rds-webhooks-subscription-shimmer/rds-webhooks-subscription-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RdsWebhooksSubscriptionShimmerComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsFabMenuModule,
    RdsTextareaModule,
    RdsOffcanvasModule,
    RdsIconModule,
    SharedModule,
    RdsBannerModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
