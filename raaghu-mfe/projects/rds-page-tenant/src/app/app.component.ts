import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ArrayToTreeConverterService,
  ComponentLoaderOptions,
} from '@libs/shared';
import {} from '@libs/state-management';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { fadeAnimation } from '../../../libs/shared/src/lib/animation';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  state,
} from '@angular/animations';
import {
  selectAllTenants,
  selectEditionComboboxItems,
  selectTenantFeature,
  selectTenantInfo,
} from 'projects/libs/state-management/src/lib/state/tenant/tenant.selector';
import {
  deleteTenant,
  getEditionComboboxItems,
  getTenantFeaturesForEdit,
  getTenantForEdit,
  getTenants,
  saveTenant,
  updateTenant,
  updateTenantFeatureValues,
} from 'projects/libs/state-management/src/lib/state/tenant/tenant.actions';
import { DateTime } from 'luxon';
import { parseDate } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
  animations: [
    trigger('fadeAnimation', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),

      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class AppComponent {
  title = 'tenant';
  tenantData: any = {};
  tenantId = undefined;
  editionList: any = [];
  newTenantFeature: any = [];
  tenantFeatureValues: any;
  tenantTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'tenantInfoTemplate',
      dataType: 'html',
      dataLength: 30,
      sortable: true,
      required: true,
      filterable: true,
    },
    {
      displayName: 'Role',
      key: 'roleTemplate',
      dataType: 'html',
      dataLength: 30,
      sortable: true,
      required: true,
      filterable: true,
    },
    {
      displayName: 'Edition',
      key: 'editionTemplate',
      dataType: 'html',
      dataLength: 30,
      sortable: true,
      required: true,
      filterable: true,
    },
    {
      displayName: 'Status',
      key: 'statusTemplate',
      dataType: 'html',
      dataLength: 30,
      sortable: true,
      required: true,
      filterable: true,
    },
  ];
  isAnimation: boolean = true;
  featuresData: any = {};
  featuresHostData: any = {};

  // featureData : any = [];
  tenantTableData: any = [];
  isShimmer: boolean = true;
  editShimmer: boolean = false;
  isSaved: boolean = false;
  selectId: any;
  newTenantName: string = '';
  TwoFactorList = [
    { value: 'optional', some: 'Optinal' },
    { value: 'disabled', some: 'Disabled' },
    { value: 'forced', some: 'Forced' },
  ];

  constructor(
    public datepipe: DatePipe,
    private store: Store,
    private translate: TranslateService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService
  ) {}

  onSaveTenant(tenant?: any) {
    if (tenant?.id) {
      this.tenantId = tenant.id;
      const data: any = {
        name: tenant.tenantInfo.name,
        editionId: tenant.tenantInfo.targetId,
        activationState: tenant.tenantInfo.targetActiveId,
        activationEndDate : tenant.tenantInfo.activationEndDate
      };
      let body = { body: data, id: this.tenantId };
      this.store.dispatch(updateTenant(body));
      const convertFearures = [];
      tenant.featureValues.forEach((ele) => {
        const _data: any = {
          name: ele.name,
          value: ele.value.toString(),
        };
        convertFearures.push(_data);
      });
      const _data: any = {
        id: tenant?.id,
        body: {
          features: convertFearures,
        },
      };
      this.store.dispatch(updateTenantFeatureValues(_data));
    } else {
      if (!this.isSaved) {
        const data: any = {
          name: tenant.tenantInfo.name,
          adminEmailAddress: tenant.tenantInfo.adminEmailAddress,
          adminPassword: tenant.tenantInfo.adminPassword,
          editionId: tenant.tenantInfo.targetId,
          activationState: tenant.tenantInfo.targetActiveId,
          activationEndDate : tenant.tenantInfo.activationEndDate.toISOString()
        };
        this.newTenantName = tenant.tenantInfo.name;
        this.newTenantFeature = tenant.featureValues;
        this.store.dispatch(saveTenant(data, 30));
        this.isSaved = true;
      } else {
        if (this.isSaved) {
          this.isSaved = false;
          this.tenantTableData.forEach((ele) => {
            if (ele.name == this.newTenantName) {
              this.selectId = ele.id;
            }
          });
          const convertFearures = [];
          this.newTenantFeature.forEach((ele) => {
            const _data: any = {
              name: ele.name,
              value: ele.value.toString(),
            };
            convertFearures.push(_data);
          });
          const _data: any = {
            id: this.selectId,
            body: {
              features: convertFearures,
            },
          };
          this.store.dispatch(updateTenantFeatureValues(_data));
          this.newTenantFeature = undefined;
        }
      }
    }
  }

  getHostFeatureEmitter() {
    this.store.dispatch(getTenantFeaturesForEdit(undefined));
  }

  onEditTenant(selectedTenant: any) {
    this.store.dispatch(getTenantForEdit(selectedTenant));
    this.store.dispatch(getTenantFeaturesForEdit(selectedTenant));
  }

  deleteEvent(event: any) {
    this.store.dispatch(deleteTenant(event.id));
  }
  onSaveTenantHost(featureHost: any) {
    const convertFearures = [];
    featureHost.forEach((ele) => {
      const _data: any = {
        name: ele.name,
        value: ele.value.toString(),
      };
      convertFearures.push(_data);
    });
    const _data: any = {
      body: {
        features: convertFearures,
      },
    };
    this.store.dispatch(updateTenantFeatureValues(_data));
  }

  ngOnInit(): void {
    this.isAnimation = true;
    this.store.dispatch(getTenants());
    this.store.select(selectAllTenants).subscribe((res: any) => {
      this.tenantTableData = [];
      if (res && res.items) {
        this.isShimmer = false;
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          let statusTemplate;
          statusTemplate = element.activationState == 0 ? '<div> <span class="badge badge-success">Active</span></div>' 
          : element.activationState == 1 ? `<div> <span class="badge badge-primary">Active with limited time ${element.activationEndDate}</span></div>` 
          : '<div><span class="badge badge-secondary">Passive</span></div>' 

          const tenantInfoTemplate = `<div class=""><div><div><span>${element.name}</span></div><span class="text-muted">${element.adminEmailAddress}</span></div></div>`;
          const item: any = {
            tenantInfoTemplate: tenantInfoTemplate,
            statusTemplate: statusTemplate,
            roleTemplate: 'Admin',
            editionTemplate: element.editionName,
            id: element.id,
            name: element.name,
            adminEmailAddress: element.adminEmailAddress,
          };
          this.tenantTableData.push(item);
        });
      }
      this.onSaveTenant();
    });

    this.store.select(selectTenantInfo).subscribe((res: any) => {
      if (res) {
        this.tenantData = {};
        this.tenantData['name'] = res.name;
        this.tenantData['adminEmailAddress'] = res.adminEmailAddress;
        this.tenantData['editionId'] = res.editionName;
        this.tenantData['activationEndDate']=new Date(res.activationEndDate);
        this.tenantData['adminPassword'] = res.adminPassword;
        this.tenantData['targetActiveId'] = res.activationState;
        this.tenantData['id'] = res.id;
        this.editShimmer = false;
      }
    });

    this.store.dispatch(getEditionComboboxItems());
    this.store.select(selectEditionComboboxItems).subscribe((res: any) => {
      if (res) {
        this.editionList = [];
        res.items.forEach((element: any) => {
          const item: any = {
            value: element.id,
            some: element.displayName,
          };
          this.editionList.push(item);
        });
      }
    });
    this.store.dispatch(getTenantFeaturesForEdit('standard'));
    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res && res.groups) {
        this.newTenantFeature = [];
        this.featuresData = res.groups;
      }
    });

    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res && res.groups) {
        this.featuresHostData = res.groups;
      }
    });
  }
}
