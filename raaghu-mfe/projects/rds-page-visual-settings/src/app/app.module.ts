import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsDropdownlistModule, RdsNavTabModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { visualsettingEffects, VisualsettingsReducer } from '@libs/state-management';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
export const VisualsettingsReducersMap = {
  visualsettings: VisualsettingsReducer,
 
  
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsCardModule,
    RdsNavTabModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('visualsettings', VisualsettingsReducersMap
    ),
    EffectsModule.forRoot([visualsettingEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
