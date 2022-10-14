import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AlertTypes, AppSessionService, ComponentLoaderOptions, MfeBaseComponent, UserAuthService } from '@libs/shared';
import { AuthenticateModel, AuthenticateResultModel, TokenAuthServiceProxy } from '@libs/shared';
import { Store } from '@ngrx/store';
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
  authenticateModal: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;
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
    private _tokenAuthService: TokenAuthServiceProxy,
    private store: Store,
    private http: HttpClient,
    private alertService: AlertService,
    private sessionService: AppSessionService
  ) {
    super(injector);
    this.authenticateModal = new AuthenticateModel();
    this.authenticateResult = null;
    this.sessionService.init();
  }

  ngOnInit(): void {
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
          this.authenticateModal.rememberClient = data.rememberme;
          this.authenticate();
        },
        onShimmerLoad: (event: any) => {
          this.loadingshimmer = false;
        }
      }
    };
    if (this.sessionService.user) {
      this._router.navigateByUrl('pages/dashboard');
    }
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
      this.store.dispatch(ValidateTenantName(tenantData));
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



  authenticate(redirectUrl?: string): void {
    const mfeConfig = this.rdsLoginMfeConfig
    mfeConfig.input.buttonSpinner = true;
    this._tokenAuthService.authenticate(this.authenticateModal).subscribe({
      next: (result: AuthenticateResultModel) => {
        this.processAuthenticateResult(result, redirectUrl);
        localStorage.setItem('userNameInfo', JSON.stringify({

          username: this.authenticateModal.userNameOrEmailAddress

        }));
      },
      error: (err: any) => {
        mfeConfig.input.buttonSpinner = false;
        this.alertService.showAlert('title', 'Invalid user name or password', 'error')
      },
    });
  }

  private processAuthenticateResult(authenticateResult: any, redirectUrl?: string) {
    this.authenticateResult = authenticateResult;
    this.store.dispatch(getCurrentLoginInformation());

    let tokenExpireDate = this.authenticateModal.rememberClient ? new Date().getTime() + 1000 * this.authenticateResult?.expireInSeconds : undefined;
    let refreshTokenExpireDate = this.authenticateModal.rememberClient ? new Date().getTime() + 1000 * this.authenticateResult?.refreshTokenExpireInSeconds : undefined;

    if (authenticateResult?.accessToken != undefined) {
      localStorage.setItem('LoginCredential', JSON.stringify({
        token: this.authenticateResult.accessToken,
        refreshToken: this.authenticateResult.refreshToken,
        expireDate: tokenExpireDate,
        refreshTokenExpireDate: refreshTokenExpireDate,
        date: Date.now() + tokenExpireDate
      }));
      this._userAuthService.authenticateUser();
      this.store.dispatch(GetProfilePicture());
      this.store.dispatch(GetSubscriptionExpiringData());
      this._userAuthService.getUserConfiguration('login');
    } else {
      // Unexpected result!
      this._router.navigateByUrl('/pages/login');
    }
  }

}

