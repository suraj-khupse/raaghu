import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsCardModule, RdsNavTabModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionEffects, SubscriptionInformationReducer, SubscriptionReducer } from '@libs/state-management';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RdsLabelModule } from 'projects/libs/rds-elements/src/rds-label/src/public-api';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
export const SubscriptionReducersMap = {
  Subscription: SubscriptionReducer,
  SubscriptionInformation:SubscriptionInformationReducer
 };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsNavTabModule,
    RdsCardModule,
    RdsButtonModule,
    RdsIconModule,
    RdsLabelModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('Subscription', SubscriptionReducersMap
    ),
    EffectsModule.forRoot([SubscriptionEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
