import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var bootstrap: any;
@Component({
  selector: 'rds-comp-login',
  templateUrl: './rds-comp-login.component.html',
  styleUrls: ['./rds-comp-login.component.scss'],
})
export class RdsLoginComponent implements OnInit, OnChanges {
  userNameData: any;
  userPasswordData: any;
  rememberMe: boolean;
  TenantNameData: any;
  @Input() tenancyName: string;
  UserName: string = 'Email/Username';
  Password: string = 'Password';
  buttonLabel: string = 'Login';
  buttonLabelUp: string = 'Signup';
  checkboxTitle: string = 'Remember me';
  Modallabel: string = 'Switch to the host';
  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSwitchTenant: EventEmitter<any> = new EventEmitter<any>();
  @Output() onShimmerLoad: EventEmitter<any> = new EventEmitter<any>();
  tenantdisabled: boolean;
  disabledSwitchTenant: boolean = true;

  switchTenant: boolean = false;
  emailPattern: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Input() buttonSpinner: boolean = false;
  @Input() buttonSpinnerForChangeTenant: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public translate: TranslateService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.onShimmerLoad.emit(false);
  }

  ngOnInit(): void {

    this.onShimmerLoad.emit(false);
    this.rememberMe = localStorage.getItem('rememberMe') == 'true' ? true : false;
    if (this.rememberMe) {
      this.userNameData = localStorage.getItem('Username') || '';
      this.userPasswordData = localStorage.getItem('Password') || '';
    }
  }

  //for getting remebrme value
  onChangeRememberme(event: any) {
    // this.rememberMe = event.detail;

    if (event) {
      localStorage.setItem('Username', this.userNameData);
      localStorage.setItem('Password', this.userPasswordData);
      localStorage.setItem('rememberMe', event.toString());
    } else {
      localStorage.removeItem('Username');
      localStorage.removeItem('Password');
      localStorage.removeItem('rememberMe');
    }
  }

  submit(loginForm: NgForm) {
    this.buttonSpinner = true;
    this.onLogin.emit({
      userEmail: this.userNameData,
      userPassword: this.userPasswordData,
      rememberMe: this.rememberMe,
    });
  }

  ChangeTenant(tenantForm: NgForm) {
    this.onSwitchTenant.emit(this.TenantNameData);
    this.buttonSpinnerForChangeTenant = true;
  }

  onModalClose(tenantForm: NgForm): void {
    this.TenantNameData = '';
    this.switchTenant = false;
    tenantForm.reset();
  }

  switchTenanat(event: any) {
    this.switchTenant = event;
    this.Modallabel = this.translate.instant('Switch to the tenant');
    if (!event) {
      this.TenantNameData = '';
      this.Modallabel = this.translate.instant('Switch to the host');
    }
  }
  back() {
    this.buttonSpinner = false;
  }

  openTenantModal(): void {
    var myModalEl = document.getElementById('ChangeTenant');
    var modal = new bootstrap.Modal(myModalEl);
    modal.show();
    const tenancy: any = JSON.parse(localStorage.getItem('tenantInfo'));
    if (tenancy) {
      this.TenantNameData = tenancy.name;
      if (this.TenantNameData) {
        this.switchTenant = true;
      }
    }
  }
}
