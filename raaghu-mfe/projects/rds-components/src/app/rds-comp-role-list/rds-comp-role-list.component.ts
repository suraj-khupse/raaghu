import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';

import { TranslateService } from '@ngx-translate/core';
import { getRoles } from 'projects/libs/state-management/src/lib/state/role/role.actions';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
import { Role } from '../rds-comp-new-role/rds-comp-new-role.component';
export class RoleData {
  Roles: Role
  permissions: [];
}

declare let bootstrap: any;
@Component({
  selector: 'app-rds-comp-role-list',
  templateUrl: './rds-comp-role-list.component.html',
  styleUrls: ['./rds-comp-role-list.component.scss']
})
export class RdsCompRoleListComponent implements OnInit {
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

  actions: TableAction[] = [{ id: 'edit', displayName: 'Edit' }, { id: 'delete', displayName: 'Delete' }]
  @Input() RolesData: any;
  @Input() permissionsList: any = [];
  @Input() filterPermissionsList: any = [];
  @Input() SelectedPermissionValues: any = [];
  @Input() SelectedPermissionList: any = [];
  @Input() roleHeaders: TableHeader[] = [];
  @Input() isShimmer: boolean = false;
  @Input() EditShimmer: boolean = false;
  @Input() listItems = [
    { value: 'New Role', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Filter By Permission', some: 'value', key: 'filterByPermission', icon: 'funnel', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Input() roleList: any[] = [];
  buttonSpinnerForNewRole: boolean = true;
  @Output() onSaveRole = new EventEmitter<any>();
  @Output() onRefreshRole = new EventEmitter<any>();
  @Output() onEditRole = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
  @Output() onFilterPermissionReset = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() onSavePermission = new EventEmitter<any>();
  @Output() onnewRole = new EventEmitter<any>();
  @Output() onFilterPermission = new EventEmitter<any>();
  public Roles: any = { RolesData: undefined, permissionsList: [] };
  public FilterByPermissions: any = { filterPermissionsList: [] };
  isReset: boolean = false;
  isEdition: boolean = false;
  activePage: number;
  selectedId: any;
  selectedFilterId: any;
  viewCanvas: boolean = false;
  viewPermissionCanvas: boolean = false;
  selectedPermissionList: any = [];
  selectedFilterPermissionList: any = [];
  isRoleDataValid: boolean = false;
  RoleFromNewRole: any;
  EnableTreeSave: boolean = true;
  public tableData: any = [];
  public navtabsItems: any = [
    {
      label: this.translate.instant('Role'),
      tablink: '#Role',
      ariacontrols: 'Role-information',
    },
    {
      label: this.translate.instant('Permission'),
      tablink: '#Permission',
      ariacontrols: 'Permission',

    }];
  canvasTitle: string;


  constructor(
    public translate: TranslateService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.subscribeToAlerts();
    this.activePage = 0;
  }
  ngDoCheck(): void {

    this.tableData = [...this.roleList];
  }

  getNavTabItems(): any {

    this.navtabsItems[0].label = this.translate.instant('Role');

    this.navtabsItems[1].label = this.translate.instant('Permission');

    return this.navtabsItems;

  }
  getSelectedNavTab(event: any): void {
    this.navtabsItems[0].label = this.translate.instant('Role');
    this.navtabsItems[1].label = this.translate.instant('Permission');
    this.activePage = event;
  }
  save(): void {
    const data = {
      role: this.RoleFromNewRole,
      grantedPermissionNames: this.selectedPermissionList,
    };
    this.onSaveRole.emit(data);
    this.activePage = 0;
    var offcanvas = document.getElementById('RoleOffcanvas')
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.close();
  }


  getSelectedPermissionList(event: any): void {
    this.selectedPermissionList = [];
    if (event && event.length > 0) {
      this.selectedPermissionList = event
      this.EnableTreeSave = false;
    }
    else {
      this.EnableTreeSave = true;
    }
  }

  newRole(event): void {
    this.selectedId = '';
    this.viewCanvas = true;
    this.SelectedPermissionValues = [];
     if (event) {
      this.buttonSpinnerForNewRole = true;
      this.canvasTitle = 'NEW ROLE';
      this.Roles = { RolesData: undefined, permissionsList: [] };
      this.RolesData = undefined;
      this.onnewRole.emit(true);
     }
    setTimeout(() => {
      var offcanvas = document.getElementById('RoleOffcanvas')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
    this.activePage = 0;
  }

  getRoleData(eventdata) {
    if (eventdata.isOnSave) {
      const data: any = {
        role: eventdata.role,
        grantedPermissionNames: this.selectedPermissionList,
      }
      this.onSaveRole.emit(data);
      if (!eventdata) {
        this.EnableTreeSave = false;
      } else {
        this.EnableTreeSave = true;
      }
      this.close();
    }
    else {
      this.RoleFromNewRole = eventdata.roledata;
      this.EnableTreeSave = false;
      if (!eventdata || !eventdata.role) {
        this.EnableTreeSave = false;
      } else {
        this.EnableTreeSave = true;
      }
    }

  }
  close(): void {
    this.viewCanvas = false;
    this.Roles = { RolesData: undefined, permissionsList: [] };
    this.RolesData = undefined;
    this.onReset.emit(true);
    this.isRoleDataValid = false;
    this.buttonSpinnerForNewRole = false;
  }
  editTableRowData(event): void {
    this.newRole(undefined);
    this.canvasTitle = 'EDIT ROLE';
    this.onEditRole.emit(event.id);
    this.selectedId = event.id;
  }

  // Filter by permission canvas
  filterByPermission(event): void {
    this.selectedFilterId = '';
    this.SelectedPermissionValues = [];
    //if (event) {
    this.canvasTitle = 'FILTER BY PERMISSIONS';
    //  event.stopPropagation();
    this.RolesData = undefined;
    //}
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById('PermissionOffcanvas')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
    this.onnewRole.emit(true)
    this.activePage = 0;
  }

  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.newRole(event);
    }
    else if (event.key === 'refresh') {
      this.getRoles();
    }
    else if (event.key === 'filterByPermission') {
      this.filterByPermission(event);
    }
  }

  saveFilterPermission(): void {
    if (!this.selectedFilterPermissionList.find((x: any) => x.selected)) {
      return;
    }
    this.onFilterPermission.emit(this.selectedFilterPermissionList);
    this.activePage = 0;
    var offcanvas = document.getElementById('PermissionOffcanvas')
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  getFilterPermissionList(event: any): void {
    this.selectedFilterPermissionList = event
  }

  disableButton(): boolean {
    if (this.selectedFilterPermissionList.find((x: any) => x.value)) {
      return false;
    }
    return true
  }

  closeFilterPermission(): void {
    this.viewCanvas = false;
    this.FilterByPermissions = { filterPermissionsList: [] };
    this.onFilterPermissionReset.emit(true);
  }
  onchangeRoldate(event): void {
    this.RolesData = event;
  }
  getRoles() {
    this.onRefreshRole.emit();
  }
  onActionSelect(event: any) {
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

}

