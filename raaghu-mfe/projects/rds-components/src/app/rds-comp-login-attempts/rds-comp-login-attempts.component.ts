import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { Login, LoginAttempts } from '../../models/profile.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'app-rds-comp-login-attempts',
  templateUrl: './rds-comp-login-attempts.component.html',
  styleUrls: ['./rds-comp-login-attempts.component.scss']
})
export class RdsCompLoginAttemptsComponent implements OnInit {
  rdsLoginTableMfeConfig: ComponentLoaderOptions
  constructor(public translate:TranslateService) { }
  @Input()
  TabiD: string;
  @Input()
  LoginAttempts: any = {};
  @Input() Result: string;
  @Input() public operationLogs: any = [];
  @Input() public operationLogsHeaders: TableHeader[] = [];
   showInput:boolean=false;

   

  result:string
  startDate:any
  endDate:any
  @Output() RefreshLoginAttemts = new EventEmitter<any>();
  @Input()
  listItemsResult: any[] = [{ value: '', displayText: 'All'},
  { value: 'Success', displayText: 'Success'},
  { value: 'InvalidUserNameOrEmailAddress', displayText: 'Invalid Username or email Address'},
  { value: 'InvalidPassword', displayText: 'Invalid Password'},
  { value: 'UserIsNotActive', displayText: 'User is Not Active'},
  { value: 'InvalidTenancyName', displayText: 'Invalid Tenancy name'},
  { value: 'TenantIsNotActive', displayText: 'Tenant Is Not Active'},
  { value: 'UserEmailIsNotConfirmed', displayText: 'User Email Is Not Confirmed'},
  { value: 'UnknownExternalLogin', displayText: 'Unknown External Login'},
  { value: 'LockedOut', displayText: 'Locked Out'},
  { value: 'UserPhoneNumberIsNotConfirmed', displayText: 'User PhoneNumber IsNot Confirmed'} ]

  ngOnInit(): void {
    this.rdsLoginTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.LoginAttempts.TableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.LoginAttempts.LoginDatatable,
        recordsPerPage: 10,
        pagination: true,
        noDataTitle:'Currently you do not have login attempts',
        noDataSubTitle:''
      },
    };
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.rdsLoginTableMfeConfig) {
      this.rdsLoginTableMfeConfig.input.tableData = this.LoginAttempts.LoginDatatable;

    }
    console.log()
  }
  LoginAttemptTableData: LoginAttempts;
 
Search(loginAttempt:NgForm){
  loginAttempt.form.markAllAsTouched();
let startdate = this.startDate .toISOString()

let endDate = this.endDate.toISOString()
  const FilterData:any={
    StartDate:startdate,
    EndDate:endDate,
    Result:this.result,
    Sorting:undefined,
    maxResultCount:10,
    SkipCount:0,
    filter:undefined
  }
this.RefreshLoginAttemts.emit(FilterData)
}

onClickShowInput()  {
  this.showInput=!this.showInput;

}
}
