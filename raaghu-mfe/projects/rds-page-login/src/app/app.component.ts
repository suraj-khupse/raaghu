import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AlertTypes, AppSessionService, ComponentLoaderOptions, MfeBaseComponent, UserAuthService } from '@libs/shared';
import { AuthenticateModel, AuthenticateResultModel, TokenAuthServiceProxy } from '@libs/shared';
import { Store } from '@ngrx/store';
import { XmlHttpRequestHelper } from 'projects/libs/shared/src/lib/XmlHttpRequestHelper';
import { getCurrentLoginInformation, GetProfilePicture, GetSubscriptionExpiringData, ValidateTenantName } from 'projects/libs/state-management/src/lib/state/login/login.actions';
import { selectTenant } from 'projects/libs/state-management/src/lib/state/login/login.selector';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  currentAlerts: any = [];
  // public rdsAlertMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsCompAlert',
  //   input: {
  //     currentAlerts: this.currentAlerts,
  //     alertPosition: 'top'
  //   },
  //   output: {
  //     onAlertHide: (event: any) => {
  //       this.currentAlerts = event;
  //     }
  //   }
  // }
  authenticateModal: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;
  rememberMe: boolean = false;
  loginTokenExpiryDate = 0;
  acessTokenExpiryDate: any;
  refreshTokenExpiryDate: any;
  loadingshimmer: boolean = false;
  tenancyName: string = '';
  probableTenancyName ='';
  buttonSpinnerForChangeTenant: boolean;
  buttonSpinner: boolean;
  constructor(
    private injector: Injector,
    private _userAuthService: UserAuthService,
    private _router: Router,
    private _tokenAuthService: TokenAuthServiceProxy,
    private store: Store,
    private alertService: AlertService,
    private sessionService: AppSessionService,
    private activatedRoute: ActivatedRoute,
  ) {
    super(injector);
    this.authenticateModal = new AuthenticateModel();
    this.authenticateResult = null;
    this.sessionService.init();
  }

  ngOnInit(): void {
    let tenantId = this.activatedRoute.snapshot.queryParams.tenantId;
    let tenantName = this.activatedRoute.snapshot.queryParams.tenancyName;
    let impersonationToken = this.activatedRoute.snapshot.queryParams.impersonationToken;

    if (tenantId && impersonationToken) {
      localStorage.setItem('tenantInfo', JSON.stringify({
        id: tenantId,
        name: tenantName
      }));
      this.impersonatedAuthenticate(impersonationToken, Number.parseInt(tenantId), () => { });
    }


    this.subscribeToAlerts();
    const tenantInfo = JSON.parse(localStorage.getItem('tenantInfo'));
    this.tenancyName = tenantInfo && tenantInfo.name ? tenantInfo.name : 'Not Selected';

    if (this.sessionService.user) {
      this._router.navigateByUrl('pages/dashboard');
    }
    this.store.select(selectTenant).subscribe(res => {
      if (res) {
        if (res.state === 1 && res.tenantId !== null) {
          this.tenancyName = this.probableTenancyName;
          this.buttonSpinnerForChangeTenant = false;
          if (this.tenancyName && this.tenancyName !== null && this.tenancyName !== 'Not Selected') {
            localStorage.setItem('tenantInfo', JSON.stringify({
              id: res.tenantId,
              name: this.tenancyName
            }));
          }

          var myModalEl = document.getElementById('ChangeTenant');
          var modal = bootstrap.Modal.getInstance(myModalEl)
          modal.hide();
          this.alertService.showAlert('Success', 'Switched to tenancy "' + this.tenancyName + '" successfully', AlertTypes.Success)
        } else if (res.state === 0 || res.state > 1) {
          this.alertService.showAlert('Failed', 'Tenancy "' + this.tenancyName + '" is not available', AlertTypes.Error)
          localStorage.removeItem('tenantInfo');
          this.tenancyName = 'Not Selected';
          this.buttonSpinnerForChangeTenant = false;
          // mfeConfig.input.buttonSpinner = false;
        }

      }

    })
  }

  insertTenant(data: any) {
    if (data && data !== null) {
      const tenantData: any = {
        tenancyName: data,
      }
      this.probableTenancyName = data;
      this.store.dispatch(ValidateTenantName(tenantData));
      // const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      this.currentAlerts=[]
      // rdsAlertMfeConfig.input.currentAlerts = [];
      // this.rdsAlertMfeConfig = rdsAlertMfeConfig
    } else {
      localStorage.removeItem('tenantInfo');
      this.tenancyName = 'Not Selected';
      this.buttonSpinnerForChangeTenant = false;
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
        sticky : false
      };
      this.currentAlerts.push(currentAlert);
      // const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      // rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      // this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
    // this.alertService.showAlert('title','Invalid user name or password','danger')
  }

  onSwitchTenant(event):void {
    this.insertTenant(event);
  }
  onLogin(event: any):void {
    this.authenticateModal.userNameOrEmailAddress = event.userEmail;
    this.authenticateModal.password = event.userPassword;
    this.authenticateModal.rememberClient = event.rememberme;
    this.authenticate();
  }
  onShimmerLoad(event: any):void {
    this.loadingshimmer = false;
  }

  authenticate(redirectUrl?: string): void {
    this.buttonSpinner = true;
    this._tokenAuthService.authenticate(this.authenticateModal).subscribe({
      next: (result: AuthenticateResultModel) => {
        this.processAuthenticateResult(result, redirectUrl);
        localStorage.setItem('userNameInfo', JSON.stringify({
          username: this.authenticateModal.userNameOrEmailAddress
        }));
      },
      error: (err: any) => {
        this.buttonSpinner = false;
        this.alertService.showAlert('title', 'Invalid user name or password', 'error')
      },
    });
  }

  private processAuthenticateResult(authenticateResult: any, redirectUrl?: string) {
    this.authenticateResult = authenticateResult;
    this.store.dispatch(getCurrentLoginInformation());

    let tokenExpireDate = this.authenticateResult?.expireInSeconds? new Date().getTime() + 1000 * this.authenticateResult?.expireInSeconds : undefined;
    let refreshTokenExpireDate = this.authenticateResult?.refreshTokenExpireInSeconds ? new Date().getTime() + 1000 * this.authenticateResult?.refreshTokenExpireInSeconds : undefined;

    if (authenticateResult?.accessToken != undefined) {
      // this._router.navigateByUrl('/pages/dashboard');
      localStorage.setItem('LoginCredential', JSON.stringify({
        token: this.authenticateResult.accessToken,
        refreshToken: this.authenticateResult.refreshToken,
        expireDate: tokenExpireDate,
        refreshTokenExpireDate: refreshTokenExpireDate,
        date: Date.now() + tokenExpireDate
      }));
      this.buttonSpinner = true;
      this._userAuthService.authenticateUser();
      this.store.dispatch(GetProfilePicture());
      this.store.dispatch(GetSubscriptionExpiringData());
      this._userAuthService.getUserConfiguration('login');
    } else {
      // Unexpected result!
      this._router.navigateByUrl('/pages/login');
    }
  }

  private getRequetHeadersWithDefaultValues(tenantid) {

    let requestHeaders = {
      'Abp.TenantId': tenantid.toString(),
    };

    return requestHeaders;
  }

  impersonatedAuthenticate(impersonationToken: string, tenantId: number, callback: () => void): void {
    XmlHttpRequestHelper.ajax(
      'POST',
      'https://anzdemoapi.raaghu.io' +
      '/api/TokenAuth/ImpersonatedAuthenticate?impersonationToken=' +
      impersonationToken, this.getRequetHeadersWithDefaultValues(tenantId),
      null,
      (response) => {
        let result = response.result;
        document.cookie = document.cookie + ';Abp.AuthToken=' + result.accessToken;
        this.processAuthenticateResult(result)
      }
      , this);
  }

  onAlertHide (event: any) {
    this.currentAlerts = event;
  }
}

