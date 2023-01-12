import { NgModule } from '@angular/core';
import { RdsBadgeModule, RdsButtonModule, RdsIconModule, RdsModalModule, RdsNavTabModule } from '@libs/rds-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';

import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CommonModule } from '@angular/common';
import { RdsCompCacheModule } from 'projects/rds-components/src/app/rds-comp-cache/rds-comp-cache.module';
import { RdsCompWebsiteLogModule } from 'projects/rds-components/src/app/rds-comp-website-log/rds-comp-website-log.module';
import { RdsCompAlertPopupModule } from 'projects/rds-components/src/app/rds-comp-alert-popup/rds-comp-alert-popup.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RdsNavTabModule,RdsModalModule,RdsButtonModule,
    RdsBadgeModule,SharedModule,
    RdsIconModule,
    RdsFabMenuModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsCompCacheModule,
    RdsCompWebsiteLogModule,
    RdsCompAlertPopupModule,
    RdsCompAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
