import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllApiResources } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.actions';
import { selectAllApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.selector';
import { deleteClient, getAllClients, getClient, getPermissions, saveClient, savePermissions, updateClient } from 'projects/libs/state-management/src/lib/state/clients/clients.actions';
import { selectAllClients, selectAllPermissions, selectClient } from 'projects/libs/state-management/src/lib/state/clients/clients.selector';
import { getAllIdentityResources } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.actions';
import { selectA } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';
import { RdsCompClientBasicsComponent } from 'projects/rds-components/src/app/rds-comp-client-basics/rds-comp-client-basics.component';
import { ResourceData } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.component';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clientId: any;
  actionId: string;
  title = 'client';
  viewCanvas: boolean = false;
  activePage: number = 0;
  offcanvasId: string = 'client_canvas';
  isEdit = false;
  dataTableActions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }];
  identityResourcesData: ResourceData[] = [];
  apiResourcesData: ResourceData[] = [];
  selectedResourceId: number;
  sourceList: any[] = [
    { id: 1, value: 'Identity Resources', some: 'Identity Resources' },
    { id: 2, value: 'Api Resources', some: 'Api Resources' }
  ];
  clientResourceData: any[] = [];
  permissionTreeData: any = [];
  emitPermissionsData = { name: undefined, permissions: { permissions: [] } };
  emitClientData = {
    id: '',
    name: '',
    data: {
      apiResources: [],
      clientId: '',
      clientName: '',
      clientUri: '',
      description: '',
      identityResources: [],
      logoUri: '',
      requireConsent: false,
      scopes: [],
      secrets: []
    },
    permissions: {
      permissions: []
    }
  };
  roleName: string;
  clientBasics = {};
  apiSecretsTableData: any;
  editIdentityResourceData: any[] = [];
  editApiResourceData: any[] = [];
  @ViewChild('clientBasicsComponent') clientBasicsComp: RdsCompClientBasicsComponent;

  clientTableHeaders: TableHeader[] = [
    { displayName: 'Client ID', key: 'clientId', dataType: 'text', filterable: true, sortable: true },
    { displayName: 'Name', key: 'clientName', dataType: 'text', filterable: true, sortable: true },
    { displayName: 'Description', key: 'description', dataType: 'text' }
  ];
  clientSecretTableHeaders: TableHeader[] = [
    { displayName: 'Type', key: 'type', dataType: 'text', filterable: true, sortable: true, required: true },
    { displayName: 'Value', key: 'value', dataType: 'number', filterable: true, sortable: true, required: true },
    { displayName: 'Expiration', key: 'expiration', dataType: 'text', filterable: true, sortable: true, required: true },
    { displayName: 'Description', key: 'description', dataType: 'text', required: true }
  ];
  clientList: any[] = [];
  canvasTitle: string = 'New Client';
  public navtabsItemsNew: any[] = [
    { label: 'Basics', tablink: '#basics', ariacontrols: 'basics' },
    { label: 'Secrets', tablink: '#secrets', ariacontrols: 'secrets' },
    { label: 'Resources', tablink: '#resources', ariacontrols: 'resources' },
    { label: 'Permissions', tablink: '#permissions', ariacontrols: 'permissions' },
  ];

  public navtabsItemsEdit: any[] = [
    { label: 'Basics', tablink: '#basics', ariacontrols: 'basics' },
    { label: 'Secrets', tablink: '#secrets', ariacontrols: 'secrets' },
    { label: 'Resources', tablink: '#resources', ariacontrols: 'resources' },
    { label: 'Permissions', tablink: '#permissions', ariacontrols: 'permissions' },
    { label: 'Advanced', tablink: '#advanced', ariacontrols: 'advanced' }
  ];
  clientAdvancedObj: any = {};
  updateClientData = {
    id: '',
    name: '',
    data: {
      clientName: '', description: '', clientUri: '', logoUri: '', enabled: false, requireConsent: false, allowOfflineAccess: false, allowRememberConsent: false, allowAccessTokensViaBrowser: false, requirePkce: false, requireClientSecret: false, requireRequestObject: false, accessTokenLifetime: 0,
      consentLifetime: 0, accessTokenType: 0, enableLocalLogin: false, frontChannelLogoutUri: '', frontChannelLogoutSessionRequired: false, backChannelLogoutUri: '', allowedIdentityTokenSigningAlgorithms: '', backChannelLogoutSessionRequired: false, includeJwtId: false, alwaysSendClientClaims: false,
      pairWiseSubjectSalt: '', userSsoLifetime: 0, userCodeType: '', deviceCodeLifetime: 0, clientSecrets: [], claims: [], properties: [], allowedGrantTypes: [], identityProviderRestrictions: [], scopes: [], allowedCorsOrigins: [], redirectUris: [], postLogoutRedirectUris: [], apiResources: [], identityResources: []
    },
    permissions: {
      permissions: []
    }
  };

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAllClientsFn();
    this.identityResourceApi();
    this.apiResourceApi();
    this.getPermissionApi();
  }

  tableActionSelection(event: any) {
    if (event.actionId == 'edit') {
      this.isEdit = true;
      this.actionId = event.actionId;
      this.openCanvas(event.actionId);
      this.getClientForEdit(event.selectedData.id)
      this.getPermissionApi(event.selectedData.clientId);
    }
    else if (event.actionId == 'delete') this.store.dispatch(deleteClient(event.selectedData.id));
  }

  identityResourceApi() {
    this.store.dispatch(getAllIdentityResources());
    this.store.select(selectA).subscribe(res => {
      if (res && res.items) {
        const data: any[] = [];
        res.items.forEach((element: any) => {
          const item: any = { displayName: element.displayName, left: false, id: element.id, name: element.name };
          data.push(item);
        });
        this.identityResourcesData = [...data];
      };
    });
  }

  apiResourceApi() {
    this.store.dispatch(getAllApiResources());
    this.store.select(selectAllApiResource).subscribe(res => {
      const data: any[] = [];
      if (res && res.items) {
        res.items.forEach((element: any) => {
          const item: any = { displayName: element.displayName, left: false, id: element.id, name: element.name };
          data.push(item);
        });
        this.apiResourcesData = [...data];
      }
    });
  }

  getPermissionApi(clientId?: string) {
    let permissionName: string;
    clientId == undefined ? permissionName = 'admin' : permissionName = clientId;
    this.store.dispatch(getPermissions(permissionName));
    this.store.select(selectAllPermissions).subscribe(res => {
      if (res && res.groups) {
        this.permissionTreeData = [...res.groups];
        this.roleName = res.entityDisplayName;
      }
    });
  }

  getAllClientsFn() {
    this.store.dispatch(getAllClients());
    this.store.select(selectAllClients).subscribe((res: any) => {
      if (res && res.items.length > 0) {
        this.clientList = res.items;
      };
    })
  }

  getClientForEdit(id: any) {
    this.store.dispatch(getClient(id));
    this.store.select(selectClient).subscribe(res => {
      if (res) {
        this.emitClientData.id = res.id;
        this.clientId = res.id;
        this.updateClientData.id = res.id;
        const callBack: any[] = [];
        if (res.redirectUris) {
          res.redirectUris.forEach((element: any) => {
            const callBackItem = { clientId: element.clientId, redirectUri: element.redirectUri };
            callBack.push(callBackItem);
          });
        };
        const signOut: any[] = [];
        if (res.postLogoutRedirectUris) {
          res.postLogoutRedirectUris.forEach((element: any) => {
            const signOutItem = { clientId: element.clientId, postLogoutRedirectUri: element.postLogoutRedirectUri };
            signOut.push(signOutItem);
          });
        };
        const corsOrigin: any[] = [];
        if (res.allowedCorsOrigins) {
          res.allowedCorsOrigins.forEach((element: any) => {
            const corsOriginItem = { clientId: element.clientId, origin: element.origin };
            corsOrigin.push(corsOriginItem);
          });
        }
        const secrets: any[] = [];
        if (res.clientSecrets) {
          res.clientSecrets.forEach((element: any) => {
            const secretsItem = {
              clientId: element.clientId,
              description: element.description,
              expiration: element.expiration,
              type: element.type,
              value: element.value,
            }
            secrets.push(secretsItem);
          });
        };
        const grantTypes: any[] = [];
        res.allowedGrantTypes.forEach(element => {
          const grantItem = {
            clientId: element.clientId,
            grantType: element.grantType
          }
          grantTypes.push(grantItem)
        });
        const cliams: any[] = [];
        res.claims.forEach(element => {
          const claimItem = {
            type: element.type,
            value: element.value
          }
          cliams.push(claimItem)
        });
        const identityProviderRestrictions: any[] = [];
        res.identityProviderRestrictions.forEach(element => {
          const item = {
            clientId: element.clientId,
            provider: element.provider
          }
          identityProviderRestrictions.push(item)
        });
        const properties: any[] = [];
        res.properties.forEach(element => {
          const item = {
            clientId: element.clientId,
            key: element.key,
            value: element.value,
          }
          properties.push(item)
        });
        const item = {
          absoluteRefreshTokenLifetime: res.absoluteRefreshTokenLifetime,
          accessTokenLifetime: res.accessTokenLifetime,
          accessTokenType: res.accessTokenType,
          allowAccessTokensViaBrowser: res.allowAccessTokensViaBrowser,
          allowPlainTextPkce: res.allowPlainTextPkce,
          allowedGrantTypes: grantTypes,
          allowedCorsOrigins: corsOrigin,
          allowOfflineAccess: res.allowOfflineAccess,
          allowRememberConsent: res.allowRememberConsent,
          allowedIdentityTokenSigningAlgorithms: res.allowedIdentityTokenSigningAlgorithms,
          allowedScopes: res.allowedScopes,
          alwaysIncludeUserClaimsInIdToken: res.alwaysIncludeUserClaimsInIdToken,
          alwaysSendClientClaims: res.alwaysSendClientClaims,
          authorizationCodeLifetime: res.authorizationCodeLifetime,
          backChannelLogoutUri: res.backChannelLogoutUri,
          backChannelLogoutSessionRequired: res.backChannelLogoutSessionRequired,
          claims: cliams,
          clientClaimsPrefix: res.clientClaimsPrefix,
          clientId: res.clientId,
          clientName: res.clientName,
          clientUri: res.clientUri,
          callBackUrl: res.callBackUrl,
          clientSecrets: secrets,
          consentLifetime: res.consentLifetime,
          description: res.description,
          deviceCodeLifetime: res.deviceCodeLifetime,
          enableLocalLogin: res.enableLocalLogin,
          enabled: res.enabled,
          frontChannelLogoutSessionRequired: res.frontChannelLogoutSessionRequired,
          frontChannelLogoutUri: res.frontChannelLogoutUri,
          id: res.id,
          identityProviderRestrictions: identityProviderRestrictions,
          identityTokenLifetime: res.identityTokenLifetime,
          includeJwtId: res.includeJwtId,
          logoUri: res.logoUri,
          pairWiseSubjectSalt: res.pairWiseSubjectSalt,
          postLogoutRedirectUris: signOut,
          properties: properties,
          protocolType: res.protocolType,
          redirectUris: callBack,
          refreshTokenExpiration: res.refreshTokenExpiration,
          refreshTokenUsage: res.refreshTokenUsage,
          requireClientSecret: res.requireClientSecret,
          requireConsent: res.requireConsent,
          requirePkce: res.requirePkce,
          requireRequestObject: res.requireRequestObject,
          slidingRefreshTokenLifetime: res.slidingRefreshTokenLifetime,
          updateAccessTokenClaimsOnRefresh: res.updateAccessTokenClaimsOnRefresh,
          userCodeType: res.userCodeType,
          userSsoLifetime: res.userSsoLifetime
        };
        this.clientBasics = item;
        this.isEdit = true;
        this.clientId = item.id;
        this.apiSecretsTableData = secrets;
        this.clientAdvancedObj = item;
        item.allowedScopes.forEach((editEle: any) => {
          const identity = this.identityResourcesData.find(x => x.name == editEle.scope);
          if (identity != undefined) this.identityResourcesData.find(x => x.name == editEle.scope).left = true;
          const api = this.apiResourcesData.find(x => x.name == editEle.scope);
          if (api != undefined) this.apiResourcesData.find(x => x.name == editEle.scope).left = true;
        });
      }
    });
  }

  clientBasicInfo(event: any) {
    if (this.actionId == 'edit') {
      this.updateClientData.data.clientName = event.clientName;
      this.updateClientData.data.description = event.description;
      this.updateClientData.data.clientUri = event.clientUri;
      this.updateClientData.data.logoUri = event.logoUri;
      this.updateClientData.data.allowedCorsOrigins = event.allowedCorsOrigins.map(x => x.origin);
      this.updateClientData.data.redirectUris = event.redirectUris.map(x => x.redirectUri);
      this.updateClientData.data.postLogoutRedirectUris = event.postLogoutRedirectUris.map(x => x.postLogoutRedirectUri);;
      this.updateClientData.data.requireConsent = event.requireConsent;
      this.updateClientData.data.requireRequestObject = event.requireRequestObject;
      this.updateClientData.data.allowRememberConsent = event.allowRememberConsent;
      this.updateClientData.data.enabled = event.enabled;
      this.updateClientData.data.allowOfflineAccess = event.allowOfflineAccess;
      this.updateClientData.data.frontChannelLogoutUri = event.frontChannelLogoutUri;
      this.updateClientData.data.backChannelLogoutUri = event.backChannelLogoutUri;
      this.updateClientData.data.backChannelLogoutSessionRequired = event.backChannelLogoutSessionRequired;
      this.updateClientData.data.allowedIdentityTokenSigningAlgorithms = event.allowedIdentityTokenSigningAlgorithms;
    } else this.emitClientData.data = { ...event };

  }

  selectedPermissions(data: any) {
    this.emitClientData.permissions.permissions = [];
    this.updateClientData.permissions.permissions = [];
    this.emitClientData.permissions.permissions = data;
    this.updateClientData.permissions.permissions = data;
  }

  selectedResourceOption(option: any) {
    option.item.id == 1 ? this.clientResourceData = this.identityResourcesData : this.clientResourceData = this.apiResourcesData;
    this.selectedResourceId = option.item.id;
  }

  selectedResourceData(data: any) {
    if (this.selectedResourceId == 1) {
      const identityArray: any[] = [];
      data.forEach((element: any) => {
        const identity = {
          displayName: element.displayName,
          name: element.name,
          left: element.left
        }
        identityArray.push(identity);
      });
      this.emitClientData.data.identityResources = identityArray;
      this.updateClientData.data.identityResources = identityArray;
    } else {
      const apiArray: any[] = [];
      data.forEach((element: any) => {
        const api = {
          displayName: element.displayName,
          name: element.name,
          left: element.left
        }
        apiArray.push(api);
      });
      this.emitClientData.data.apiResources = apiArray;
      this.updateClientData.data.apiResources = apiArray;
    }
    if (this.emitClientData.data.identityResources != undefined && this.emitClientData.data.apiResources != undefined) {
      this.emitClientData.data.scopes = [...this.emitClientData.data.identityResources.map(x => x.name)]
        .concat(this.emitClientData.data.apiResources.map(x => x.name));
      this.updateClientData.data.scopes = this.emitClientData.data.scopes;
    }
  }

  secretData(data: any) {
    this.actionId == 'edit' ? this.updateClientData.data.clientSecrets = [...data] : this.emitClientData.data.secrets = [...data];
  }

  getAdvancedData(event: any) {
    if (event.accessTokenLifetime != null) {
      this.updateClientData.data.accessTokenLifetime = event.accessTokenLifetime;
      this.updateClientData.data.accessTokenType = event.accessTokenType;
      this.updateClientData.data.allowedGrantTypes = event.allowedGrantTypes.map((x: any) => x.grantType);
      this.updateClientData.data.claims = event.claims;
      this.updateClientData.data.consentLifetime = event.consentLifetime;
      this.updateClientData.data.deviceCodeLifetime = event.deviceCodeLifetime;
      this.updateClientData.data.enableLocalLogin = event.enableLocalLogin;
      this.updateClientData.data.identityProviderRestrictions = event.identityProviderRestrictions.map((x: any) => x.provider);
      this.updateClientData.data.pairWiseSubjectSalt = event.pairWiseSubjectSalt;
      this.updateClientData.data.properties = event.properties;
      this.updateClientData.data.requireClientSecret = event.requireClientSecret;
      this.updateClientData.data.requirePkce = event.requirePkce;
      this.updateClientData.data.userCodeType = event.userCodeType;
      this.updateClientData.data.userSsoLifetime = event.userSsoLifetime;
    }
  }

  openCanvas(type: string, event?: any): void {
    if (event && type == 'new') {
      this.actionId = type;
      event.stopPropagation();
      this.canvasTitle = 'New Client';
    } else if (type == 'edit') {
      this.actionId = type;
      this.canvasTitle = 'Edit Client';
    }
    this.activePage = 0;
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
  };

  save() {
    const emitClientId = this.clientList.find(x => x.clientId == this.emitClientData.data.clientId);
    const emitClientName = this.clientList.find(x => x.clientName == this.emitClientData.data.clientName);
    const updatetClientName = this.clientList.find(x => x.clientName == this.updateClientData.data.clientName);
    emitClientId != undefined ? this.clientBasicsComp.checkClientId = true : this.clientBasicsComp.checkClientId = false;
    emitClientName != undefined ? this.clientBasicsComp.checkClientName = true : this.clientBasicsComp.checkClientName = false;
    updatetClientName != undefined ? this.clientBasicsComp.checkClientName = true : this.clientBasicsComp.checkClientName = false;
    if (emitClientId == undefined && emitClientName == undefined && this.actionId == 'new' &&
      this.emitClientData.data.clientId != '' && this.emitClientData.data.clientName != '') {
      this.clientBasicsComp.checkClientId = false;
      this.clientBasicsComp.checkClientName = false;
      this.emitClientData.name = this.emitClientData.data.clientId;
      this.emitClientData.data.apiResources == undefined ? this.emitClientData.data.apiResources = [] : null;
      this.emitClientData.data.identityResources == undefined ? this.emitClientData.data.identityResources = [] : null;
      this.emitClientData.data.secrets == undefined ? this.emitClientData.data.secrets = [] : null;
      this.emitClientData.data.scopes == undefined ? this.emitClientData.data.scopes = [] : null;
      this.store.dispatch(saveClient(this.emitClientData));
      this.close();
      this.getAllClientsFn();
    }
    else if (updatetClientName == undefined && this.actionId == 'edit' && this.updateClientData.data.clientName != '') {
      this.updateClientData.name = this.updateClientData.data.clientName;
      this.store.dispatch(updateClient(this.updateClientData));
      this.close();
      this.getAllClientsFn();
    }
  }

  close(): void {
    this.emitClientData = { id: '', name: '', data: { apiResources: [], clientId: '', clientName: '', clientUri: '', description: '', identityResources: [], logoUri: '', requireConsent: false, scopes: [], secrets: [] }, permissions: { permissions: [] } };
    this.updateClientData = {
      id: '',
      name: '',
      data: {
        clientName: '', description: '', clientUri: '', logoUri: '', enabled: false, requireConsent: false, allowOfflineAccess: false, allowRememberConsent: false, allowAccessTokensViaBrowser: false, requirePkce: false, requireClientSecret: false, requireRequestObject: false, accessTokenLifetime: 0,
        consentLifetime: 0, accessTokenType: 0, enableLocalLogin: false, frontChannelLogoutUri: '', frontChannelLogoutSessionRequired: false, backChannelLogoutUri: '', allowedIdentityTokenSigningAlgorithms: '', backChannelLogoutSessionRequired: false, includeJwtId: false, alwaysSendClientClaims: false,
        pairWiseSubjectSalt: '', userSsoLifetime: 0, userCodeType: '', deviceCodeLifetime: 0, clientSecrets: [], claims: [], properties: [], allowedGrantTypes: [], identityProviderRestrictions: [], scopes: [], allowedCorsOrigins: [], redirectUris: [], postLogoutRedirectUris: [], apiResources: [], identityResources: []
      },
      permissions: {
        permissions: []
      }
    };
    this.clientId = '';
    this.clientAdvancedObj = {};
    this.clientBasics = {};
    this.apiSecretsTableData = [];
    this.identityResourcesData.forEach(ele => ele.left = false);
    this.apiResourcesData.forEach(ele => ele.left = false);
    this.clientResourceData = [];
    this.editApiResourceData = [];
    this.editIdentityResourceData = [];
    this.isEdit = false;
    this.selectedResourceId = 0;
    this.roleName = 'admin';
    this.actionId = '';
    var offcanvas = document.getElementById(this.offcanvasId);
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.activePage = 0;
  }


  saveDisabled() {
    if (this.actionId == 'new' && this.emitClientData.data.clientId != '' && this.emitClientData.data.clientName != '') return false;
    else if (this.actionId == 'edit' && this.updateClientData.data.clientName != '') return false;
    else return true;
  }

}
