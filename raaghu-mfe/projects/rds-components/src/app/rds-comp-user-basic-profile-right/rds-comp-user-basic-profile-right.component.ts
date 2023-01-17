import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-user-basic-profile-right',
  templateUrl: './rds-comp-user-basic-profile-right.component.html',
  styleUrls: ['./rds-comp-user-basic-profile-right.component.scss']
})
export class RdsCompUserBasicProfileRightComponent implements OnInit, OnChanges {

  public editionList: any = [{ name: 'Standard', value: 'Standard' }, { name: 'Basic', value: 'Basic' }, { name: 'Premium', value: 'Premium' }, { name: 'Professional', value: 'Professional' }];
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() userInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() userData: any;
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean = true;
  @Input() roleListItem: any;
  @Input() orgUnitListItem: any;
  public phonePattern = /^((\\+91-?)|0)?[0-9]{10}$/;
  @ViewChild('userCreationForm') userInfoForm: NgForm;
  constructor(public translate: TranslateService) { }
  
  ngOnInit(): void {
    if (!this.userData) {
      this.userData = {};
      this.userData['name'] = '';
      this.userData['userName'] = '';
      this.userData['email'] = '';
      this.userData['phoneNumber'] = '';
      this.userData['password'] = '';
      this.userData['lockoutEnabled'] = false;
      this.userData['isActive'] = true;
      this.userData['surname'] = '';
    }
     setTimeout(() => {
    if (this.userData && this.userInfoForm) {
      this.userInfoForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.userInfo.emit({ user: this.userData, next: false });
        }
      });
    }
     }, 100);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.userData) {
      this.userInfoForm.resetForm();
      this.userData = {};
      this.userData['name'] = '';
      this.userData['userName'] = '';
      this.userData['email'] = '';
      this.userData['phoneNumber'] = '';
      this.userData['password'] = '';
      this.userData['lockoutEnabled'] = false;
      this.userData['isActive'] = true;
      this.userData['surname'] = '';
      }
  }

  next(userCreationForm: NgForm): void {
    userCreationForm.form.markAllAsTouched();
    this.buttonSpinner = true;
    if (!userCreationForm || userCreationForm.invalid) {
      return;
    }
    this.userInfo.emit({ user: this.userData, next: true });
  }

  onRolesSelect(event){
    this.userData.roleNames=[];
    event.item.forEach(element => {
      this.userData.roleNames.push(element.some);
    });
  }
  
  onOrgUnitSelect(event){
    this.userData.organizationUnitIds=[];
    event.item.forEach(element => {
      this.userData.organizationUnitIds.push(element.value);
    });
  }

  getImage(ev: any) {
    let FileImage = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.userData.imageUrl = event.target.result;
    }
    reader.readAsDataURL(FileImage);
  }

  onCancelUser() {
    this.buttonSpinner = false;
    this.onCancel.emit(true);
  }

}
