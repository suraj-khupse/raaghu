import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsBadgeModule, RdsButtonModule, RdsIconModule, RdsModalModule, RdsNavTabModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { MaintenanceEffects, MaintenanceReducer, WebsitelogReducer } from '@libs/state-management';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';

import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CommonModule } from '@angular/common';
export const MaintenanceReducersMap = {
  maintenances: MaintenanceReducer,
  Websitelogs: WebsitelogReducer,

};
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
    StoreModule.forFeature('maintenances', MaintenanceReducersMap
    ),
    EffectsModule.forRoot([MaintenanceEffects]),
    NgxTranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
