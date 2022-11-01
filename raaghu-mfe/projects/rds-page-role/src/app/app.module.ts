import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
// import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
// import { GetRoleforEdit, PermissionReducer, RoleEffects, RoleReducer } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RoleEffects } from 'projects/libs/state-management/src/lib/state/role/role.effects';
import { RoleReducer } from 'projects/libs/state-management/src/lib/state/role/role.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// export const RolsReducersMap = {
//   // PermissionI: PermissionReducer,
//   // EditRoleSateI: GetRoleforEdit,
//   roles: RoleReducer,
// };
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    NgxTranslateModule.forRoot(),
  ],

  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
