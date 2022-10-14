import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
declare let bootstrap: any;

@Component({
  selector: 'app-rds-comp-tenant-list-new',
  templateUrl: './rds-comp-tenant-list-new.component.html',
  styleUrls: ['./rds-comp-tenant-list-new.component.scss']
})
export class RdsCompTenantListNewComponent implements OnInit {
  
  manageHost='Manage Host Admin features';
  activePage: number = 0;
  canvasTitle: string = '';
  isReset: boolean = false;
  viewCanvas: boolean = false;
  selectedId: any = '';
  isTenantInfoValid: boolean = false;
  actions: TableAction[] = [ 
    { id: 'edit', displayName: this.translate.instant('Edit') }, 
    { id: 'delete', displayName: this.translate.instant('Delete') }]
  @Input() tenantSettingsInfo: any;
  @Input() tenantData: any;
  @Input() isShimmer: boolean = false;
  @Input() listItems = [
    { value: 'New Tenant', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Input() tenantFeatures: any = [];
  @Input() tenantFeatureValues: any = [];
  @Input() editShimmer: boolean = false
  @Output() onSaveTenant = new EventEmitter<any>();
  @Output() onEditTenant = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() onSaveFeatures = new EventEmitter<any>();
  public tenant: any = {
    tenantInfo: undefined,
    tenantSettings: undefined,
    featureList: [],
  };
  public navtabsItems: any = [];

  @Input() public tenantList: any = [];
  public tableData: any = [];
  @Input() public editionList: any = [];
  buttonSpinnerForNewUser : boolean = true;
  buttonSpinnerForSave : boolean = true;

  currentAlerts: any = [];
  offCanvasId = 'tenantOffcanvashost';
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }

  @Input() tenantHeaders: TableHeader[] = [];
  selectedFeatureList: any = [];
  showEmail: boolean;
  showEmailList: boolean = false;
  showEditData: boolean = false;
  constructor(public translate: TranslateService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.activePage = 0;
    this.subscribeToAlerts();
  }

  ngDoCheck(): void {
    this.tableData = [...this.tenantList];
  }

  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }

  getLabel(): string {
    if (this.activePage === this.navtabsItems.length - 1) {
      return 'Save';
    }
    return 'Next';
  }

  save(): void {
    this.buttonSpinnerForSave = true;
    this.buttonSpinnerForNewUser = false;
    if (!this.selectedFeatureList || this.selectedFeatureList.length === 0) {
      return;
    }
    const data = {
      id: this.selectedId,
      featureValues: this.selectedFeatureList,
    };
    this.onSaveFeatures.emit(data);
    this.activePage = 0;
    var offcanvas = document.getElementById('tenantOffcanvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  // iterateSelectedFeatures(arr: any, featureList): any {
  //   arr.forEach((item: any) => {
  //     if (item.selectedChildren && item.selectedChildren.length > 0) {
  //       this.iterateSelectedFeatures(item.selectedChildren, featureList);
  //     }
  //     const element: any = {
  //       name: item.data.name,
  //       value: item.selected,
  //     };
  //     featureList.push(element);
  //   });

  //   return featureList;
  // }

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
      this.onSaveTenant.emit(this.tenant);
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

  newTenantHost(event: any): void {
    this.selectedId = '';
    this.viewCanvas = true;
    
    if (event) {
      this.canvasTitle = 'Manage Host Admin Features';
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;
      this.tenant = {
        tenantInfo: undefined,
        tenantSettings: undefined,
        featureList: [],
      }; 
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('tenantOffcanvashost');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
  }

  newTenant(event, showEmail?: boolean): void {
    this.buttonSpinnerForNewUser = true;
    this.buttonSpinnerForSave = false;
    this.selectedId = '';
    this.viewCanvas = true;
    this.showEmailList = showEmail ? true : false;
    this.showEditData = showEmail ? true: false;
    if (showEmail) {
      this.tenant = {
        tenantInfo: undefined,
        tenantSettings: undefined,
        featureList: [],
      };
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;
      const eventdata: any = {
        newtenant: true,
        reset: true
      }
      this.onReset.emit(eventdata);
      this.isTenantInfoValid = false;
    }
    if (event) {
      this.canvasTitle = 'NEW TENANT';
      this.tenantData = undefined;
      this.tenantSettingsInfo = undefined;

      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#tenant-information',
          ariacontrols: 'Basics',
        },
        {
          label: this.translate.instant('Features'),
          tablink: '#features',
          ariacontrols: 'features',
        },
      ];
    } else {
      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#tenant-information',
          ariacontrols: 'Basics',
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

  close(): void {
    this.viewCanvas = false;
    this.tenant = {
      tenantInfo: undefined,
      tenantSettings: undefined,
      featureList: [],
    };
    this.tenantData = undefined;
    this.tenantSettingsInfo = undefined;
    this.buttonSpinnerForSave = false;
    this.buttonSpinnerForNewUser = false;
  }
  editTableRowData(event): void {
    this.canvasTitle = 'EDIT TENANT';
    this.newTenant(undefined);
    this.onEditTenant.emit(event.id);
    this.selectedId = event.id;
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.deleteEvent.emit(event.selectedData);
    } else if (event.actionId === 'edit') {
      this.editTableRowData(event.selectedData);
    }
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

  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.newTenant(event);
    }
  }
  show():void{
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
}



