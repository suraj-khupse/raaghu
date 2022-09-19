import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';

import { Account, LinkedAccount } from '../../models/profile.model';
import { TableAction } from '../../models/table-action.model';
// import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'app-rds-linked-accounts',
  templateUrl: './rds-comp-linked-accounts.component.html',
  styleUrls: ['./rds-comp-linked-accounts.component.scss']
})
export class RdsLinkedAccountsComponent extends MfeBaseComponent implements OnInit {

  Addaccountflag: boolean = true;
  linkaacountDivFlag: boolean = false;
  linckAccount: any;
  linkedAccountDivFlag: boolean = false;
  @Input() rdslinkedAccountTableData: any = [];
  @Input() rdsLinkedAccountTableHeader: TableHeader[] = [];

  DatasetLinkedAccount: any = [];
  @Input() recordsPerpage: number = 3;
  @Input() pagination: boolean = false;
  @Input() TenantName: string;
  @Input() tenancyName: any;
  @Output() ondelete = new EventEmitter<any>();
  @Output() onUserSave = new EventEmitter<any>();
  @Output() onCancelLinkedAccounts = new EventEmitter<any>()
  @Input()
  linkedAccount: LinkedAccount = {
    TableHeader: [],
    tableData: [],
  };
  userName: '';
  Tenancyname: '';
  Password: '';

  showNewLinkAccoutButton: boolean = true;
  showManageLinkAccountTable: boolean = false;

  rdsLinkedAccountTableMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableHeaders: this.linkedAccount.TableHeader,
      tableStyle: 'light',
      width: '100%',
      tableData: this.linkedAccount.tableData,
        actions: [{ id: 'delete', displayName: 'Delete' }],

      // actions: TableAction = [{ id: 'delete', displayName: 'Delete' }],

      //pagination: true,
      recordsPerPage: 5,
      noDataTitle: 'Currently you do not have linked acccounts'
    },
    output: {
      onActionSelection: (event: any) => {
        if (event.actionId === 'delete') {
          const data: any =
          {
            tenantId: event.selectedData.tenantId,
            userId: event.selectedData.id
          }
          this.ondelete.emit(data)
        }

      },
    }
  };

  @Output()
  LinkAccountSave = new EventEmitter<{ item: any }>()
  constructor(private injector: Injector, public translate: TranslateService) {
    super(injector)
  }
  @Output() onDeleteDeligate = new EventEmitter<any>()

  ngOnInit(): void {
    this.rdsLinkedAccountTableMfeConfig.input.tableHeaders = this.linkedAccount.TableHeader;
    this.rdsLinkedAccountTableMfeConfig.input.tableData = this.linkedAccount.tableData;
    this.on('tenancyData').subscribe(res => {
      this.emitEvent('tenancyDataAgain', res);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.linkedAccount);
    const mfeConfig = this.rdsLinkedAccountTableMfeConfig
    mfeConfig.input.tableData = [... this.linkedAccount.tableData];
    this.rdsLinkedAccountTableMfeConfig = mfeConfig;
    // this.DatasetLinkedAccount = this.LinkedAccountTable;
    // this.rdsLinkedAccountTableMfeConfig.input.tableData = this.LinkedAccountTable.LinkedAccounts;
    // // this.LinkedAccountTable.LinkedAccounts=JSON.parse(JSON.stringify(this.linckAccount));
  }
  deleteLinkedAccountData(event: any): void {
    if (event.actionId === 'delete') {
      this.onDeleteDeligate.emit(event.selectedData);
    }
  }
  hideandShowaccountform() {
    this.showNewLinkAccoutButton = false;
    this.showManageLinkAccountTable = false;
    this.linkaacountDivFlag = !this.linkaacountDivFlag;
    this.Password = '';
    this.Tenancyname = '';
    this.userName = '';
  }

  LinkaccountValidator() {
    if (this.userName && this.Password) {
      this.Addaccountflag = false
    } else {
      this.Addaccountflag = true
    }
  }

  saveLinkAccount() {
    // const data = this.LinkedAccountTable.LinkedAccounts
    // data.push(this.linckAccount);
    // this.LinkedAccountTable.LinkedAccounts = [...data]
    // this.linkaacountDivFlag = !this.linkaacountDivFlag;
    // this.linckAccount=new Account();

    // this.LinkedAccountTable.LinkedAccounts.push(this.linckAccount);
    // const mfeConfig = this.rdsLinkedAccountTableMfeConfig
    // mfeConfig.input.tableData = [... this.LinkedAccountTable.LinkedAccounts];
    // this.rdsLinkedAccountTableMfeConfig = mfeConfig;
    // this.linckAccount = {
    // userName: '',
    // Tenancyname: '',
    // Password: ''
    // };
    // // this.linkaacountDivFlag = !this.linkaacountDivFlag;
    // this.LinkaccountValidator();
    this.emitEvent('tenancyData', {
      userNameOrEmailAddress: this.userName,
      tenancyName: this.Tenancyname,
      password: this.Password
    })
  }

  saveAllLinkAccount(linkedAccount: NgForm) {
    linkedAccount.form.markAllAsTouched();
    this.showNewLinkAccoutButton = true;
    this.linkaacountDivFlag = false;
    this.showManageLinkAccountTable = true;
    const data: any = { usernameOrEmailAddress: this.userName, password: this.Password, tenancyName: this.Tenancyname };
    this.onUserSave.emit(data);

  }

  onCancel(): void {
    this.linkaacountDivFlag = false;
    this.showNewLinkAccoutButton = true;
    //this.onCancelLinkedAccounts.emit(true);
  }

  // onCancel(): void {
  //   this.deligateDivFlag = false;
  //   // this.onCancelDeligate.emit(true);
  // }

}
