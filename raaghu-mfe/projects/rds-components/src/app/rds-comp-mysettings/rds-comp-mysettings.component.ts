import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceProxy, SharedService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'rds-mysettings',
  templateUrl: './rds-comp-mysettings.component.html',
  styleUrls: ['./rds-comp-mysettings.component.scss']
})
export class RdsMysettingsComponent implements OnInit, OnChanges {

  @Input() ProfileData = {
    email: '',
    userName: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    name: '',
    surname: '',
    phoneNumber: '',
    concurrencyStamp: '',
    twoFactorEnabled: false
  }
  @Input() buttonSpinner: boolean = false;
  @Output() onProfileClose = new EventEmitter<any>();
  @Output() onProfileSave = new EventEmitter<any>();
  @Output() onProfileData = new EventEmitter<any>();
  @Output() onProfilePicUpdate = new EventEmitter<any>();

  passwordPattern = /^(?=.{6,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/
  firstcontent: boolean = false;
  invalidEmail: boolean = false;
  showEmailRequiredMessage: boolean = false;
  showEmailValidityMessage: boolean = false;
  navtabcontentClass: string = "d-none";
  isPasswordMismatch: boolean = false;
  @Input() incorrectPassword: string = '';
  public Profileform: FormGroup;
  uploadSub: any;
  @Input() profileUrl = 'https://anzstageui.raaghu.io/assets/profile-picture-circle.svg';
  fileArray: any[] = [];
  isIncorrect = false;
  validationMessages: string[] = ["Passwords must have at least one digit ('0'-'9').",
  "Passwords must have at least one uppercase ('A'-'Z').",
  "Passwords must have at least one non alphanumeric character.",
  "This field must be a string or array type with a minimum length of 6."];

  selectedProfilePicture: any

  constructor(private formBuilder: FormBuilder, public translate: TranslateService, private http: HttpClient,
    private serviceProxies: ServiceProxy, private sharedService: SharedService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sharedService.getPasswordStatus().subscribe(error => {
      if (error && error.error.message == 'Incorrect password.') this.isIncorrect = true;
      else this.isIncorrect = false;
    })
  }

  ngOnInit(): void {
    this.Profileform = this.formBuilder.group({
      ProfileNameData: ['', Validators.required],
      EmailAddressData: ['', Validators.required],
      UserNameData: ['', Validators.required],
      CurrentPasswordData: [],
      NewPasswordData: [],
      ConFNewPasswordData: []
    });



  }

  get f() {
    return this.Profileform.controls;
  }
  public get NavtabcontentClass(): string {
    var classList = '';
    if (this.firstcontent === false) {
      classList = 'd-none';
    }
    return classList;

  }
  confirmPassword() {
    this.ProfileData.newPassword == this.ProfileData.confirmNewPassword ? this.isPasswordMismatch = false :
      this.isPasswordMismatch = true
  }

  emailValidator(data: string) {
    var EMAIL_REGEXP =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(data)) {
      this.invalidEmail = true;
    }
    else this.invalidEmail = false;
  }

  showPassMsg = false;


  // Profile picture upload
  getValue(event: any) {
    this.fileArray.push(event.target.files.name);
  }

  async onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      console.log('file', file);
      const blobValue = new Blob([file], { type: file.type });
      const item = {
        data: blobValue,
        fileName: undefined
      }
      this.selectedProfilePicture = item;
      this.onProfilePicUpdate.emit(item);
    }
  }

  saveProfile(accountForm: NgForm, changePasswordForm: NgForm, twoFactorEnabled: boolean) {
    // accountForm.form.markAllAsTouched();
    // changePasswordForm.form.markAllAsTouched();
    const myaccountItem = {
      email: accountForm.form.value.email,
      userName: accountForm.form.value.userName,
      name: accountForm.form.value.name,
      surname: accountForm.form.value.surname,
      phoneNumber: accountForm.form.value.phoneNumber,
      concurrencyStamp: this.ProfileData.concurrencyStamp
    }
    const changePasswordItem = {
      currentPassword: changePasswordForm.form.value.currentPassword,
      newPassword: changePasswordForm.form.value.newPassword
    }
    this.buttonSpinner = true;
    console.log('myAccount: myaccountItem', myaccountItem);
    
    this.onProfileSave.emit({
      myAccount: myaccountItem,
      changedPassword: changePasswordItem,
      twoFactorEnabled: twoFactorEnabled
    });
    setTimeout(() => {
      this.buttonSpinner = false;
    }, 3000);
  }

  onCancel(): void {
    this.onProfileClose.emit();
    this.buttonSpinner = false;
  }

  disableSave(): boolean {
    if (this.ProfileData.currentPassword == '' && this.ProfileData.newPassword == '' && this.ProfileData.confirmNewPassword == ''
        || (this.ProfileData.currentPassword != '' && this.ProfileData.newPassword != '' && this.ProfileData.confirmNewPassword != '')) {
      return false;
    }
    else return true;
  }
}
