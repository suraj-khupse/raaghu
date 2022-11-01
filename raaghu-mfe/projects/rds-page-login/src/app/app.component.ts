import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { AlertService, AlertTypes, ComponentLoaderOptions, MfeBaseComponent, UserAuthService, UserLoginInfo } from '@libs/shared';
//import { AuthenticateModel, AuthenticateResultModel, TokenAuthServiceProxy } from '@libs/shared';
import { Store } from '@ngrx/store';
import { getCurrentLoginInformation, GetProfilePicture, GetSubscriptionExpiringData } from 'projects/libs/state-management/src/lib/state/login/login.actions';
import { selectTenant } from 'projects/libs/state-management/src/lib/state/login/login.selector';
import { Observable } from 'rxjs/internal/Observable';
import { AuthConfig, JwksValidationHandler, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './abp.config';
import { promise } from 'protractor';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }
  rdsLoginMfeConfig: ComponentLoaderOptions;
  authenticateModal: UserLoginInfo;
  //authenticateResult: AuthenticateResultModel;
  rememberMe: boolean = false;
  loginTokenExpiryDate = 0;
  acessTokenExpiryDate: any;
  refreshTokenExpiryDate: any;
  loadingshimmer: boolean = true;
  tenancyName: string = '';
  constructor(
    private injector: Injector,
    private _userAuthService: UserAuthService,
    private _router: Router,
    private store: Store,
    private alertService: AlertService,
    private oauthService: OAuthService
  ) {
    super(injector);
    this.authenticateModal = new UserLoginInfo();
    this.configureSingleSignOn();
    //this.authenticateResult = null;
    //this.sessionService.init();
  }
  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  //   this.oauthService.tryLogin({
  //     onTokenReceived: context => {
  //         console.debug("logged in");
  //         console.debug(context);
  //         this._router.navigateByUrl('/pages/dashboard');
  //     }
  // });
  }
  // refreshLogin(){
  //   this.oauthService.refreshToken().catch(()=>{
  //     document.cookie = 'rememberMe=false; path=/; expires=Fri, 31 Dec 1970 23:59:59 GMT';
  //   });
  // }
  ngOnInit(): void {
    // this.oauthService.initCodeFlow();
    this.subscribeToAlerts();
    const tenantInfo = JSON.parse(localStorage.getItem('tenantInfo'));
    var tenancyName = tenantInfo ? tenantInfo.name : 'Not Selected';

    this.rdsLoginMfeConfig = {
      name: 'RdsLogin',
      input: {
        rememeberMe: true,
        TenancyName: tenancyName,
        buttonSpinner: true
      },
      output: {
        onSwitchTenant: (data: any) => {
          this.insertTenant(data);
        },
        onLogin: (data: any) => {
          this.authenticateModal.userNameOrEmailAddress = data.userEmail;
          this.authenticateModal.password = data.userPassword;
          this.authenticateModal.rememberMe = data.rememberme;
          this.authenticate();
        },
        onShimmerLoad: (event: any) => {
          this.loadingshimmer = false;
        }
      }
    };
    
    // if (this.sessionService.user) {
    //   this._router.navigateByUrl('pages/dashboard');
    // }
    //this.refreshLogin();
    this.store.select(selectTenant).subscribe(res => {
      if (res) {
        const mfeConfig = this.rdsLoginMfeConfig;
        if (res.state === 1 && res.tenantId !== null) {
          mfeConfig.input.TenancyName = this.tenancyName;
          this.rdsLoginMfeConfig = mfeConfig;
          localStorage.setItem('tenantInfo', JSON.stringify({
            id: res.tenantId,
            name: this.tenancyName
          }));
          var myModalEl = document.getElementById('ChangeTenant');
          var modal = bootstrap.Modal.getInstance(myModalEl)
          modal.hide();
          this.alertService.showAlert('Success', 'Switched to tenancy "' + this.tenancyName + '" successfully', AlertTypes.Success)
        } else if (res.state === 0 || res.state > 1) {
          this.alertService.showAlert('Failed', 'Tenancy "' + this.tenancyName + '" is not available', AlertTypes.Error)
          localStorage.removeItem('tenantInfo');
          mfeConfig.input.TenancyName = 'Not Selected';
          // mfeConfig.input.buttonSpinner = false;
          this.rdsLoginMfeConfig = mfeConfig;
        }
      }
    })
  }

  insertTenant(data: any) {
    if (data && data !== null) {
      const tenantData: any = {
        tenancyName: data,
      }
      this.tenancyName = data;
      //this.store.dispatch(ValidateTenantName(tenantData));
    } else {
      const mfeConfig = this.rdsLoginMfeConfig;
      localStorage.removeItem('tenantInfo');
      mfeConfig.input.TenancyName = 'Not Selected';
      this.rdsLoginMfeConfig = mfeConfig;
      var myModalEl = document.getElementById('ChangeTenant');
      var modal = bootstrap.Modal.getInstance(myModalEl)
      modal.hide();
    }
  }

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
    // this.alertService.showAlert('title','Invalid user name or password','danger')
  }



  authenticate(redirectUrl?: string) {
    const mfeConfig = this.rdsLoginMfeConfig
    mfeConfig.input.buttonSpinner = true;
    this.oauthService.fetchTokenUsingPasswordFlow('admin', '1q2w3E*').then(result=>{
      console.log(result);
      console.log("user name and passoword went through oauth and we got some result");
      //document.cookie = 'rememberMe=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT';
      //this._userAuthService.authenticateUser();
      this._userAuthService.getApplicationConfiguration();
      //let token = this.authStorage.getItem('access_token');
    // let url_ = "" + "/api/abp/application-configuration";

    //     let options_ : any = {
    //         observe: "response",
    //         responseType: "blob",
    //         headers: new HttpHeaders({
    //             "Accept": "text/plain",
    //             "Authorization" : 'Bearer ' 
    //         })
    //     };

    //     this.http.request("get", url_ ).subscribe(result=>{
    //       console.log(result);
          
    //     })
      this._router.navigateByUrl('/pages/dashboard');
    });
    

  }

}