import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertService, AppSessionService, SharedService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { transition, trigger, query, style, animate, state, } from '@angular/animations';
import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { deleteDynamicProperty, getDynamicProperty, getDynamicPropertyByEdit, getInputTypeNames, getPermission, saveDynamicProperty, UpdateDynamicProperty } from 'projects/libs/state-management/src/lib/state/dynamic-property-management/dynamic-property.actions';
import { deleteDynamicEntity, getAllEntities, getDynamicEntity, saveDynamicEntity } from 'projects/libs/state-management/src/lib/state/dynamic-entity/dynamic-entity.actions';
import { selectAllDynamicEntities, selectAllPermissions, selectAllProperties, selectDynamicEntities, selectDynamicPropertyForEdit, selectInputPropertyNameEntities } from 'projects/libs/state-management/src/lib/state/dynamic-property-management/dynamic-property.selector';
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
  // animations: [
  //   trigger('fadeAnimation', [
  //     transition('* <=> *', [
  //       query(':enter',
  //         [
  //           style({ opacity: 0 })
  //         ],
  //         { optional: true }
  //       ),
  //       query(':leave',
  //         [
  //           style({ opacity: 1 }),
  //           animate('1s', style({ opacity: 0 }))
  //         ],
  //         { optional: true }
  //       ),
  //       query(':enter',
  //         [
  //           style({ opacity: 0 }),
  //           animate('1s', style({ opacity: 1 }))
  //         ],
  //         { optional: true }
  //       )
  //     ])
  //   ])
  // ]
  animations: [
    trigger('fadeAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  currentAlerts: any = [];
  // public rdsAlertMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsCompAlert',
  //   input: {
  //     currentAlerts: this.currentAlerts,
  //   },
  //   output: {
  //     onAlertHide: (event: any) => {
  //       this.currentAlerts = event;
  //     },
  //   },
  // };
  @Input()
  entityList: any[] = [];
  @Input()
  @Input() listItems1 = [
    { value: 'New Dynamic Properties', some: 'value', key: 'newdynamicproperties', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  parameterList: any[] = [];
  @Input() dynamicPropertyTableData: any = [];
  @Input() dynamicEntityPropertyTableData: any = [];
  DynamicProperyData: any = { propertyName: '', displayName: '', inputType: '' };
  @Input() selectedPermissionList: any = [];
  @Input() IsEdit: boolean = false;

  color: string = '#8d9ba9';
  backgroundColor: string = '#abdbe3';
  selectedTabIndex = 0;
  entityNames: any = [];
  InputName: any = '';
  selectedPermission: any;
  selectedDynamicPermission: any = [];
  // rdsDynamicPropertiesMfeConfig: ComponentLoaderOptions;
  // rdsDynamicPermissionMfeConfig: ComponentLoaderOptions;
  // rdsDynamicEntityPropertiesMfeConfig: ComponentLoaderOptions;
  permissionsList: any;
  btnLabel: string = 'New Dynamic Property';
  public viewCanvas: boolean = false;
  canvasTitle: string = this.translate.instant('New Dynamic Property');
  id: number | undefined = undefined;
  editShimmer: boolean = true;
  isShimmer: boolean = true;
  DynamicEntityPropertiesTableHeader: any = [
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
  ];

  DynamicEntityPropertiesTableData: any = [];

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

  DynamicPropertiesTableHeader: any = [
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
  ];

  DynamicPropertiesTableData: any = [];

  // rdsTopNavigationMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsTopNavigation',
  //   input: {
  //     backgroundColor: this.backgroundColor,
  //   },
  // };
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
    // this.rdsDynamicPropertiesMfeConfig = {
    //   name: 'RdsCompDynamicProperties',
    //   input: {
    //     DynamicPropertiesTableData:
    //       this.DynamicProperties.DynamicPropertiesTableData,
    //     DynamicPropertiesTableHeader:
    //       this.DynamicProperties.DynamicPropertiesTableHeader,
    //     inputTypeList: this.inputTypeList,
    //     permissionsList: this.permissionsList,
    //     isShimmer: true,
    //     editShimmer: true
    //   },
    //   output: {
    //     deleteEvent: (eventDataDynamic: any) => {
    //       this.store.dispatch(deleteDynamicProperty(eventDataDynamic.id));
    //     },
    //     createOrUpdateDynamic: (eventData: any) => {
    //       this.addDynamic(eventData);
    //     },
    //     editPropertyTableRowData: (eventData: any) => {
    //       const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;

    //       mfeConfig.input.editShimmer = true;

    //       this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig
    //       this.EditDynamicProperty(eventData);
    //     },
    //   },
    // };
    // this.rdsDynamicEntityPropertiesMfeConfig = {
    //   name: 'RdsCompDynamicEnityProperties',
    //   input: {
    //     DynamicEntityPropertiesTableData:
    //       this.DynamicEntityProperties.DynamicEntityPropertiesTableData,
    //     DynamicEntityPropertiesTableHeader:
    //       this.DynamicEntityProperties.DynamicEntityPropertiesTableHeader,
    //     entityNames: this.DynamicEntityProperties.Entity,
    //     parameterList: this.DynamicEntityProperties.Parameter,
    //     isShimmer: true,
    //     editShimmer: true
    //   },
    //   output: {
    //     deleteEvent: (eventDataEntity: any) => {
    //       this.store.dispatch(deleteDynamicEntity(eventDataEntity.id));
    //     },
    //     createOrUpdateDynamicEntitydata: (eventDataEntity: any) => {
    //       this.addEntity(eventDataEntity);
    //     },
    //   },
    // };
    this.store.dispatch(getPermission());
    this.store.select(selectAllPermissions).subscribe((result: any) => {
      if (result && result.items && result.items.length > 0) {
        this.permissionsList = this.ConvertArraytoTreedata(result.items);
        // const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        // mfeConfig.input.permissionsList = this.permissionsList;
        // this.rdsDynamicPropertiesMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(getDynamicProperty());
    this.store.select(selectAllProperties).subscribe((res: any) => {
      if (res && res.items) {
        this.isAnimation = false;
        this.DynamicPropertiesTableData = [];
        this.parameterList = [];

        res.items.forEach((element: any) => {
          const item: any = {
            propertyName: element.propertyName,
            displayName: element.displayName,
            inputType: element.inputType,
            permission: element.permission,
            tenantId: element.tenantId,
            id: element.id,
            name: element.propertyName
          };
          const item1: any = {
            value: item.displayName,
            some: item.displayName,
            id: item.id,
            name: item.displayName
          }
          this.parameterList.push(item1);
          this.DynamicPropertiesTableData.push(item);
        });

        this.isShimmer = false;
        // const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        // mfeConfig.input.DynamicPropertiesTableData = [
        //   ...this.DynamicProperties.DynamicPropertiesTableData,
        // ];
        // mfeConfig.input.isShimmer = false;
        // this.rdsDynamicPropertiesMfeConfig = mfeConfig;
        // const mfeConfig1 = this.rdsDynamicEntityPropertiesMfeConfig;
        // mfeConfig1.input.parameterList = [...this.parameterList];
        // this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig1;

      }

    });

    this.store.dispatch(getDynamicEntity());
    this.store.select(selectAllDynamicEntities).subscribe((res: any) => {
      this.DynamicEntityPropertiesTableData = [];
      if (res && res.items && res.items.length > 0) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          const item: any = {
            entityFullName: element.entityFullName,
            dynamicProperty: element.dynamicPropertyName,
            id: element.id,
            name: element.dynamicPropertyName
          };
          this.DynamicEntityPropertiesTableData.push(item);
        });
        this.isShimmer = false;
      }

    });

    // Get All Entities
    this.store.dispatch(getAllEntities());
    this.store.select(selectDynamicEntities).subscribe((res: any) => {
     this.entityNames = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            value: element,
            some: element,
            isSelected: element.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
            isFree: element.isFree
          };
          this.entityNames.push(item);
        });
        this.entityNames = [...this.entityNames]
        this.isShimmer = false;
        // const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
        // mfeConfig.input.entityNames = [...this.entityNames];
        // mfeConfig.input.isShimmer = false;
        // this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig;
      }
    });
    this.store.dispatch(getInputTypeNames());
    this.store.select(selectInputPropertyNameEntities).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.inputTypeList = [];
        res.forEach((element: any) => {
          const item: any = {
            value: element,
            some: element,
            isSelected: false,
            icon: '',
            iconHeight: 0,
            iconWidth: 0,
            iconFill: false,
            iconStroke: true
          };
          this.inputTypeList.push(item);
        });
        // const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        // mfeConfig.input.inputTypeList = [...this.inputTypeList];
        // this.rdsDynamicPropertiesMfeConfig = mfeConfig;
      }
    });
  }

  deleteDynamic(eventDataDynamic: any) {
    this.store.dispatch(deleteDynamicProperty(eventDataDynamic.id));
  }

  createDynamic(eventData: any) {
    this.addDynamic(eventData);
  }

  updateDynamic(eventData: any) {
    // const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
    // mfeConfig.input.editShimmer = true;
    // this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig
    this.editShimmer = false;
    this.EditDynamicProperty(eventData);
  }

  deleteDynamicEntity(eventDataEntity: any) {
    this.store.dispatch(deleteDynamicEntity(eventDataEntity.id));

  }

  createDynamicEntity(eventDataEntity: any) {
    this.addEntity(eventDataEntity);
  }

  subscribeToAlerts() {
    // debugger;
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      // const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      // rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      // this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
  }
  btnClick(event) {
    this.selectedTabIndex = event;
    if (this.selectedTabIndex === 1) {
      this.btnLabel = 'New Dynamic Entity Property';
      this.sharedService.setTopNavTitle(this.navtabsItems[this.selectedTabIndex].label)
    } else {
      this.btnLabel = 'New Dynamic Property';
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
    if (Data && Data.dynamicEntity) {
      if (Data.dynamicEntity.length > 0) {
        Data.dynamicEntity.forEach((element: any) => {
          if (element.PropertyID && element.entityFullName) {
            const entityData: any = {
              dynamicPropertyId: element.PropertyID,
              entityFullName: element.entityFullName,
              tenantId: this.appSessionService.tenantId,
            };
            this.store.dispatch(saveDynamicEntity(entityData));
          }
        });

      } else if (Data.dynamicEntity.entityFullName) {
        const entityData: any = {
          dynamicPropertyId: 0,
          entityFullName: Data.dynamicEntity.entityFullName,
          tenantId: this.appSessionService.tenantId,
          dynamicPropertyName: ''
        };
        this.store.dispatch(saveDynamicEntity(entityData));
      }
    }

  }

  EditDynamicProperty(event): void {
    this.editShimmer = false;
    this.resetDynamicProperty();
    this.store.dispatch(getDynamicPropertyByEdit(event));
    this.store.select(selectDynamicPropertyForEdit).subscribe((res: any) => {
      if (res) {
        const dynamicPropertData: any = {
          displayName: res.displayName,
          inputType: res.inputType,
          permission: res.permission,
          propertyName: res.propertyName,
          id: res.id,
          name: res.displayName
        };
        this.selectedDynamicPermission = [];
        this.checkSelectedNodes(res.permission);
        // const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
        // mfeConfig.input.DynamicProperyData = dynamicPropertData;
        // mfeConfig.input.permissionsList = this.permissionsList;
        // mfeConfig.input.selectedPermissionList = [
        //   ...this.selectedDynamicPermission,
        // ];
        // mfeConfig.input.editShimmer = false;
        // this.rdsDynamicPropertiesMfeConfig = mfeConfig;
        this.DynamicProperyData = dynamicPropertData;
        this.selectedPermissionList = this.selectedDynamicPermission
        this.editShimmer = false;
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
      this.parameterList.forEach((ele: any) => {
        if (ele) {
          ele.isSelected = false;
        }
      })
      // const mfeConfig1 = this.rdsDynamicEntityPropertiesMfeConfig;
      // mfeConfig1.input.parameterList = [...this.parameterList];
      // this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig1;
      this.openEntityCanvas();
    }
  }

  openDynamicCanvas(): void {
    this.viewCanvas = true;
    this.canvasTitle = this.translate.instant('New Dynamic Property');
    this.id = undefined;
    this.isEdit = false;
    // const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
    this.DynamicProperyData = {};
    this.selectedPermission = [];
    this.editShimmer = false;
    // this.rdsDynamicPropertiesMfeConfig = mfeConfig;

    setTimeout(() => {
      var offcanvas = document.getElementById('AddDynamic');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  openEntityCanvas(): void {
    this.viewCanvas = true;
    this.canvasTitle = this.translate.instant('New Dynamic Entity Property');
    this.id = undefined;
    // const mfeConfig = this.rdsDynamicEntityPropertiesMfeConfig;
    // mfeConfig.input.reset = true;
    // this.rdsDynamicEntityPropertiesMfeConfig = mfeConfig;

    setTimeout(() => {
      var offcanvas = document.getElementById('AddEntity');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1000);
  }
  resetDynamicProperty() {
    // const mfeConfig = this.rdsDynamicPropertiesMfeConfig;
    // this.permissionsList = [];
    this.selectedPermission = [];
    this.editShimmer = true;
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
