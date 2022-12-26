import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService, UserAuthService } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  state,
} from '@angular/animations';
import { el } from 'date-fns/locale';
import { data } from 'autoprefixer';

import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { deleteTenant, getEditionComboboxItems, getTenantFeaturesForEdit, getTenantForEdit, getTenantLogin, getTenants, getTenantUsers, saveTenant, updateTenant, updateTenantFeatureValues } from 'projects/libs/state-management/src/lib/state/tenant/tenant.actions';
import { selectAllTenants, selectEditionComboboxItems, selecteTeantLoginList, selecteTeantUserList, selectTenantFeature, selectTenantInfo } from 'projects/libs/state-management/src/lib/state/tenant/tenant.selector';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
declare let bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    DatePipe
  ],
  animations: [
    trigger('fadeAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AppComponent implements OnInit{

  title = 'tenant';
  tenantSettingsInfo: any = {};
  tenantData: any = {};
  userTableActions: TableAction[] = [
    { id: 'loginIn', displayName: this.translate.instant('Login') },
  ];
  selectedFeatureList: any = [];
  selectedId: any = '';
  viewCanvas: boolean = false;
  listItems = [
    {
      value: 'New Tenant',
      some: 'value',
      key: 'new',
      icon: 'plus',
      iconWidth: '20px',
      iconHeight: '20px',
    },
  ];
  canvasTitle: string = '';
  showEditData: boolean = false;
  actions: TableAction[] = [
    {
      id: 'loginAsTenant',
      displayName: this.translate.instant('Login as Tenant'),
    },
    { id: 'edit', displayName: this.translate.instant('Edit') },
    { id: 'delete', displayName: this.translate.instant('Delete') },
  ];
  viewLoginAsTenantCanvas: boolean = false;
  public tenant: any = {
    tenantInfo: undefined,
    tenantSettings: undefined,
    featureList: [],
  };
  isTenantInfoValid: boolean = false;
  showLoadingSpinner: boolean = false;
  public navtabsItems: any = [];
  activePage: number = 0;
  newTenantLabel:string = '';
  tenantHeadersUser: TableHeader[] = [];
  editionList: any = [];
  tenantFeatures: any = [];
  tenantFeatureValues: any = [];
  tenantTableHeader: TableHeader[] = [
    { displayName: 'Tenant', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true, colWidth: '20%' },
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true, colWidth: '20%' },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true, colWidth: '20%' },
    { displayName: 'Subscription End Date', key: 'subscriptionEndDateUtc', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true, colWidth: '20%' },
  ]
  userTableHeader: TableHeader[] = [
    { displayName: 'Name', key: 'name', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
  ]
  isAnimation: boolean = true;
  tenantTableData: any = [];

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.deleteEvent(event.selectedData);
    } 
    else if (event.actionId === 'edit') {
      this.selectedId = event.selectedData.id;
      this.canvasTitle = this.translate.instant('Edit Tenant');
      this.store.dispatch(getTenantForEdit(event.selectedData.id));
      this.store.dispatch(getTenantFeaturesForEdit(event.selectedData.id))
      this.newTenant(false);
    } else if (event.actionId === 'loginAsTenant') {
      this.tenantId = event.selectedData.id;
      this.loginAsTenant(event);
    }
  }
  
  loginAsTenant(event): void {
    this.viewLoginAsTenantCanvas = true;
    const data: any = {
      tenantId: event.selectedData.id,
      excludeCurrentUser: true,
      maxResultCount: 1000,
      skipCount: 0,
      filter: '',
    };
    this.onSelectTenant(data);
    this.canvasTitle = 'Select a User';
    setTimeout(() => {
      var offcanvas = document.getElementById('loginAsTenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.newTenant(event);
    }
  }

  close(): void {
    this.viewCanvas = false;
    this.tenant = {
      tenantInfo: undefined,
      tenantSettings: undefined,
      featureList: [],
    };
    this.tenantData = undefined;
    this.tenantSettingsInfo = undefined;
    this.showLoadingSpinner = false;
  }

  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }
  
  getTenantData(event: any): void {
    if (event.next) {
      this.activePage = 1;
    }
    this.tenant.tenantInfo = event.tenant;
    if (!event || !event.tenant) {
      this.isTenantInfoValid = false;
    } else {
      this.isTenantInfoValid = true;
    }
  }
  getTenantSettings(event: any): void {
    this.tenant.tenantSettings = event.settings;
    if (event.next) {
      this.onSaveTenant(this.tenant);
      this.activePage = 0;
      var offcanvas = document.getElementById('tenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.hide();
      this.viewCanvas = false;
    }
  }

  getSelectedFeaturesList(event: any): void {
    this.selectedFeatureList = event;
  }

  save(): void {
    this.showLoadingSpinner =false;
    if (!this.selectedFeatureList || this.selectedFeatureList.length === 0) {
      return;
    }
    const data = {
      id: this.selectedId,
      featureValues: this.selectedFeatureList,
    };
    
    this.onSaveFeatures(data);
    this.activePage = 0;
    var offcanvas = document.getElementById('tenantOffcanvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  loginTenant(event): void {
    const data: any = {
      tenantId: this.tenantId,
      userId: event.selectedData.id,
    };
    this.onTenantLogIn(data);
    this.viewLoginAsTenantCanvas = false;
    console.log(data);
  }

  closeLoginAsTenant(): void {
    this.viewLoginAsTenantCanvas = false;
  }
  onUserDataActionSelect(event: any): void {
    if (event.actionId === 'loginIn') {
      this.loginTenant(event);
    }
  }

  userTableData: any = [];
  tenantId: any;
  isShimmer: boolean = true;
  editShimmer: boolean = true;

  constructor(
    public datepipe: DatePipe,
    private userAuthService: UserAuthService,
    private store: Store, 
    public translate: TranslateService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService){
      this.newTenantLabel = this.translate.instant('New Tenant')
  }
  
newTenant(isNewTeanant?: boolean): void {
    this.viewCanvas = true;
    this.showEditData = isNewTeanant ? true : false;
    this.editShimmer = false;
    if (isNewTeanant) {
      this.viewCanvas = true;
      this.showLoadingSpinner = true;
      this.selectedId = '';
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;
      //this.onReset(eventdata);
      this.isTenantInfoValid = false;
      this.canvasTitle = this.translate.instant('New Tenant');
      this.navtabsItems = [
        {
          label: this.translate.instant('Tenant Information'),
          tablink: '#tenant-information',
          ariacontrols: 'tenant-information',
        },
        {
          label: this.translate.instant('Settings'),
          tablink: '#settings',
          ariacontrols: 'settings',
        },
      ];

    }
    else {
      this.navtabsItems = [
        {
          label: this.translate.instant('Tenant Information'),
          tablink: '#tenant-information',
          ariacontrols: 'tenant-information',
        },
        {
          label: this.translate.instant('Settings'),
          tablink: '#settings',
          ariacontrols: 'settings',
        },
        {
          label: this.translate.instant('Features'),
          tablink: '#features',
          ariacontrols: 'features',
        },
      ];
    }

    setTimeout(() => {
      var offcanvas = document.getElementById('tenantOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
    this.activePage = 0;
}


  
  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    });
    this.store.dispatch(getEditionComboboxItems())
    this.store.select(selectEditionComboboxItems).subscribe((res: any) => {
      if (res) {
        this.editionList = []
        res.forEach(element => {
          const data = {
            value: element.value,
            some: element.displayText,
            isSelected: element.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
            isFree: element.isFree
          }
          this.editionList.push(data);
        });
      }
    })

    //this.store.dispatch(getProfilepic());
    this.store.select(selecteTeantLoginList).subscribe((res: any) => {
      if (res) {
        let url = window.location.href;
        url = url.substring(0, url.indexOf("/pages"));
        let targetUrl = url + '/login' + '?impersonationToken=' + res.impersonationToken + '&tenantId=' + this.tenantId + '&tenancyName=' + res.tenancyName;
        // let targetUrl = 'https://anzstageui.raaghu.io/login' + '?impersonationToken=' + res.impersonationToken + '&tenantId=' + this.loginList + '&tenancyName=' + res.tenancyName;
        this.userAuthService.unauthenticateUser(true, targetUrl);
      }
    })

    this.store.select(selecteTeantUserList).subscribe((res: any) => {
      this.userTableData = [];
      if (res && res.items) {
        res.items.forEach((element: any) => {
          const item: any = {
            name: element.name,
            id: element.value
          }
          this.userTableData.push(item);
        });
      }
    })

    this.store.dispatch(getTenants());
    this.store.select(selectAllTenants).subscribe((res: any) => {
      this.tenantTableData = [];
      if (res) {
        this.isShimmer = false;
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          const status: string = (element.isActive) ? 'Active' : 'Inactive';
          // const statusTemplate = `<div class="status ${status}">${status}</div>`;
          let statusTemplate;
          if (element.isActive) {
            statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }
          const editionTemplate = `<div class="d-flex align-items-center"><div class="edition ${element.editionDisplayName}"></div><div class="">${element.editionDisplayName}</div></div>`;
          const tenantInfoTemplate = `<div class=""><div><div><span>${element.name}</span></div><span class="text-muted">${element.tenancyName} </span></div></div>`;
          let subscriptionDate = '';
          if (element.subscriptionEndDateUtc) {
            subscriptionDate = this.datepipe.transform(new Date(element.subscriptionEndDateUtc), 'MM/dd/yyyy, h:mm:ss a');
          } else {
            subscriptionDate = '';
          } 
          const item: any = {
            tenantInfoTemplate: tenantInfoTemplate,
            statusTemplate: statusTemplate,
            subscriptionEndDateUtc: (element.subscriptionEndDateUtc && element.subscriptionEndDateUtc !== null && element.subscriptionEndDateUtc.ts) ? this.datepipe.transform((new Date(element.subscriptionEndDateUtc.ts)), 'MM/dd/yyyy') : '--',
            editionDisplayName: element.editionDisplayName,
            editionTemplate: (element.editionDisplayName && element.editionDisplayName !== null) ? editionTemplate : '--',
            id: element.id,
            name: element.tenancyName,
            // creationTime: this.datepipe.transform(new Date(element.creationTime),'dd-MM-yyyy h:mm:ss a')
          }
          this.tenantTableData.push(item);
        });
        
      }
    });

    this.store.select(selectTenantInfo).subscribe((res: any) => {
      debugger
      if (res) {
        this.tenantSettingsInfo = {};
        this.tenantData = {};
        this.tenantSettingsInfo['connectionString'] = res.connectionString;
        this.tenantSettingsInfo['isActive'] = res.isActive;
        this.tenantSettingsInfo['isInTrialPeriod'] = res.isInTrialPeriod;
        this.tenantData['tenancyName'] = res.tenancyName;
        this.tenantData['tenantName'] = res.name;
        this.tenantData['adminEmailAddress'] = res.adminEmailAddress;
        this.tenantData['edition'] = (res.editionId && res.editionId !== null) ? res.editionId.toString() : res.editionId;
        this.tenantData['unlimitedSubscription'] = (res.subscriptionEndDateUtc !== null && res.subscriptionEndDateUtc) ? false : true;
        this.tenantData['id'] = res.id;
        this.tenantData['subscriptionEndDate'] = (res.subscriptionEndDateUtc) ? new Date(res.subscriptionEndDateUtc) : null;
        this.editShimmer = false
      }
    });
    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res) {
        this.tenantFeatureValues = res.featureValues;
        this.tenantFeatures = this.convertArraytoTreedata(res.features);
      }
    })
  }

  onSaveTenant(tenant: any) {
    this.showLoadingSpinner = false;
    if (tenant && tenant.tenantInfo) {
      if (tenant.tenantInfo.id) {
        const data: any = {
          tenancyName: tenant.tenantInfo.tenancyName,
          name: tenant.tenantInfo.tenantName,
          connectionString: tenant.tenantSettings.connectionString,
          editionId: +tenant.tenantInfo.edition,
          isActive: tenant.tenantSettings.isActive,
          subscriptionEndDateUtc: (tenant.tenantInfo.unlimitedSubscription || !tenant.tenantInfo.subscriptionEndDate || tenant.tenantInfo.subscriptionEndDate == null) ? null : new Date(tenant.tenantInfo.subscriptionEndDate).toISOString(),
          isInTrialPeriod: false,
          id: tenant.tenantInfo.id
        };
        this.store.dispatch(updateTenant(data))

      } else {
        const data: any = {
          tenancyName: tenant.tenantInfo.tenancyName,
          name: tenant.tenantInfo.tenantName,
          adminEmailAddress: tenant.tenantInfo.adminEmailAddress,
          adminPassword: tenant.tenantSettings.password,
          connectionString: tenant.tenantSettings.connectionString,
          shouldChangePasswordOnNextLogin: tenant.tenantSettings.changePasswordOnNextLogin,
          sendActivationEmail: tenant.tenantSettings.sendActivationEmail,
          editionId: +tenant.tenantInfo.edition,
          isActive: tenant.tenantSettings.isActive,
          subscriptionEndDateUtc: (tenant.tenantInfo.unlimitedSubscription || !tenant.tenantInfo.subscriptionEndDate || tenant.tenantInfo.subscriptionEndDate == null) ? null : new Date(tenant.tenantInfo.subscriptionEndDate).toISOString(),
          isInTrialPeriod: false
        };
        this.store.dispatch(saveTenant(data))

      }

    }

  }
  
  deleteEvent(event: any) {
    this.store.dispatch(deleteTenant(event.id, 30))
  }

  onSaveFeatures(feature: any) {
    this.store.dispatch(updateTenantFeatureValues(feature))
  }

  onSelectTenant(event: any) {
    this.store.dispatch(getTenantUsers(event));
  }

  onTenantLogIn(event: any) {
    this.tenantId = event.tenantId;
    const data: any = {
      tenantId: this.tenantId,
      userId: event.userId
    };
    this.store.dispatch(getTenantLogin(data));
  }

  convertArraytoTreedata(data: any) {
    const treedaTA = this._arrayToTreeConverterService.createTree(
      data,
      'parentName',
      'name',
      null,
      'children',
      [
        {
          target: 'label',
          source: 'displayName',
        },
        {
          target: 'expandedIcon',
          value: 'fa fa-folder-open text-warning',
        },
        {
          target: 'collapsedIcon',
          value: 'fa fa-folder text-warning',
        },
        {
          target: 'expanded',
          value: true,
        },
      ],
      1
    );
    return treedaTA;
  }



}
