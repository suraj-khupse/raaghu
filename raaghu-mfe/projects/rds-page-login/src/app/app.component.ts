import { Component, Injector, OnInit } from '@angular/core';
import {
  mergeMap as _observableMergeMap,
  catchError as _observableCatch,
} from 'rxjs/operators';
import {
  AlertService,
  AlertTypes,
  ComponentLoaderOptions,
  MfeBaseComponent,
  UserAuthService,
  UserLoginInfo,
} from '@libs/shared';
import { Store } from '@ngrx/store';
import { selectTenant } from 'projects/libs/state-management/src/lib/state/login/login.selector';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './abp.config';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  currentAlerts: any = [];
  authenticateModal: UserLoginInfo;
  //authenticateResult: AuthenticateResultModel;
  rememberMe: boolean = false;
  loginTokenExpiryDate = 0;
  acessTokenExpiryDate: any;
  refreshTokenExpiryDate: any;
  loadingshimmer: boolean = false;
  tenancyName: string = '';
  buttonSpinner: boolean = false;
  userNameData: any;
  userPasswordData: any;
  constructor(
    private injector: Injector,
    private _userAuthService: UserAuthService,
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
  configureSingleSignOn() {
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
    const userLoginInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.userNameData = userLoginInfo.userName;
    this.userPasswordData = userLoginInfo.password;
    this.rememberMe = userLoginInfo.rememberMe;
    // this.oauthService.initCodeFlow();
    this.subscribeToAlerts();
    const tenantInfo = JSON.parse(localStorage.getItem('tenantInfo'));
    var tenancyName = tenantInfo ? tenantInfo.name : 'Not Selected';
    this.tenancyName = tenancyName;

    this.store.select(selectTenant).subscribe((res) => {
      if (res) {
        if (res.state === 1 && res.tenantId !== null) {
          localStorage.setItem(
            'tenantInfo',
            JSON.stringify({
              id: res.tenantId,
              name: this.tenancyName,
            })
          );

          var myModalEl = document.getElementById('ChangeTenant');
          var modal = bootstrap.Modal.getInstance(myModalEl);
          modal.hide();
          this.alertService.showAlert(
            'Success',
            'Switched to tenancy "' + this.tenancyName + '" successfully',
            AlertTypes.Success
          );
        } else if (res.state === 0 || res.state > 1) {
          this.alertService.showAlert(
            'Failed',
            'Tenancy "' + this.tenancyName + '" is not available',
            AlertTypes.Error
          );
          localStorage.removeItem('tenantInfo');
          this.buttonSpinner = false;
        }
      }
    });
  }

  onSwitchTenant(data: any) {
    this.insertTenant(data);
  }
  onLogin(data: any) {
    this.authenticateModal.userNameOrEmailAddress = data.userEmail;
    this.authenticateModal.password = data.userPassword;
    this.authenticateModal.rememberMe = data.rememberMe;
    this.authenticate();
    this.buttonSpinner = true;
  }
  onShimmerLoad(event: any) {
    this.loadingshimmer = false;
  }

  insertTenant(data: any) {
    if (data && data !== null) {
      const tenantData: any = {
        tenancyName: data,
      };
      this.tenancyName = data;
      //this.store.dispatch(ValidateTenantName(tenantData));
      this.currentAlerts = [];
    } else {
      localStorage.removeItem('tenantInfo');
      this.tenancyName = 'Not Selected';
      var myModalEl = document.getElementById('ChangeTenant');
      var modal = bootstrap.Modal.getInstance(myModalEl);
      modal.hide();
    }
  }

  // subscribeToAlerts() {
  //   this.alertService.alertEvents.subscribe((alert) => {
  //     this.currentAlerts = [];
  //     const currentAlert: any = {
  //       type: alert.type,
  //       title: alert.title,
  //       message: alert.message,
  //     };
  //     this.currentAlerts.push(currentAlert);
  //   });
  //   // this.alertService.showAlert('title','Invalid user name or password','danger')
  // }

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
        sticky: false,
      };
      this.currentAlerts.push(currentAlert);
    });
  }
  onAlertHide(event: any) {
    this.currentAlerts = event;
  }
  authenticate(redirectUrl?: string) {
    this.buttonSpinner = true;
    this.oauthService
      .fetchTokenUsingPasswordFlow(
        this.authenticateModal.userNameOrEmailAddress,
        this.authenticateModal.password
      )
      .then((result) => {
        if (result.access_token && this.authenticateModal.rememberMe) {
          localStorage.setItem(
            'userInfo',
            JSON.stringify({
              userName: this.authenticateModal.userNameOrEmailAddress,
              password: this.authenticateModal.password,
              rememberMe: this.authenticateModal.rememberMe,
            })
          );
        }
        // console.log("user name and passoword went through oauth and we got some result");
        //document.cookie = 'rememberMe=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT';
        //this._userAuthService.authenticateUser();
        this._userAuthService.getApplicationConfiguration();
      })
      .catch((error) => {
        this.buttonSpinner = false;
        this.alertService.showAlert(
          'title',
          'Invalid user name or password',
          'error'
        );
      });
  }
}
