import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule } from '@libs/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { EditionEffects } from 'projects/libs/state-management/src/lib/state/edition/edition.effects';
import { EditionReducer } from 'projects/libs/state-management/src/lib/state/edition/edition.reducer';
import { RdsCompFeaturesListNewModule } from 'projects/rds-components/src/app/rds-comp-features-list-new/rds-comp-features-list-new.module';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const featureReducersMap = {
  editions: EditionReducer,
  //tenantCount: TenantCountReducer
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('editions', featureReducersMap
    ),
    EffectsModule.forRoot([EditionEffects]),
    RdsCompFeaturesListNewModule
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
