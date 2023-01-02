import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { UserEffects } from 'projects/libs/state-management/src/lib/state/user/user.effects';
import { UserReducer } from 'projects/libs/state-management/src/lib/state/user/user.reducer';
import { RdsCompUserPermissionNewModule } from 'projects/rds-components/src/app/rds-comp-user-permissions-new/rds-comp-user-permission-new.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const UsersReducersMap = {
  users: UserReducer,
  // UserEditI: GetUserforEdit,
  // UserPermissionStateI: GetUserPermissions,
  // UserPermissionFilterI: UserPermissionFilterReducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RdsCompUserPermissionNewModule,
    NgxTranslateModule.forRoot()
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
