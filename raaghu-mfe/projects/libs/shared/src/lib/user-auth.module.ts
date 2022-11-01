import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LocalStorageService } from './local-storage.service';
import { UserAuthService } from './user-auth.service';


const routes: Routes = [];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [UserAuthService, LocalStorageService]
})
export class UserAuthModule { }

