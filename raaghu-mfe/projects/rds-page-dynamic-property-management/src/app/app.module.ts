import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsNavTabModule } from '@libs/rds-elements';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsCompDynamicPropertiesModule } from 'projects/rds-components/src/app/rds-comp-dynamic-properties/rds-comp-dynamic-properties.module';
import { RdsCompDynamicEntityPropertiesModule } from 'projects/rds-components/src/app/rds-comp-dynamic-enity-properties/rds-comp-dynamic-entity-properties.module';

// export const featureReducersMap = {
//   properties: DynamicPropertyReducer,
//   InputTypeNames: GetInputnameReducer,
//   EditDynamicPropertSateI: getDynamicPropertyByEditReducer,
//   DynanmicPermission: DynamicPermissionReducer,
//   dynamicEntity: DynamicEntityReducer,
//   Entities: GetAllDynamicPropertyReducer
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsCompAlertModule,
    RdsCompDynamicPropertiesModule,
    RdsCompDynamicEntityPropertiesModule,
    RdsButtonModule,
    RdsNavTabModule,
    NgxTranslateModule.forRoot(),
    // StoreModule.forFeature('property', featureReducersMap),
    // EffectsModule.forRoot([DynamicPropertyEffects, DynamicEntityEffects,
    // ]),
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
