import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanActivateChild, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetCurrentLoginInformationsOutput, RefreshTokenResult, SessionServiceProxy, TokenAuthServiceProxy, UserAuthService } from '@libs/shared'
import { catchError, map } from 'rxjs/operators';
import { AppSessionService } from './app-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private _router: Router, 
    private _userAuthService: UserAuthService,
    private _sessionService: AppSessionService,
    private _sessionServiceproxy: SessionServiceProxy,
    private _tokenAuthServiceProxy: TokenAuthServiceProxy                                                                  
    ) { 
      
     }
  permissions:any;
  refreshTokenResult: RefreshTokenResult;

  canActivate(   
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
      const storedPermission = localStorage.getItem('storedPermissions');                                                                                                              
      const parsedPermission = JSON.parse(storedPermission);
      if(parsedPermission){
        this.permissions = parsedPermission;
      }
      const credentials = localStorage.getItem('LoginCredential');                                                                                                              
      const parsedCredentials = JSON.parse(credentials);
      if(parsedCredentials){
        let todaysDate = Date.now();
        if(parsedCredentials.date - todaysDate > 0){
          return this.canActivateInternal(route.data, state);
        }
        else{
          this._router.navigateByUrl(this.selectBestRoute());
        }
      }
      else{
        this._router.navigateByUrl(this.selectBestRoute());
      }

  } 

  canActivateInternal(data: any, state: RouterStateSnapshot): Observable<boolean> {
    if(state.url == '/pages/settings'){
      if(this.permissions["Pages.Administration.Tenant.Settings"] || this.permissions["Pages.Administration.Host.Settings"])return of(true);
    }
    else if (!data || !data['permission']) {
      return of(true);
  }

    if (this.permissions[data['permission']]) {
        return of(true);
    }
    this._router.navigateByUrl(this.selectBestRoute());
}
canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return this.canActivate(route, state);
}

canLoad(route: any): Observable<boolean> | Promise<boolean> | boolean {
  return this.canActivateInternal(route.data, null);
}

  selectBestRoute(): string 
  {
    if (!this._sessionService.user) {
        return '/login';                  
    }                                                                                  
    return '/pages/dashboard';
  }
}










