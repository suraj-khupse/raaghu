import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';

import { Account, LinkedAccount } from '../../models/profile.model';

@Component({
  selector: 'app-rds-linked-accounts',
  templateUrl: './rds-comp-linked-accounts.component.html',
  styleUrls: ['./rds-comp-linked-accounts.component.scss']
})
export class RdsLinkedAccountsComponent extends MfeBaseComponent implements OnInit {
  public actions: any = [{ id: 'delete', displayName: 'Delete' }];
  @Input() recordsPerpage: number = 3;
  @Input() pagination: boolean = false;
  @Output() ondelete = new EventEmitter<any>();
  @Output() onUserSave = new EventEmitter<any>();
  @Output() onCancelLinkedAccounts = new EventEmitter<any>()
  @Input() linkedAccountHeaders: any = [];
  @Input() linkedAccountData: any = [];
  @Input() manageLinkedAccountsTabOpened: boolean = false;
  public tenancyName: string = '';
  public userName: string = '';
  public password: string = '';
  public showNewLinkAccoutButton: boolean = true;



  @Output()
  LinkAccountSave = new EventEmitter<{ item: any }>()
  constructor(private injector: Injector, public translate: TranslateService) {
    super(injector)
  }

  ngOnInit(): void {
    this.on('tenancyData').subscribe(res => {
      this.emitEvent('tenancyDataAgain', res);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.manageLinkedAccountsTabOpened) {
      this.onCancel();
    }
  }
  hideandShowaccountform() {
    this.showNewLinkAccoutButton = false;
    this.password = '';
    this.tenancyName = '';
    this.userName = '';
  }

  saveLinkAccount() {
    this.emitEvent('tenancyData', {
      userNameOrEmailAddress: this.userName,
      tenancyName: this.tenancyName,
      password: this.password
    })
  }

  saveAllLinkAccount(linkedAccount: NgForm) {
    if (!linkedAccount.valid) {
      return;
    }
    linkedAccount.form.markAllAsTouched();
    this.showNewLinkAccoutButton = true;
    const data: any = { usernameOrEmailAddress: this.userName, password: this.password, tenancyName: this.tenancyName };
    this.onUserSave.emit(data);

  }

  onCancel(): void {
    this.showNewLinkAccoutButton = true;
  }



}
