import { NgModule } from '@angular/core';
import { RdsBannerModule, RdsButtonModule, RdsInputModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { RdsWebhooksSubscriptionShimmerComponent } from './rds-webhooks-subscription-shimmer/rds-webhooks-subscription-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CommonModule } from '@angular/common';
import { RdsCompWebhookSubscriptionModule } from 'projects/rds-components/src/app/rds-comp-webhook-subscription/rds-comp-webhook-subscription.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';


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
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsIconModule,
    SharedModule,
    RdsBannerModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsCompWebhookSubscriptionModule,
    RdsCompDataTableModule,
    RdsCompAlertModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
