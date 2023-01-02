import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-client-basics',
  templateUrl: './rds-comp-client-basics.component.html',
  styleUrls: ['./rds-comp-client-basics.component.scss']
})
export class RdsCompClientBasicsComponent implements OnInit, OnChanges {
  // View Child
  @ViewChild('clientBasicsForm') clientBasicsForm: NgForm;

  // Input Decorators
  @Input() clientId: any;
  @Input() clientBasics: any;
  @Input() clientInfo: any = undefined;
  @Input() isEdit: boolean = false;

  // Output Decorators
  @Output() clientBasicInfo = new EventEmitter<any>();

  // Properties
  rdsCallBackUrlTable: ComponentLoaderOptions;
  rdsSignoutTableConfig: ComponentLoaderOptions;
  rdsAllowedCorsOriginTable: ComponentLoaderOptions;
  callBackUrlArray: any[] = [];
  signoutUrlArray: any[] = [];
  corsOriginArray: any[] = [];
  callBackUrl = '';
  signoutUrl = '';
  corsOrigin = '';
  checkClientId = false;
  checkClientName = false;

  callbackHeaders: TableHeader[] = [{ displayName: 'Added Url', key: 'redirectUri', dataType: 'text', dataLength: 30, required: true, sortable: true }];
  signoutHeaders: TableHeader[] = [{ displayName: 'Added Url', key: 'postLogoutRedirectUri', dataType: 'text', dataLength: 30, required: true, sortable: true }];
  corsOriginHeaders: TableHeader[] = [{ displayName: 'Added Url', key: 'origin', dataType: 'text', dataLength: 30, required: true, sortable: true }];
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];


  constructor(public translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.isEdit == false ? this.clientBasicsObjNewFn() : this.clientBasicsObjUpdateFn();
  }

  ngOnInit(): void {
    this.isEdit == false ? this.clientBasicsObjNewFn() : this.clientBasicsObjUpdateFn();
    setTimeout(() => {
      if (this.clientBasicsForm && this.clientBasics) {
        this.clientBasicsForm.statusChanges.subscribe(res => {
          this.clientBasicInfo.next(this.clientBasics);
        });
      };
    }, 100);
  }

  actionSelectionRedirectUris(actionEvent: any) {
    const deleteData = this.clientBasics.redirectUris.find(x => x.redirectUri == actionEvent.selectedData.redirectUri);
    const deleteDataIndex = this.clientBasics.redirectUris.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientBasics.redirectUris.splice(deleteDataIndex, 1);
  }

  actionSelectionSignout(actionEvent: any) {
    const deleteData = this.clientBasics.postLogoutRedirectUris.find(x => x.postLogoutRedirectUri == actionEvent.selectedData.postLogoutRedirectUri);
    const deleteDataIndex = this.clientBasics.postLogoutRedirectUris.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientBasics.postLogoutRedirectUris.splice(deleteDataIndex, 1);
  }

  actionSelectionCorsOrigin(actionEvent: any) {
    const deleteData = this.clientBasics.allowedCorsOrigins.find(x => x.origin == actionEvent.selectedData.origin);
    const deleteDataIndex = this.clientBasics.allowedCorsOrigins.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientBasics.allowedCorsOrigins.splice(deleteDataIndex, 1);
  }

  // Repeatitive functions
  clientBasicsObjNewFn() {
    if (!this.clientBasics.clientId) {
      this.clientBasics = {};
      this.clientBasics['clientId'] = '';
      this.clientBasics['clientName'] = '';
      this.clientBasics['description'] = '';
      this.clientBasics['clientUri'] = '';
      this.clientBasics['logoUri'] = '';
      this.clientBasics['logoutUrl'] = '';
      this.clientBasics['callBackUrl'] = '';
      this.clientBasics['allowedCorsOrigins'] = [];
      this.clientBasics['redirectUris'] = [];
      this.clientBasics['postLogoutRedirectUris'] = [];
      this.clientBasics['requireConsent'] = false;
      this.clientBasics['requireRequestObject'] = false;
      this.clientBasics['allowRememberConsent'] = true;
      this.clientBasics['enabled'] = true;
      this.clientBasics['allowOfflineAccess'] = true;
      this.clientBasics['frontChannelLogoutUri'] = null;
      this.clientBasics['backChannelLogoutUri'] = null;
      this.clientBasics['backChannelLogoutSessionRequired'] = true;
      this.clientBasics['allowedIdentityTokenSigningAlgorithms'] = null;
      this.clientBasics['id'] = '';
    }
  }

  clientBasicsObjUpdateFn() {
    if (!this.clientBasics.clientId) {
      this.clientBasics = {};
      this.clientBasics['absoluteRefreshTokenLifetime'] = 2592000;
      this.clientBasics['accessTokenLifetime'] = 3600;
      this.clientBasics['accessTokenType'] = 0;
      this.clientBasics['allowAccessTokensViaBrowser'] = false;
      this.clientBasics['allowOfflineAccess'] = false;
      this.clientBasics['allowPlainTextPkce'] = false;
      this.clientBasics['allowedGrantTypes'] = [];
      this.clientBasics['allowedCorsOrigins'] = [];
      this.clientBasics['allowRememberConsent'] = true;
      this.clientBasics['allowedIdentityTokenSigningAlgorithms'] = null;
      this.clientBasics['allowedScopes'] = [];
      this.clientBasics['alwaysIncludeUserClaimsInIdToken'] = false;
      this.clientBasics['alwaysSendClientClaims'] = false;
      this.clientBasics['authorizationCodeLifetime'] = 300;
      this.clientBasics['backChannelLogoutUri'] = null;
      this.clientBasics['backChannelLogoutSessionRequired'] = true;
      this.clientBasics['claims'] = [];
      this.clientBasics['clientClaimsPrefix'] = "client_";
      this.clientBasics['clientId'] = '';
      this.clientBasics['clientName'] = '';
      this.clientBasics['clientUri'] = '';
      this.clientBasics['callBackUrl'] = '';
      this.clientBasics['clientSecrets'] = [];
      this.clientBasics['consentLifetime'] = null;
      this.clientBasics['description'] = '';
      this.clientBasics['deviceCodeLifetime'] = 300;
      this.clientBasics['enableLocalLogin'] = true;
      this.clientBasics['enabled'] = true;
      this.clientBasics['frontChannelLogoutSessionRequired'] = true;
      this.clientBasics['frontChannelLogoutUri'] = null;
      this.clientBasics['id'] = '';
      this.clientBasics['identityProviderRestrictions'] = [];
      this.clientBasics['identityTokenLifetime'] = 300;
      this.clientBasics['includeJwtId'] = false;
      this.clientBasics['logoUri'] = '';
      this.clientBasics['pairWiseSubjectSalt'] = null;
      this.clientBasics['postLogoutRedirectUris'] = [];
      this.clientBasics['properties'] = []
      this.clientBasics['protocolType'] = 'oidc';
      this.clientBasics['redirectUris'] = [];
      this.clientBasics['refreshTokenExpiration'] = 1;
      this.clientBasics['refreshTokenUsage'] = 1;
      this.clientBasics['requireClientSecret'] = true;
      this.clientBasics['requireConsent'] = false;
      this.clientBasics['requirePkce'] = true;
      this.clientBasics['requireRequestObject'] = false;
      this.clientBasics['slidingRefreshTokenLifetime'] = 1296000;
      this.clientBasics['updateAccessTokenClaimsOnRefresh'] = false;
      this.clientBasics['userCodeType'] = null;
      this.clientBasics['userSsoLifetime'] = null;

    }
  }

  // Functions from html
  addCallBackUrl(event: string) {
    this.clientId != undefined ? this.clientBasics.redirectUris.push({ clientId: this.clientId, redirectUri: event }) :
      this.clientBasics.redirectUris.push(event);
    this.rdsCallBackUrlTable.input.tableData = [...this.clientBasics.redirectUris];
    this.callBackUrl = '';
  }

  addSignoutUrl(event: string) {
    this.clientId != undefined ? this.clientBasics.postLogoutRedirectUris.push({ clientId: this.clientId, postLogoutRedirectUri: event }) :
      this.clientBasics.postLogoutRedirectUris.push(event);
    this.rdsSignoutTableConfig.input.tableData = [...this.clientBasics.postLogoutRedirectUris];
    this.signoutUrl = '';
  }

  addCorsOrigin(event: string) {
    this.clientId != undefined ? this.clientBasics.allowedCorsOrigins.push({ clientId: this.clientId, origin: event }) :
      this.clientBasics.allowedCorsOrigins.push(event);
    this.rdsAllowedCorsOriginTable.input.tableData = [...this.clientBasics.allowedCorsOrigins];
    this.corsOrigin = '';
  }

}