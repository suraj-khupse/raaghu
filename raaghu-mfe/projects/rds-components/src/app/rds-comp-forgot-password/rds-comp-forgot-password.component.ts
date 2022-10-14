import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-forgot-password',
  templateUrl: './rds-comp-forgot-password.component.html',
  styleUrls: ['./rds-comp-forgot-password.component.scss']
})
export class RdsForgotPasswordComponent extends MfeBaseComponent implements OnInit {

  constructor(private injector: Injector,
    public translate: TranslateService,
    private formBuilder: FormBuilder) { super(injector) }

  @Input() mailID: string;
  @Input() Email: string = 'Email';
  @Input() buttonColorType: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'default' = 'primary';
  @Input() buttonLabel: string = 'Submit';
  @Input() loginRouterLink?: string;
  @Input() resendLink?: string;
  @Input() showMailSuccess = false;
  @Output() onClick = new EventEmitter<any>();
  @Output() onShimmerLoad = new EventEmitter<any>();
  showMailValidityMessage = false;
  showMailRequiredMessage = false;

  public forgotPasswordForm: FormGroup;

  ngOnInit(): void {
    this.onShimmerLoad.emit(false)
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    })
  }
  get f() { return this.forgotPasswordForm.controls; }


  emailValidator(data: string) {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(data)) {
      this.showMailValidityMessage = true;
    }
    else
      this.showMailValidityMessage = false;
    this.showMailRequiredMessage = false;

  }

  checkIsEmailEmpty() {
    if (this.showMailValidityMessage === false) {
      if (this.mailID === '' || this.mailID === undefined) {
        this.showMailRequiredMessage = true;
      }
      else {
        this.showMailRequiredMessage = false;
      }
    }
  }

  submit() {
    this.checkIsEmailEmpty();
    if (this.forgotPasswordForm.status === 'VALID') {

      this.emitEvent('forgetpassword', {

        emailAddress: this.mailID
      });
      // this.onClick.emit({emailID:this.mailID});
      // this.showMailSuccess = true;
    }
  }
}


