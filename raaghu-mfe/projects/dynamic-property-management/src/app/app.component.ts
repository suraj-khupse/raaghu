import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertService, AppSessionService, ComponentLoaderOptions, SharedService } from '@libs/shared';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { transition, trigger, query, style, animate, } from '@angular/animations';

import {
  getDynamicEntity,
  getDynamicProperty,
  deleteDynamicProperty,
  deleteDynamicEntity,
  saveDynamicProperty,
  saveDynamicEntity,
  editDynamicEntity,
  getAllEntities,
  getInputTypeNames,
  getDynamicPropertyByEdit,
  UpdateDynamicProperty,
  getPermission,
} from 'projects/libs/state-management/src/lib/state/dynamic-property-management/dynamic-property.actions';
import {
  selectAllDynamicEntities,
  selectAllDynamicProperties,
  selectAllPermissions,
  selectDynamicEntities,
  selectDynamicEntity,
  selectDynamicProperty,
  selectDynamicPropertyForEdit,
  selectInputPropertyNameEntities,
} from 'projects/libs/state-management/src/lib/state/dynamic-property-management/dynamic-property.selector';

declare let bootstrap: any;
export class TreeNode {
  constructor(
    public ItemCode: string,
    public ItemDescription: string,
    public level: number,
    public children: TreeNode[] = [],
    public Data: any,
    public selected: boolean = false
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('1s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts,
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      },
    },
  };
  @Input()
  entityList: any[] = [];
  @Input()
  @Input() listItems1 = [
    { value: 'New Dynamic Properties', some: 'value', key: 'newdynamicproperties', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  parameterList: any[] = [];
  @Input() dynamicPropertyTableData: any = [];
  @Input() dynamicEntityPropertyTableData: any = [];
  color: string = '#8d9ba9';
  backgroundColor: string = '#abdbe3';
  selectedTabIndex = 0;
  entityNames: any = [];
  InputName: any = '';
  selectedPermission: any;
  selectedDynamicPermission: any = [];
  rdsDynamicPropertiesMfeConfig: ComponentLoaderOptions;
  rdsDynamicPermissionMfeConfig: ComponentLoaderOptions;
  rdsDynamicEntityPropertiesMfeConfig: ComponentLoaderOptions;
  permissionsList: any;
  btnLabel: string = 'NEW DYNAMIC PROPERTY';
  public viewCanvas: boolean = false;
  canvasTitle: string = this.translate.instant('NEW DYNAMIC PROPERTY');
  id: number | undefined = undefined;
  DynamicEntityProperties: any = {
    DynamicEntityPropertiesTableHeader: [
      {
        displayName: this.translate.instant('Entity Full Name'),
        key: 'entityFullName',
        dataType: 'text',
        dataLength: 30,
        required: true,
        sortable: true,
      },
      {
        displayName: this.translate.instant('Dynamic Property'),
        key: 'dynamicProperty',
        dataType: 'text',
        dataLength: 30,
        required: true,
        sortable: true,
      },
    ],

    DynamicEntityPropertiesTableData: [],
  };
  inputTypeList: any[] = [];
  navtabsItems: any = [
    {
      label: this.translate.instant('Dynamic Properties'),
      tablink: '#dynamic-properties',
      ariacontrols: 'dynamic-properties',
    },
    {
      label: this.translate.instant('Dynamic Entity Properties'),
      tablink: '#dynamic-entity-properties',
      ariacontrols: 'dynamic-entity-properties',
    },
  ];


  DynamicPropertiesModal: any = [
    {
      label: this.translate.instant('Information'),
      tablink: '#information',
      ariacontrols: 'information',
    },
    {
      label: this.translate.instant('Permission'),
      tablink: '#permission',
      ariacontrols: 'permission',
    },
  ];

  DynamicProperties: any = {
    DynamicPropertiesTableHeader: [
      {
        displayName: this.translate.instant('Property Name'),
        key: 'propertyName',
        dataType: 'text',
        dataLength: 30,
        required: true,
        sortable: true,
      },
      {
        displayName: this.translate.instant('Display Name'),
        key: 'displayName',
        dataType: 'text',
        dataLength: 30,
        required: true,
        sortable: true,
      },
      {
        displayName: this.translate.instant('Input Type'),
        key: 'inputType',
        dataType: 'text',
        dataLength: 30,
        required: true,
        sortable: true,
      },
      {
        displayName: this.translate.instant('Permission'),
        key: 'permission',
        dataType: 'text',
        dataLength: 30,
        required: true,
        sortable: true,
      },
    ],

    DynamicPropertiesTableData: [],
  };

  rdsTopNavigationMfeConfig: ComponentLoaderOptions = {
    name: 'RdsTopNavigation',
    input: {
      backgroundColor: this.backgroundColor,
    },
  };
  isEdit: boolean = false;
  temp: any = [];
  constructor(
    public datepipe: DatePipe,
    private store: Store,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    private alertService: AlertService,
    public translate: TranslateService,
    private appSessionService: AppSessionService,
    private sharedService: SharedService
  ) { }
  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.subscribeToAlerts();
    this.rdsDynamicPropertiesMfeConfig = {
      name: 'RdsCompDynamicProperties',
      input: {
        DynamicPropertiesTableData:
          this.DynamicProperties.DynamicPropertiesTableData,
        DynamicPropertiesTableHeader:
          this.DynamicProperties.DynamicPropertiesTableHeader,
        inputTypeList: this.inputTypeList,
        permissionsList: this.permissionsList,
        isShimmer: true,
        editShimmer: true
      },
      output: {
        deleteEvent: (eventDataDynamic: any) => {
          this.store.dispatch(deleteDynamicProperty(eventDataDynamic.id));
        },
        createOrUpdateDynamic: (eventData: any) => {
          this.addDynamic(eventData);
        },
        editPropertyTableRowData: (eventData: any) => {
          const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;

          mfeConfig.input.editShimmer = true;

          this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig
          this.EditDynamicProperty(eventData);
        },
      },
    };
    this.store.dispatch(getPermission());
    this.store.select(selectAllPermissions).subscribe((result: any) => {
      if (result && result.items && result.items.length > 0) {
        this.permissionsList = this.ConvertArraytoTreedata(result.items);
        const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        mfeConfig.input.permissionsList = this.permissionsList;
        this.rdsDynamicPropertiesMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(getDynamicProperty());
    this.store.select(selectDynamicProperty).subscribe((res: any) => {
      if (res && res.dynamicProperty && res.dynamicProperty.items && res.status == "success") {
        this.isAnimation = false;
        this.DynamicProperties.DynamicPropertiesTableData = [];
        res.dynamicProperty.items.forEach((element: any) => {
          const item: any = {
            propertyName: element.propertyName,
            displayName: element.displayName,
            inputType: element.inputType,
            permission: element.permission,
            tenantId: element.tenantId,
            id: element.id,
            name: element.propertyName
          };
          this.DynamicProperties.DynamicPropertiesTableData.push(item);
        });
        const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        mfeConfig.input.DynamicPropertiesTableData = [
          ...this.DynamicProperties.DynamicPropertiesTableData,
        ];
        mfeConfig.input.isShimmer = false;
        this.rdsDynamicPropertiesMfeConfig = mfeConfig;
      }

    });

    this.rdsDynamicEntityPropertiesMfeConfig = {
      name: 'RdsCompDynamicEnityProperties',
      input: {
        DynamicEntityPropertiesTableData:
          this.DynamicEntityProperties.DynamicEntityPropertiesTableData,
        DynamicEntityPropertiesTableHeader:
          this.DynamicEntityProperties.DynamicEntityPropertiesTableHeader,
        entityNames: this.DynamicEntityProperties.Entity,
        parameterList: this.DynamicEntityProperties.Parameter,
        isShimmer: true,
        editShimmer: true
      },
      output: {
        deleteEvent: (eventDataEntity: any) => {
          this.store.dispatch(deleteDynamicEntity(eventDataEntity.id));
        },
        createOrUpdateDynamicEntitydata: (eventDataEntity: any) => {
          this.addEntity(eventDataEntity);
        },
      },
    };
    this.store.dispatch(getDynamicEntity());
    this.store.select(selectDynamicEntity).subscribe((res: any) => {
      this.DynamicEntityProperties.DynamicEntityPropertiesTableData = [];
      if (res && res.dynamicEntity.items && res.status == 'success') {
        this.isAnimation = false;
        res.dynamicEntity.items.forEach((element: any) => {
          const item: any = {
            entityFullName: element.entityFullName,
            dynamicProperty: element.dynamicPropertyName,
            id: element.id,
            name: element.dynamicPropertyName
          };
          this.DynamicEntityProperties.DynamicEntityPropertiesTableData.push(
            item
          );
        });
        const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
        mfeConfig.input.DynamicEntityPropertiesTableData = [
          ...this.DynamicEntityProperties.DynamicEntityPropertiesTableData,
        ];
        mfeConfig.input.isShimmer = false;
        this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig;
      }

    });

    // Get All Entities
    this.store.dispatch(getAllEntities());
    this.store.select(selectDynamicEntities).subscribe((res: any) => {
      this.entityNames = [];
      if (res && res.length > 0) {
        res.forEach((element: any) => {
          const item: any = {
            value: element,
            displayText: element,
          };
          this.entityNames.push(item);
        });
        const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
        mfeConfig.input.entityNames = [...this.entityNames];
        mfeConfig.input.isShimmer = false;
        this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(getInputTypeNames());
    this.store.select(selectInputPropertyNameEntities).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.inputTypeList = [];
        res.forEach((element: any) => {
          const item: any = {
            value: element,
            displayText: element,
          };
          this.inputTypeList.push(item);
        });
        const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        mfeConfig.input.inputTypeList = [...this.inputTypeList];
        this.rdsDynamicPropertiesMfeConfig = mfeConfig;
      }
    });

    this.store.dispatch(getDynamicProperty());
    this.store.select(selectAllDynamicProperties).subscribe((res: any) => {
      if (res && res.items) {
        this.parameterList = [];
        const entityParameter: any = [];
        res.items.forEach((item: any) => {
          const item1: any = {
            value: item.displayName,
            some: item.displayName,
            id: item.id,
            name: item.displayName
          }
          this.parameterList.push(item1);
        });
        const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
        mfeConfig.input.parameterList = [...this.parameterList];
        mfeConfig.input.isShimmer = true;
        this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig;
      }
    });
  }
  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
  }
  btnClick(event) {
    this.selectedTabIndex = event;
    if (this.selectedTabIndex === 1) {
      this.btnLabel = 'NEW DYNAMIC ENTITY PROPERTY';
      this.sharedService.setTopNavTitle(this.navtabsItems[this.selectedTabIndex].label)
    } else {
      this.btnLabel = 'NEW DYNAMIC PROPERTY';
      this.sharedService.setTopNavTitle('');

    }
  }
  addDynamic(data: any): void {

    if (data.id) {
      this.store.dispatch(UpdateDynamicProperty(data));
    } else {
      this.store.dispatch(saveDynamicProperty(data));
    }
  }

  addEntity(Data): void {
    this.temp = [];
    if (Data && Data.dynamicEntity) {
      Data.dynamicEntity.forEach((element: any) => {
        if (
          element.PropertyID &&
          element.entityFullName
        ) {
          const entityData: any = {
            dynamicPropertyId: element.PropertyID,
            entityFullName: element.entityFullName[0],
            tenantId: this.appSessionService.tenantId,
          };
          this.temp.push(entityData);
        }
      });
      this.temp.map(element => {
        return this.store.dispatch(saveDynamicEntity(element));
      })
      // this.temp.forEach(element => {
      //   setTimeout(()=>{
      //     this.store.dispatch(saveDynamicEntity(element));
      //   }, 1000);
      // });
    }
  }

  EditDynamicProperty(event): void {
    this.resetDynamicProperty();
    this.store.dispatch(getDynamicPropertyByEdit(event));
    this.store.select(selectDynamicPropertyForEdit).subscribe((res: any) => {
      if (res && res.EditDynamicPropertSateI && res.status == 'success') {
        const dynamicPropertData: any = {
          displayName: res.EditDynamicPropertSateI.displayName,
          inputType: res.EditDynamicPropertSateI.inputType,
          permission: res.EditDynamicPropertSateI.permission,
          propertyName: res.EditDynamicPropertSateI.propertyName,
          id: res.EditDynamicPropertSateI.id,
          name: res.EditDynamicPropertSateI.displayName
        };
        this.selectedDynamicPermission = [];
        this.checkSelectedNodes(res.EditDynamicPropertSateI.permission);
        const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        mfeConfig.input.DynamicProperyData = dynamicPropertData;
        mfeConfig.input.permissionsList = this.permissionsList;
        mfeConfig.input.selectedPermissionList = [
          ...this.selectedDynamicPermission,
        ];
        mfeConfig.input.editShimmer = false;
        this.rdsDynamicPropertiesMfeConfig = mfeConfig;
      }
    });
    setTimeout(() => {
      var offcanvas = document.getElementById('AddDynamic');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  ConvertArraytoTreedata(tredata: any) {
    const treedaTA = this._arrayToTreeConverterService.createTree(
      tredata,
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

  checkSelectedNodes(node: any) {
    this.selectedDynamicPermission = [];
    if (node) {
      const selecteditem: any = {
        name: node,
        value: true,
      };
      this.selectedDynamicPermission.push(selecteditem);
    }
  }
  openCanvas(): void {
    if (this.selectedTabIndex === 0) {
      this.openDynamicCanvas();
    } else {
      this.openEntityCanvas();
    }
  }

  openDynamicCanvas(): void {
    this.viewCanvas = true;
    this.canvasTitle = this.translate.instant('NEW DYNAMIC PROPERTY');
    this.id = undefined;
    this.isEdit = false;
    const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
    mfeConfig.input.DynamicProperyData = {};
    mfeConfig.input.viewCanvas = true;
    mfeConfig.input.selectedPermissionList = [];
    mfeConfig.input.editShimmer = false;
    this.rdsDynamicPropertiesMfeConfig = mfeConfig;

    setTimeout(() => {
      var offcanvas = document.getElementById('AddDynamic');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  openEntityCanvas(): void {
    this.viewCanvas = true;
    this.canvasTitle = this.translate.instant('NEW DYNAMIC ENTITY PROPERTY');
    this.id = undefined;
    const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
    mfeConfig.input.reset = true;
    this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig;

    setTimeout(() => {
      var offcanvas = document.getElementById('AddEntity');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1000);
  }
  resetDynamicProperty() {
    const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
    mfeConfig.input.permissionsList = [];
    mfeConfig.input.selectedPermissionList = [];
    mfeConfig.input.editShimmer = true;
  }
  closeCanvas(): void {
    this.viewCanvas = false;
  }


  getNavTabItems(): any {
    this.navtabsItems[0].label = this.translate.instant('Dynamic Properties');
    this.navtabsItems[1].label = this.translate.instant('Dynamic Entity Properties');
    return this.navtabsItems;
  }

  // fabmenu mobile
  onSelectMenu(event: any) {
    if (event.key === 'newdynamicproperties') {
      this.openCanvas();
    }
  }
}
