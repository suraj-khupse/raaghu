import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsButtonModule } from '@libs/rds-elements';
import { EditionComboboxReducer, TenantFeatureReducer, TenantInfoReducer, TenantReducer } from 'projects/libs/state-management/src/lib/state/tenant/tenant.reducer';
import { TenantEffects } from 'projects/libs/state-management/src/lib/state/tenant/tenant.effects';
export const featureReducersMap = {
  tenants: TenantReducer,
  tenantInfo: TenantInfoReducer,
  editionComboboxItem: EditionComboboxReducer,
  tenantFeature: TenantFeatureReducer
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('tenants', featureReducersMap),
    EffectsModule.forRoot([TenantEffects]),
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
