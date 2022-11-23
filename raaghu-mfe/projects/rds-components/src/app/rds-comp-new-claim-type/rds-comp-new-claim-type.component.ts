import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class claimtype {
  public Name: string;
  public ValueType: string;
  public Description: string;
  public Regex: string;
  public Required:boolean;
  public regexdescription: string;

}

@Component({
  selector: 'rds-comp-new-claim-type',
  templateUrl: './rds-comp-new-claim-type.component.html',
  styleUrls: ['./rds-comp-new-claim-type.component.scss']
})
export class RdsCompNewClaimTypeComponent implements OnInit {

  @Output()
  onClaimTypeSave = new EventEmitter<{ClaimTypeData:any}>()
  @ViewChild('ClaimTypeForm') tenantInfoForm: NgForm;
  constructor() { }
  ClaimTypeData:claimtype={
    Name: '',
    ValueType: '',
    Description: '',
    Regex: '',
    Required: false,
    regexdescription: '',
   
  }
  ngOnInit(): void {
  
  }
  AddCliamtypeData() {
    this.onClaimTypeSave.emit({ ClaimTypeData: this.ClaimTypeData });
   this.ClaimTypeData=new claimtype();
      }
      clearclaimtypeData(){
        this.ClaimTypeData=new claimtype();
      }

}
