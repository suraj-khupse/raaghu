import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { TreeNode } from 'projects/rds-components/src/models/tree-node.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  state,
} from '@angular/animations';
import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { deleteEdition, getEditionInfo, getEditionPageComboboxItems, getEditions, getTenantCount, moveTenant, saveEdition, updateEdition } from 'projects/libs/state-management/src/lib/state/edition/edition.action';
import { selectAllEditions, selectEditionInfo, selectEditionPageComboboxItems, selectTenant } from 'projects/libs/state-management/src/lib/state/edition/edition.selector';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
import { NgForm } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  //     currentAlerts: this.currentAlerts
  //   },
  //   output: {
  //     onAlertHide: (event: any) => {
  //       this.currentAlerts = event;
  //     }
  //   }
  // }
  // public rdsEditionMfeConfig: ComponentLoaderOptions;
  constructor(private store: Store, public translate: TranslateService, private _arrayToTreeConverterService: ArrayToTreeConverterService, private alertService: AlertService) { }
  EditionsTableHeader: TableHeader[] = [
    { displayName: 'Edition Name', key: 'editionname', dataType: 'text', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Price', key: 'price', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Trial Period', key: 'trialPeriod', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Expiring Edition', key: 'expiringEdition', dataType: 'text', dataLength: 30, sortable: true, required: true },
  ]

  featureList: any = [];
  freeEditions: any = [];
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  treeData: any = [
    new TreeNode("Testtenantscopefeature", 'Test tenant scope feature', 1, [], true, 1),
    new TreeNode("Chat", 'Chat', 1, [new TreeNode("ChatWithHost", 'Chat With Host', 2, [], false, 2), new TreeNode("ChatWithOtherTenant", 'Chat With Other Tenant', 2, [], true, 3)], true, 4)
    , new TreeNode("MaximumUserCount", 'Maximum User Count', 1, [], true, 6)
    , new TreeNode("TestCheckFeature", 'Test Check Feature', 1, [], true, 7)
    , new TreeNode("TestCheckFeature2", 'Test Check Feature2', 1, [], true, 8)
  ]

  editionList: any = [];
  isShimmer: boolean = false;
  editShimmer: boolean = true;
  tenantCount: number = 0;
  selectedFeatures = [];
  selectedEdition: any;
  showLoadingSpinner: boolean = false;
  contentOnEdit: boolean=false;
  public viewCanvas: boolean = false;
  public isEdition: boolean = false;
  EditionName: string;
  AnnualPrice: number = 0;
  TrailPeriod: number = 0;
  ExpiryInterval: number = 0;
  id: number | undefined = undefined;
  activePage: number = 0;
  canvasTitle: string = 'NEW EDITION';
  itemListImmediately = [];
  itemListAfterTrailPeriod = [];
  itemListSubscription = [];
  itemListAssign = [];
  navtabsItems: any = [];
  actions: TableAction[] = [{ id: 'edit', displayName: this.translate.instant('Edit') }, { id: 'delete', displayName: this.translate.instant('Delete') }, { id: 'moveTenant', displayName: this.translate.instant('Move Tenants to Another Edition') }]
  recordsPerpage: number = 10;
  sourceEditionId: string = '';
  viewMoveTenantCanvas: boolean = false;
  moveTenantCanvasTitle: string = 'MOVE TENANTS TO ANOTHER EDITION  ';
  listItems = [
    { value: 'New Edition', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  selectpermissionList: any = [];
  freeEditionId = undefined
  showAssignEditionDropdown: boolean;
  freeEditon: string;
  targetEdition: string = '';
  targetEditionId = undefined;
  EditionsTableData: any = [];

  ngOnInit(): void {
    this.isAnimation = true;
    this.isShimmer=true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.subscribeToAlerts();    

    this.store.dispatch(getEditions());
    this.store.select(selectAllEditions).subscribe((res: any) => {
      this.EditionsTableData = [];
      if (res) {
        this.isAnimation = false;
        res.forEach(element => {
          const edition: any = {
            editionname: element.displayName,
            price: '$ ' + element.annualPrice,
            trialPeriod: element.trialDayCount,
            expiringEdition: (element.expiringEditionDisplayName && element.expiringEditionDisplayName !== null) ? element.expiringEditionDisplayName : ' --',
            id: element.id,
            name: element.displayName,
          }
          this.EditionsTableData.push(edition);
        });
        this.isShimmer=false;
      }

    }, (err: any) => {
    })
    this.store.dispatch(getEditionInfo(undefined))
    this.store.select(selectEditionInfo).subscribe((res: any) => {
      if (res && res.featureValues) {
        this.featureList = this.convertArraytoTreedata(res.features)
        this.featureList = [...this.featureList];
        this.selectedFeatures = [...res.featureValues];
        this.selectedEdition = { ...res.edition };
        this.editShimmer = false;
      }

    }, (err: any) => {
    })
    this.store.dispatch(getEditionPageComboboxItems())
    this.store.select(selectEditionPageComboboxItems).subscribe((res: any) => {
      if (res) {
        this.editionList = []
        this.freeEditions = [];
        res.filter((x: any) => x.isFree).forEach(element => {
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
          this.freeEditions.push(data);
        });
        res.forEach((res: any) => {
          const data = {
            value: res.value,
            some: res.displayText,
            isSelected: res.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
            isFree: res.isFree
          }
          this.editionList.push(data);
        });               
      }
    });

    this.store.select(selectTenant).subscribe((res: any) => {
      if (res) {
        this.tenantCount = res;      
      }
    })
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
        {
          target: 'selectable',
          targetFunction(item) {
            return item.inputType.name === 'CHECKBOX';
          },
        },
      ],
      1
    );
    return treedaTA;
  }
  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      debugger
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      this.currentAlerts = [...this.currentAlerts];
      this.showLoadingSpinner = false;     
    });

  }

  onEditionSave(data) {
    if (data) {
      if (data.edition.id !== undefined) {
        this.store.dispatch(updateEdition(data))
      } else {
        this.store.dispatch(saveEdition(data))
      }
    }
  }

  updateEdition(id) {
    if (id == 0) {
      this.editShimmer = false;      
    } else {
      this.editShimmer = true;      
    }
    this.store.dispatch(getEditionInfo(id))
  }

  deleteEdition(data) {
    this.store.dispatch(deleteEdition(data.id));
  }

  onMoveTenantAction(editionId) {
    this.store.dispatch(getTenantCount(editionId));
  }

  onMoveTenant(data) {
    this.store.dispatch(moveTenant(data));
  }

  onAlertHide(event: any): void {
    this.currentAlerts = event;
  }

  openCanvas(): void {
    this.showLoadingSpinner = true;
    this.updateEdition(0);
    this.contentOnEdit = false;
    this.selectedFeatures = [];
    this.selectedEdition = undefined;
    this.viewCanvas = true;
    this.isEdition = false
    this.EditionName = '';
    this.AnnualPrice = undefined;
    this.TrailPeriod = 0;
    this.ExpiryInterval = 0;
    this.id = undefined;
    this.activePage = 0;
    this.canvasTitle = 'NEW EDITION';
    this.initialize();
    setTimeout(() => {
      var offcanvas = document.getElementById('addEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  private initialize(): void {
    this.itemListImmediately = [
      {
        id: 1,
        label: this.translate.instant('Immediately'),
        checked: true,
        disabled: false,
        name: "Radio-Button"
      },
    ];

    this.itemListAfterTrailPeriod = [
      {
        id: 2,
        label: this.translate.instant('After Trial Period'),
        checked: false,
        disabled: false,
        name: "Radio-Button"
      },
    ];

    this.itemListSubscription = [
      {
        id: 3,
        label: this.translate.instant("Deactivate Tenant"),
        checked: true,
        disabled: false,
        name: "AfterSubscriptionExpiryBtn"
      },
    ];

    this.itemListAssign = [
      {
        id: 4,
        label: this.translate.instant("Assign To Another Edition"),
        checked: false,
        disabled: false,
        name: "AfterSubscriptionExpiryBtn"
      },
    ];


    this.navtabsItems = [
      {
        label: this.translate.instant('Edition information'),
        tablink: '#newedition',
        ariacontrols: 'newedition',
      },
      {
        label: this.translate.instant('Features'),
        tablink: '#feature',
        ariacontrols: 'feature',
      }];
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.deleteEdition(event.selectedData);
    } else if (event.actionId === 'edit') {
      this.onEdit(event.selectedData);
    } else if (event.actionId === 'moveTenant') {
      this.sourceEditionId = event.selectedData.id;
      this.moveTenantEdition();
      this.onMoveTenantAction(event.selectedData.id)
    }
  }

  onEdit(event): void {
    this.contentOnEdit = true;
    this.id=event.id;
    this.updateEdition(event.id)
    this.isEdition = true;
    this.viewCanvas = true;
    this.canvasTitle = 'UPDATE EDITION';
    this.EditionName=event.editionname;
    this.activePage = 0;
    this.initialize();
    setTimeout(() => {
      var offcanvas = document.getElementById('addEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1);
  }

  moveTenantEdition(): void {
    this.viewMoveTenantCanvas = true;
    this.moveTenantCanvasTitle = 'MOVE TENANTS TO ANOTHER EDITION';
    setTimeout(() => {
      var offcanvas = document.getElementById('moveTenantEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.openCanvas();
    }
  }

  addEdition(editionForm: NgForm): void {
    editionForm.form.markAllAsTouched();
    if (editionForm.invalid) {
      return;
    }
    let featureList = [];    
    if (this.selectpermissionList) {
      featureList = this.selectpermissionList;
    } else {
      featureList = this.selectedFeatures;
    }
    const body: any = {
      edition: {
        displayName: this.EditionName,
        expiringEditionId: undefined,
        id: this.id
      },
      featureValues: featureList
    };
    if (!this.id) {
      body.edition.dailyPrice = 0;
      body.edition.weeklyPrice = 0;
      body.edition.monthlyPrice = 0;
      body.edition.trialDayCount = this.TrailPeriod;
      body.edition.annualPrice = this.AnnualPrice;
      body.edition.waitingDayAfterExpire = this.ExpiryInterval;
      body.edition.expiringEditionId = this.freeEditionId;

    }
    this.onEditionSave(body);
    this.viewCanvas = false;
    this.resetPermission();
  }

  closeCanvas(): void {
    this.viewCanvas = false;
    this.showLoadingSpinner = false;
    this.resetPermission();
  }

  resetPermission() {
    if (this.selectedFeatures) {
      this.selectedFeatures.forEach((element: any) => {
        if (element.value == 'false' || element.value == 'true') {
          element.value = false;
        }
        else {
          element.value = true;
        }
      });
    }
  }

  onTabClick(index): void {
    this.activePage = index;
  }

  hideAssignEditionList() {
    this.showAssignEditionDropdown = false;
  }

  showAssignEditionList() {
    this.showAssignEditionDropdown = true;
  }

  onFreeListSelect(event: any) {
    this.freeEditon = event.item.some
    this.freeEditionId = event.item.value;
  }

  getselectedPermissionList(event): void {
    this.selectpermissionList = event
  }

  closeMoveTenantCanvas() {
    this.viewMoveTenantCanvas = false;
    this.sourceEditionId = '';
  }

  onTargetListSelect(event : any ){
    this.targetEdition = event.item.some
    this.targetEditionId = event.item.value
  }

  moveTenant(): void {
    const data: any = {
      sourceEditionId: this.sourceEditionId,
      targetEditionId: this.targetEditionId
    };
    this.onMoveTenant(data);
  }

}
