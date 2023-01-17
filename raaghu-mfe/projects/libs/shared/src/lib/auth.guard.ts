import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  CanActivateChild,
  CanLoad,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
//import { GetCurrentLoginInformationsOutput, RefreshTokenResult, SessionServiceProxy, TokenAuthServiceProxy,
import { UserAuthService } from '@libs/shared';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private _router: Router,
    private _userAuthService: UserAuthService
  ) {}
  permissions: any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const storedPermission = localStorage.getItem('storedPermissions');
    const parsedPermission = JSON.parse(storedPermission);
    if (parsedPermission) {
      this.permissions = parsedPermission;
    }

    if (this._userAuthService.userAuthenticated) {
      if (!route.data || !route.data['permission']) {
        return of(true);
      }
      if (this.permissions[route.data['permission']]) {
        return of(true);
      }
      return of(true);
    }
    else {
      return of(false);
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }
}
