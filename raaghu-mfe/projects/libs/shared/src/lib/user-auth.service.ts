import { Inject, Injectable, OnInit, Optional } from '@angular/core';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { throwError as _observableThrow, of as _observableOf, Observable, Subject } from 'rxjs';
import { SendPasswordResetCodeInput } from './service-proxies';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { AppSessionService } from './app-session.service';
import { Store } from '@ngrx/store';
import { XmlHttpRequestHelper } from './XmlHttpRequestHelper';
import { API_BASE_URL } from './service-proxies';


@Injectable()
export class UserAuthService implements OnInit {
  model: SendPasswordResetCodeInput = new SendPasswordResetCodeInput();
  loggedOut: boolean = false;
  permissions: Observable<{}>;
  localization: Observable<any>;
  baseUrl: string;
  userAuthenticated: boolean = false;
  language: Observable<any>;
  sources: Observable<any>;
  index$ = new Subject();
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private sessionService: AppSessionService,
    private store: Store,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    console.log("inside user-auth service")
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    this.getUserConfiguration();
    this.sessionService.init();
  }

  ngOnInit(): void {
    if (this.sessionService.user) {
      this.userAuthenticated = true;
    }
  }

  isUserAuthenticated() {
    return _observableOf(this.userAuthenticated);
  }

  authenticateUser() {
    this.userAuthenticated = true;
    this.sessionService.init();
  }

  getPermissions() {
    return _observableOf(this.permissions);
  }



  requestHeaders() {
    const credentials = localStorage.getItem('LoginCredential');
    var tenantInfo = localStorage.getItem('tenantInfo');
    let requestHeaders = {};
    if (credentials || tenantInfo) {
      const parsedCredentials = JSON.parse(credentials);
      const parsedTenantInfo = JSON.parse(tenantInfo);

      if (parsedCredentials && parsedCredentials.token) {
        requestHeaders['Authorization'] = 'Bearer ' + parsedCredentials.token;
      }
      requestHeaders['Abp.TenantId'] = parsedTenantInfo ? parsedTenantInfo.id : null

    }
    return requestHeaders;
  }

  getUserConfiguration(login?: string): any {
    let requestHeaders = this.requestHeaders();
    XmlHttpRequestHelper.ajax(
      'GET',
      this.baseUrl + '/AbpUserConfiguration/GetAll',
      requestHeaders,
      null,
      (response) => {
        let result = response.result;
        this.permissions = result.auth.grantedPermissions;
        localStorage.setItem('storedPermissions', JSON.stringify(this.permissions));
        this.localization = result.localization;
        this.sources = result.localization.sources
        this.language = result.localization.languages
        if (login == 'login') {
          this.router.navigateByUrl('/pages/dashboard');
        }
        if (login == 'logout') {
          localStorage.removeItem('storedPermissions');
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

  unauthenticateUser(reload?:boolean,returnUrl?:string): void {
    this.userAuthenticated = false;
    let customHeaders = this.requestHeaders();
    localStorage.removeItem('LoginCredential');
    localStorage.removeItem('tenantInfo');
    localStorage.removeItem('THEME');
    this.sessionService.init();

    XmlHttpRequestHelper.ajax(
      'GET',
      this.baseUrl + '/api/TokenAuth/LogOut',
      customHeaders,
      null,
      () => {
        this.getUserConfiguration('logout'); 
        if(reload){
          if (returnUrl) {
            location.href = returnUrl;
        } else {
            location.href = '';
        } 
        }      
   
      }
    );
  }

  getLocalization() {
    return _observableOf(this.localization);
  }
  getLanguages() {
    return _observableOf(this.language);

  }

  getSources() {
    return _observableOf(this.sources);
  }

  getVisualSettingIndex(value){
    this.index$.next(value)
  }
}
