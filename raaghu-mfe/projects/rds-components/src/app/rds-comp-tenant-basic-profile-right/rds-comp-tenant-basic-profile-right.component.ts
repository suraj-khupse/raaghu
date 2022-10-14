import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-tenant-basic-profile-right',
  templateUrl: './rds-comp-tenant-basic-profile-right.component.html',
  styleUrls: ['./rds-comp-tenant-basic-profile-right.component.scss']
})
export class RdsCompTenantBasicProfileRightComponent implements OnInit, OnChanges {

  @Input() public editionList: any = [];
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() tenantInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() tenantData: any;
  @ViewChild('tenantCreationForm') tenantInfoForm: NgForm;
  @Input() showEmail: boolean = true;
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean =true;
  showInput:boolean=false;


  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['tenancyName'] = undefined;
      this.tenantData['tenantName'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['edition'] = '';
      this.tenantData['unlimitedSubscription'] = true;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      this.tenantData['subscriptionEndDate'] = null;
    }
    setTimeout(() => {
      if (this.tenantData && this.tenantInfoForm) {
        this.tenantInfoForm.statusChanges.subscribe(res => {
          if (res === 'VALID') {
            this.tenantInfo.emit({ tenant: this.tenantData, next: false });
          } else {
            this.tenantInfo.emit({ tenant: undefined, next: false });
          }
        });
      }

    }, 100);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['tenancyName'] = '';
      this.tenantData['tenantName'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['edition'] = '';
      this.tenantData['unlimitedSubscription'] = true;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      this.tenantData['subscriptionEndDate'] = null;
    }

  }

  next(tenantCreationForm: NgForm): void {
    tenantCreationForm.form.markAllAsTouched();
    this.buttonSpinner=true;

    if (!tenantCreationForm || tenantCreationForm.invalid) {
      
      return;
    }
    this.tenantInfo.emit({ tenant: this.tenantData, next: true });
  }
  getCheckboxValue(event: any): void {
    this.tenantData.unlimitedSubscription = event;
    if (event) {
      this.tenantData.subscriptionEndDate = null;
    }
  }
  
  getImage(ev: any) {
    let FileImage = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.tenantData.imageUrl = event.target.result;
    }
    reader.readAsDataURL(FileImage);
  }

  onCanceled(){
    this.buttonSpinner=false;
    this.onCancel.emit(true);

  }
  onClickShowInput()  {
    this.showInput=!this.showInput;
 
  }

}
