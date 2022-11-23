import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class identity{
  requiredLength:number ;
  defaultAddress:string;
  nonAlpha:boolean;
  uppercaserequired:boolean;
  lowercaserequired:boolean;
  numbers:boolean;
  lockoutDuration:string
  MaxAttmpts:string;
  uppercase:boolean;
  lowercase:boolean
}
@Component({
  selector: 'rds-comp-identity-management-new',
  templateUrl: './rds-comp-identity-management-new.component.html',
  styleUrls: ['./rds-comp-identity-management-new.component.scss']
})
export class RdsCompIdentityManagementNewComponent implements OnInit {
  @Input() identityData:any= {
 requiredPassword: '', defaultAddress:'', nonAlpha:false,uppercaserequired:false, numbers:false, lowercaserequired:false,
lockoutDuration: '', MaxAttmpts:'', uppercase:false, lowercase:false,newusers:'' };
  @ViewChild('identityDataForm')identityForm: NgForm;
  @Output() identityInfo = new EventEmitter<any>();

  constructor() { }
  ngAfterViewInit(): void {
    if (this.identityData && this.identityForm) {
      this.identityForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.identityInfo.emit(this.identityData);
        } else {
          this.identityInfo.emit(undefined);
        }
      });
    }  }
 
   
  ngOnInit(): void {
    if (!this.identityData) {
      
      this.identityData['requiredLength'] = '';
      this.identityData['defaultAddress'] = '';
      this.identityData['nonAlpha'] = false;
      this.identityData['uppercaserequired'] = false;
      this.identityData['lowercaserequired'] = false;
      this.identityData['numbers'] = false;
      this.identityData['lockoutDuration'] = '';
      this.identityData['MaxAttmpts'] = '';
      this.identityData['uppercase'] = false;
      this.identityData['lowercase'] = false;
    
    }
  }
  selectIdentity(e: boolean, type: string) {

    this.identityInfo.emit(this.identityData);
    
   }
 
  
}
