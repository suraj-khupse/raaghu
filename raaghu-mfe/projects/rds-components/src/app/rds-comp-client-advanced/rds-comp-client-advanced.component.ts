import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { StringMap } from 'quill';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-client-advanced',
  templateUrl: './rds-comp-client-advanced.component.html',
  styleUrls: ['./rds-comp-client-advanced.component.scss']
})
export class RdsCompClientAdvancedComponent implements OnInit, OnChanges {

  claimsDataObj: any = {};
  grantTypesDataObj: any = {};
  grantTypeData: any[] = [
    { id: 1, value: 'implicit', some: 'implicit' },
    { id: 2, value: 'authorization_code', some: 'authorization_code' },
    { id: 3, value: 'hybrid', some: 'hybrid' },
    { id: 4, value: 'client_credentials', some: 'client_credentials' },
    { id: 5, value: 'password', some: 'password' },
    { id: 6, value: 'Custom', some: 'Custom' }
  ];
  selectedGrant: any;
  restrictionsDataObj: any = {};
  propertiesDataObj: any = {};
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];
  claimHeaders: TableHeader[] = [
    { displayName: 'Type', key: 'type', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ];
  grantTypesHeaders: TableHeader[] = [
    { displayName: 'Grant Type', key: 'grantType', dataType: 'text', dataLength: 30, required: true, sortable: true },
  ];
  restrictionsHeaders: TableHeader[] = [
    { displayName: 'Name', key: 'provider', dataType: 'text', dataLength: 30, required: true, sortable: true },
  ];
  propertiesHeaders: TableHeader[] = [
    { displayName: 'Type', key: 'key', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ];

  @ViewChild('clientAdvancedForm') clientAdvancedForm: NgForm;
  // Input Decorators
  @Input() clientId: any;
  @Input() clientAdvancedObj: any;

  // Output Decorators
  @Output() advancedData = new EventEmitter();

  constructor(public translate: TranslateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.clientAdvancedObj != undefined) this.advanceObjFn();
  }

  ngOnInit(): void {
    if (this.clientAdvancedObj == undefined) this.advanceObjFn();
    setTimeout(() => {
      if (this.clientAdvancedForm && this.clientAdvancedObj) {
        this.clientAdvancedForm.statusChanges.subscribe(res => {
          this.advancedData.next(this.clientAdvancedObj)
        })
      }
    }, 100);
  }

  onActionSelectionClaims(actionEvent: any) {
    const deleteData = this.clientAdvancedObj.claims.find((x: any) => x.type == actionEvent.selectedData.type);
    const deleteDataIndex = this.clientAdvancedObj.claims.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientAdvancedObj.claims.splice(deleteDataIndex, 1);
  }

  onActionSelectionGrants(actionEvent: any) {
    const deleteData = this.clientAdvancedObj.allowedGrantTypes.find((x: any) => x.grantType == actionEvent.selectedData.grantType);
    const deleteDataIndex = this.clientAdvancedObj.allowedGrantTypes.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientAdvancedObj.allowedGrantTypes.splice(deleteDataIndex, 1);
  }

  onActionSelectionRestrictions(actionEvent: any) {
    const deleteData = this.clientAdvancedObj.identityProviderRestrictions.find((x: any) => x.name == actionEvent.selectedData.name);
    const deleteDataIndex = this.clientAdvancedObj.identityProviderRestrictions.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientAdvancedObj.identityProviderRestrictions.splice(deleteDataIndex, 1);
  }

  onActionSelectionProperties(actionEvent: any) {
    const deleteData = this.clientAdvancedObj.properties.find((x: any) => x.key == actionEvent.selectedData.key);
    const deleteDataIndex = this.clientAdvancedObj.properties.indexOf(deleteData, 0);
    if (deleteDataIndex != undefined) this.clientAdvancedObj.properties.splice(deleteDataIndex, 1);
  }

  addClaims(type: string, value: string) {
    this.clientAdvancedObj.claims.push({ clientId: this.clientId, type: type, value: value });
    this.claimsDataObj = { type: '', value: '' };
  }

  selectedGrantType(event: any) {
    this.selectedGrant = event.item.value;
  }

  addGrantTypes() {
    this.clientAdvancedObj.allowedGrantTypes.push({ clientId: this.clientId, grantType: this.selectedGrant });
    this.grantTypesDataObj = { grantType: '' };
  }

  addRestrictions(provider: string) {
    this.clientAdvancedObj.identityProviderRestrictions.push({ clientId: this.clientId, provider: provider });
    this.restrictionsDataObj = { provider: '' };
  }

  addProperties(key: string, value: string) {
    this.clientAdvancedObj.properties.push({ clientId: this.clientId, key: key, value: value });
    this.propertiesDataObj = { key: '', value: '' };
  }

  advanceObjFn() {
    if (!this.clientAdvancedObj) {
      this.clientAdvancedObj = {};
      this.clientAdvancedObj['accessTokenLifetime'] = undefined;
      this.clientAdvancedObj['accessTokenType'] = undefined;
      this.clientAdvancedObj['allowedGrantTypes'] = [];
      this.clientAdvancedObj['allowedScopes'] = [];
      this.clientAdvancedObj['claims'] = [];
      this.clientAdvancedObj['consentLifetime'] = 0;
      this.clientAdvancedObj['deviceCodeLifetime'] = 300;
      this.clientAdvancedObj['enableLocalLogin'] = false;
      this.clientAdvancedObj['identityProviderRestrictions'] = [];
      this.clientAdvancedObj['pairWiseSubjectSalt'] = '';
      this.clientAdvancedObj['properties'] = [];
      this.clientAdvancedObj['requireClientSecret'] = false;
      this.clientAdvancedObj['requirePkce'] = false;
      this.clientAdvancedObj['userCodeType'] = '';
      this.clientAdvancedObj['userSsoLifetime'] = 0;
    }
    if (!this.claimsDataObj) {
      this.claimsDataObj = {};
      this.claimsDataObj['type'] = '';
      this.claimsDataObj['value'] = '';
    }
    if (!this.restrictionsDataObj) {
      this.restrictionsDataObj = {};
      this.restrictionsDataObj['name'] = '';
    }
    if (!this.grantTypesDataObj) {
      this.grantTypesDataObj = {};
      this.grantTypesDataObj['grantType'] = '';
    }
    if (!this.propertiesDataObj) {
      this.propertiesDataObj = {};
      this.propertiesDataObj['key'] = '';
      this.propertiesDataObj['value'] = '';
    }
  }
}