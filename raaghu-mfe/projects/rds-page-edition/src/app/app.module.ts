import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule } from '@libs/shared';
import { EditionEffects, EditionInfoReducer, EditionPageComboboxReducer, EditionReducer, TenantCountReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const featureReducersMap = {
  editions: EditionReducer,
  editionInfo: EditionInfoReducer,
  editionComboboxItem: EditionPageComboboxReducer,
  tenantCount: TenantCountReducer
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
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
