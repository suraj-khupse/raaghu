import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsCardModule, RdsIconModule, RdsNavTabModule } from '@libs/rds-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsLabelModule } from 'projects/libs/rds-elements/src/rds-label/src/public-api';
import { RdsCompPlanInformationModule } from 'projects/rds-components/src/app/rds-comp-plan-information/rds-comp-plan-information.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompSubscriptionModule } from 'projects/rds-components/src/app/rds-comp-subscription/rds-comp-subscription.module';
import { CommonModule } from '@angular/common';
// export const SubscriptionReducersMap = {
//   Subscription: SubscriptionReducer,
//   SubscriptionInformation:SubscriptionInformationReducer
//  };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsNavTabModule,
    RdsCardModule,
    RdsButtonModule,
    RdsIconModule,
    RdsLabelModule,
    NgxTranslateModule.forRoot(),
    // StoreModule.forFeature('Subscription', SubscriptionReducersMap
    // ),
    // EffectsModule.forRoot([SubscriptionEffects]),
    RdsCompPlanInformationModule,
    RdsCompDataTableModule,
    RdsCompSubscriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
