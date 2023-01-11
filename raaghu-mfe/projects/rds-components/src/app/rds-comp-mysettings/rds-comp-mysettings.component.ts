import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceProxy } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'rds-mysettings',
  templateUrl: './rds-comp-mysettings.component.html',
  styleUrls: ['./rds-comp-mysettings.component.scss']
})
export class RdsMysettingsComponent implements OnInit, OnChanges {

  @Input() ProfileData: any = {
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

  firstcontent: boolean = false;
  invalidEmail: boolean = false;
  showEmailRequiredMessage: boolean = false;
  showEmailValidityMessage: boolean = false;
  navtabcontentClass: string = "d-none";
  isPasswordMismatch: boolean = false;
  public Profileform: FormGroup;
  uploadSub: any;
  @Input() profileUrl = 'https://anzstageui.raaghu.io/assets/profile-picture-circle.svg';
  fileArray: any[] = [];

  selectedProfilePicture: any

  constructor(private formBuilder: FormBuilder, public translate: TranslateService, private http: HttpClient,
    private serviceProxies: ServiceProxy) {
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    if (this.ProfileData.NewPassword === this.ProfileData.ConFNewPassword) {
      this.isPasswordMismatch = false;

    } else {
      this.isPasswordMismatch = true
    }
  }
  emailValidator(data: string) {
    var EMAIL_REGEXP =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(data)) {
      this.invalidEmail = true;
    }
    else this.invalidEmail = false;
  }


  // Profile picture upload
  getValue(event: any) {
    this.fileArray.push(event.target.files.name);
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      console.log('file', file);
      const blobValue = new Blob([file], { type: file.type });
      const item = {
        data: blobValue,
        fileName: undefined
      }
      this.selectedProfilePicture = item;
      console.log('item', item);
      // this.onProfilePicUpdate.emit(item);


      

    }
  }

  async savePhoto() {
    await this.postFn().then(() => {
      this.serviceProxies.profilePictureFile('6f9f495e-f308-9a83-e524-3a079ce6f2f5').subscribe((res: any) => {
        if (res) {
          console.log('res 2', res);
          this.profileUrl = 'data:image/jpeg;base64,' + res.fileContent;
        }
      })
    });


  }


  postFn(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.serviceProxies.profilePicturePOST(2, this.selectedProfilePicture).subscribe((result: any) => {
        console.log('result', result)
        resolve();
      });
    })
  }














  updateProfilePicture(fileToken: string): void {
    // const input = new UpdateProfilePictureInput();
    // input.fileToken = fileToken;

    // this._profileService
    //   .updateProfilePicture(input)
    //   .subscribe(() => {
    //     this.getProfilePicture();
    //   });
  }

  public getProfilePicture(): void {
    // this._profileService.getProfilePicture().subscribe((result) => {
    //   if (result && result.profilePicture) {
    //     this.Profileurl = 'data:image/jpeg;base64,' + result.profilePicture;
    //     this.onProfilePicUpdate.emit(this.Profileurl);
    //   }
    // })
  }




  //==============


  //=================



  // getValue(event: any) {
  //   this.fileArray.push(event.target.files.name);
  // }

  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {

  //     const file: File = event.target.files[0];

  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('fileType', file.type);
  //     formData.append('fileName', 'ProfilePicture');
  //     formData.append('fileToken', this.guid());

  //     const upload$ = this.http.post("https://anzdemoapi.raaghu.io/Profile/UploadProfilePicture", formData);
  //     this.uploadSub = upload$.subscribe((result: any) => {
  //       this.updateProfilePicture(result.result.fileToken);
  //       this.onProfileData.emit(result);
  //       console.log(result)

  //     });

  //   }
  // }

  // updateProfilePicture(fileToken: string): void {

  // }

  guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


  saveProfile(accountForm: NgForm, changePasswordForm: NgForm, twoFactorEnabled: boolean) {
    accountForm.form.markAllAsTouched();
    changePasswordForm.form.markAllAsTouched();
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
}
