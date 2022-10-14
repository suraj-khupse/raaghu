import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
export class claimtype {
  public Name: string;
  public ValueType: string;
  public Description: string;
  public Regex: string;
  public Required:boolean;
  public regexdescription: string;

}
@Component({
  selector: 'app-claim-types',
  templateUrl: './claim-types.component.html',
  styleUrls: ['./claim-types.component.scss']
})
export class ClaimTypesComponent implements OnInit {
  public rdsNewclaimtypeMfeConfig: ComponentLoaderOptions;
  @Output()
  onClaimTypeSave = new EventEmitter<{ClaimTypeData:any}>()
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
    this.rdsNewclaimtypeMfeConfig = {
      name: 'RdsCompNewClaimType',
      input: {
      
      },
      output: {
        onClaimTypeSave: (ClaimTypeData) => { this.onClaimTypeSave.emit({ ClaimTypeData: ClaimTypeData }); },
      }
    };
  }
}
