import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-tenant-basic-profile-right',
  templateUrl: './rds-comp-tenant-basic-profile-right.component.html',
  styleUrls: ['./rds-comp-tenant-basic-profile-right.component.scss']
})
export class RdsCompTenantBasicProfileRightComponent implements OnInit, OnChanges{

  @Input() public editionList: any = [];
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() tenantInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() tenantData: any;
  @ViewChild('tenantCreationForm') tenantInfoForm: NgForm;
  @Output() onValidForm = new EventEmitter<any>();
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean =false;
  radioItem: any = [
    { label: 'Shared Database', checked: true, name: "Radio-Button" , id:1},
    { label: 'Separated Database', checked: false, name: "Radio-Button" , id:2},
];

ActiveList = [
  { value: 0, some: 'Active' },
  { value: 1, some: 'Active with Limited Time' },
  { value: 2, some: 'Passive' },
];
@Input() isTenantBasic: boolean = false;
  targetId =undefined;
  targetActiveId = undefined;
  DatabaseUrl: boolean = false;
  activationEndDate: boolean = false;

  constructor(public translate: TranslateService) { }


  ngAfterViewInit(): void {
    if (this.tenantData && this.tenantInfoForm) {
      this.tenantInfoForm.statusChanges.subscribe((res) => {
        if (res === 'VALID') {
          this.onValidForm.emit(this.tenantData);
        } else {
          // this.onValidForm.emit(undefined);
        }
      });
    }
  }


  ngOnInit(): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['name'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['targetId'] = '';
      this.tenantData['adminPassword'] = '' ;
      this.tenantData['targetActiveId'] = '' ;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      this.tenantData['activationEndDate']= '';
    }

  }
  // activationState

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['name'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['targetId'] = '';
      this.tenantData['adminPassword'] = '' ;
      this.tenantData['targetActiveId'] = '' ;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      this.tenantData['activationEndDate']= '';
      // this.tenantData['connectionStrings'] = '';
    }

    if(this.tenantData && this.tenantData.targetId){
      this.editionList.forEach((res:any) => {
        if(res && +res.value===+this.tenantData.targetId){
          this.tenantData.editionId = res.some;
        }
      })
    }

    if(this.tenantData && this.tenantData.targetActiveId){
      this.ActiveList.forEach((res:any) => {
        if(res && +res.value===+this.tenantData.targetActiveId){
          this.tenantData.activationState = res.some;
        }
      })
    }

  }

  next(tenantCreationForm: NgForm): void {
    tenantCreationForm.form.markAllAsTouched();
    this.buttonSpinner=false;

    if (!tenantCreationForm || tenantCreationForm.invalid) {    
      return;
    }
    this.tenantInfo.emit(this.tenantData);
    // tenantCreationForm.reset()

  }
  // getCheckboxValue(event: any): void {
  //   this.tenantData.activationState = event;
  //   if (event) {
  //     this.tenantData.activationState = null;
  //   }
  // }
  
  getImage(ev: any) {
    let FileImage = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.tenantData.imageUrl = event.target.result;
    }
    reader.readAsDataURL(FileImage);
  }
  onEditionSelect(event: any): void {
    this.tenantData.editionId = event.item.some;
    this.tenantData.targetId = event.item.value;
  }

  onCanceled(){ 
    this.buttonSpinner=false;
    this.onCancel.emit(true);

  }

  setDatabase(event: any): void {
    this.tenantData.connectionStrings = event.item

    if(event.item == 'Separated Database'){
      this.DatabaseUrl = true;
    }else {
      this.DatabaseUrl = false;
    }
  }

  getSelectedValue(event){
    this.tenantData.activationState = event.item.some;
     this.tenantData.targetActiveId= event.item.value;

     if(this.tenantData.targetActiveId == 1){
      this.activationEndDate = true;
     }
     else {
      this.activationEndDate = false;
     }
  }

  ActivationStateDate(event) {
    this.tenantData.activationEndDate = event;
  }
}
