import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { deleteRole, getPermission, getRolByEdit, getRoles, saveRole } from 'projects/libs/state-management/src/lib/state/role/role.actions';
import { selectAllPermissions, selectAllRoles, selectRoleAlert, selectRoleForEdit } from 'projects/libs/state-management/src/lib/state/role/role.selector';
import { PermissionNode } from 'projects/rds-components/src/models/pemission.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  state,
} from '@angular/animations';
import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { Role } from 'projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role.component';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
export class RoleData {
  Roles: Role
  permissions: [];
}
declare let bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AlertService
    // DatePipe
  ],
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
  //           animate('0.4s', style({ opacity: 0 }))
  //         ],
  //         { optional: true }
  //       ),
  //       query(':enter',
  //         [
  //           style({ opacity: 0 }),
  //           animate('0.4s', style({ opacity: 1 }))
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
  RolesData: any;
  roleList: any = [];
  @Input() listItems = [
    { value: 'New Role', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Filter By Permission', some: 'value', key: 'filterByPermission', icon: 'funnel', iconWidth: '20px', iconHeight: '20px' },
  ];
  public Roles: any = { RolesData: undefined, permissionsList: [] };
  RoleFromNewRole: any;
  selectedPermissionList: any = [];
  activePage: number;
  viewCanvas: boolean = false;
  isRoleDataValid: boolean = false;
  selectedFilterId: any;
  isAnimation: boolean = true;
  canvasTitle: string;
  actions: TableAction[] = [{ id: 'edit', displayName: 'Edit' }, { id: 'delete', displayName: 'Delete' }]
  selectedId: any;
  showLoadingSpinner: boolean = false;
  EnableTreeSave: boolean = true;
  isReset: boolean = false;
  selectedFilterPermissionList: any = [];
  public FilterByPermissions: any = { filterPermissionsList: [] };
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
  constructor(public datepipe: DatePipe, private store: Store, private _arrayToTreeConverterService: ArrayToTreeConverterService, private alertService: AlertService, public translate: TranslateService) { }

  // rdsNewRoleMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsCompRoleList'
  // };

  // public rdsNewRoleMfeConfig: ComponentLoaderOptions;

  treeData: any = [];
  selectdnames: any = [];
  EditPermissionData: any;
  isEdit = false;
  selectedPermissions: any = [];
  selectedPermissionnames: any = [];
  selectedPermissionValues: any = [];
  permissionsList: any = [];

  roleHeaders: TableHeader[] = [
    { displayName: 'Role Name', key: 'rolename', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },

    { displayName: 'Creation Date & Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ]
  @Output() deleteRole = new EventEmitter<{ item: any }>();
  RoleDatatable: any = []
  EditShimmer: boolean = true;
  isShimmer: boolean = true;
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  rdsRoleTableMfeConfig: ComponentLoaderOptions;

  ngOnInit(): void {
    // this.subscribeToAlerts();

    this.store.select(selectRoleAlert).subscribe((res: any) => {
      this.currentAlerts = [];
      if (res) {
        this.currentAlerts = [];
        const currentAlert: any = {
          type: res.type,
          title: res.title,
          message: res.message,
        };
        this.currentAlerts.push(currentAlert);
      }
    })
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })


    // this.rdsNewRoleMfeConfig = {
    //   name: 'RdsCompRoleList',
    //   input: {
    //     // roleHeaders: this.RoleTableHeader,
    //     // roleList: this.RoleDatatable,
    //     // isShimmer: true,
    //     // EditShimmer: true,
    //   },
    //   output: {
    //     // onSaveRole: (eventData: any) => {
    //     //   if (eventData && eventData.role) {
    //     //     if (eventData.grantedPermissionNames && eventData.grantedPermissionNames.length) {
    //     //       this.FilterselectedPermissions(eventData.grantedPermissionNames)
    //     //       const data: any = {
    //     //         role: eventData.role,
    //     //         grantedPermissionNames: this.selectedPermissions
    //     //       };
    //     //       this.store.dispatch(saveRole(data));
    //     //     } else {
    //     //       const data: any = {
    //     //         role: eventData.role,
    //     //         grantedPermissionNames: [],
    //     //       };
    //     //       this.store.dispatch(saveRole(data));
    //     //     }
    //     //   }
    //     // },
    //     // onEditRole: (event: any) => {
    //     //   if (event) {
    //     //     this.store.dispatch(getRolByEdit(event));
    //     //     this.isEdit = true;
    //     //   } else {
    //     //     this.Roledetails = undefined;
    //     //     const mfeConfig = this.rdsNewRoleMfeConfig
    //     //     mfeConfig.input.RolesData = { ... this.Roledetails };
    //     //     this.rdsNewRoleMfeConfig = mfeConfig;
    //     //   }
    //     // },
    //     // onnewRole: (data: any) => {
    //     //   this.store.dispatch(getPermission());
    //     //   this.selectedPermissions = []
    //     // },
    //     // onRefreshRole: () => {
    //     //   const mfeConfig = this.rdsNewRoleMfeConfig
    //     //   mfeConfig.input.SelectedPermissionValues = [];
    //     //   this.rdsNewRoleMfeConfig = { ...mfeConfig };
    //     //   this.store.dispatch(getRoles([]));
    //     // },
    //     // onReset: (event: any) => {
    //     //   this.Roledetails = undefined;
    //     //   this.treeData = [];
    //     //   this.selectedPermissions = [];
    //     //   this.selectedPermissionValues = [];
    //     //   const mfeConfig = this.rdsNewRoleMfeConfig
    //     //   mfeConfig.input.RolesData = { ... this.Roledetails };
    //     //   mfeConfig.input.permissionsList = [... this.treeData];
    //     //   mfeConfig.input.EditShimmer = true;
    //     //   this.rdsNewRoleMfeConfig = mfeConfig;
    //     // },
    //     // deleteEvent: (event: any) => {
    //     //   this.store.dispatch(deleteRole(event.id))
    //     // },
    //     // onFilterPermission: (event: any) => {
    //     //   if (event && event.length) {
    //     //     this.FilterselectedPermissions(event)
    //     //     const data: any = {
    //     //       grantedPermissionNames: this.selectedPermissions
    //     //     };
    //     //     this.selectedPermissionValues = event;
    //     //     this.store.dispatch(getRoles(this.selectedPermissions));
    //     //     const mfeConfig = this.rdsNewRoleMfeConfig
    //     //     mfeConfig.input.SelectedPermissionValues = [...this.selectedPermissionValues];
    //     //     this.rdsNewRoleMfeConfig = { ...mfeConfig };
    //     //   }
    //     // },
    //     // onFilterPermissionReset: (event: any) => {
    //     //   this.treeData = [];
    //     //   this.selectedPermissions = [];
    //     //   this.selectedPermissionValues = [];
    //     //   const mfeConfig = this.rdsNewRoleMfeConfig
    //     //   mfeConfig.input.RolesData = { ... this.Roledetails };
    //     //   mfeConfig.input.permissionsList = [... this.treeData];
    //     //   mfeConfig.input.SelectedPermissionValues = [... this.selectedPermissionValues];
    //     //   this.rdsNewRoleMfeConfig = mfeConfig;
    //     // },
    //   }
    // };
    // const mfeConfig = this.rdsNewRoleMfeConfig;
    // mfeConfig.input.isShimmer = true;
    // this.rdsNewRoleMfeConfig = mfeConfig;
    this.store.dispatch(getRoles([]));
    this.store.select(selectAllRoles).subscribe((res: any) => {
      this.roleList = [];
      if (res && res.items) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          const status: string = (element.isStatic) ? '<span class="badge badge-primary p-1 mx-1 rounded">Static</span> ' : '';
          const status1: string = (element.isDefault) ? '<span class="badge badge-success p-1 mx-1 rounded">Default</span> ' : '';
          const roleName: string = (element.displayName);
          const defaultLanguageTemplate = `<div class="d-flex align-items-center"> ${roleName} <div class="d-block text-end"> ${status} ${status1} </div></div> `
          const item: any = {
            rolename: defaultLanguageTemplate,
            isDefault: element.isDefault,
            creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, h:mm:ss a'),
            name: element.displayName,
            id: element.id
          }
          this.roleList.push(item);

        });
        // const mfeConfig = this.rdsNewRoleMfeConfig
        // mfeConfig.input.roleList = [...this.RoleDatatable]
        this.isShimmer = false;
        // this.rdsNewRoleMfeConfig = mfeConfig;
      }
    });
    this.store.select(selectRoleForEdit).subscribe((res: any) => {
      if (res) {
        this.RolesData = {}
        if (res.role) {
          const itemRole: any = {
            displayName: res.role.displayName,
            id: res.role.id,
            isDefault: res.role.isDefault,
            name: res.role.displayName
          }
          this.RolesData = itemRole
        }
        if (res.permissions) {
          this.EditPermissionData = res.permissions
          this.permissionsList = this.ConvertArraytoTreedata(res.permissions)
          if (this.permissionsList && res.grantedPermissionNames) {
            this.selectedPermissionValues = [];
            this.checkSelectedNodes(res.grantedPermissionNames);
          }
        }
        this.RolesData = this.RolesData;
        this.EditShimmer = false;
        this.selectedPermissionValues = [...this.selectedPermissionValues];
        this.selectedPermissionList = [...res.grantedPermissionNames]
        // const mfeConfig = this.rdsNewRoleMfeConfig
        // mfeConfig.input.RolesData = this.Roledetails
        // mfeConfig.input.EditShimmer = false;
        // mfeConfig.input.permissionsList = this.treeData
        // mfeConfig.input.SelectedPermissionValues = [...this.selectedPermissions];
        // mfeConfig.input.SelectedPermissionList = [...res.grantedPermissionNames]
        // this.rdsNewRoleMfeConfig = { ...mfeConfig };

      }

    });
    this.store.select(selectAllPermissions).subscribe((res: any) => {
      if (res && res.items) {
        this.permissionsList = this.ConvertArraytoTreedata(res.items)
        // const mfeConfig = this.rdsNewRoleMfeConfig
        this.permissionsList = [... this.permissionsList];
        this.selectedPermissionValues = [...this.selectedPermissionValues]
        this.EditShimmer = false;
        // this.rdsNewRoleMfeConfig = { ...mfeConfig };
      }
    });
    // this.updateRoleData();
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
    if (node) {
      node.forEach((item: any) => {

        const selecteditem: any = {
          name: item,
          value: true
        }
        this.selectedPermissionValues.push(selecteditem);
      })
    }
  }
  FilterselectedPermissions(event: any) {
    this.selectedPermissionValues = [];
    for (const n of this.permissionsList) {
      this.selectedPermissionname(n, event);
    }


  }
  selectedPermissionname(node: any, checked: boolean) {
    if (node.selected == true) {
      this.selectedPermissionValues.push(node.data.name)
    }
    for (const n of node.children) {
      this.selectedPermissionname(n, checked);
    }

  }

  SetEditVar() {
    this.isEdit = false;

    // const mfeConfig = this.rdsNewRoleMfeConfig
    this.permissionsList = this.permissionsList;
    this.selectedPermissionValues = ''
    this.isEdit = false;
    // this.roleName = ''
    // this.rdsNewRoleMfeConfig = { ...mfeConfig };
  }

  // subscribeToAlerts() {
  //   this.alertService.alertEvents.subscribe((_alert: any) => {
  //     alert();
  //     this.currentAlerts = [];
  //     const currentAlert: any = {
  //       type: _alert.type,
  //       title: _alert.title,
  //       message: _alert.message,
  //       sticky: _alert.sticky,
  //     };
  //     this.currentAlerts.push(currentAlert);
  //   });
  // }
  onSaveRole(eventData: any) {
    if (eventData && eventData.role) {
      if (eventData.grantedPermissionNames && eventData.grantedPermissionNames.length) {
        this.FilterselectedPermissions(eventData.grantedPermissionNames)
        const data: any = {
          role: eventData.role,
          grantedPermissionNames: this.selectedPermissionValues
        };
        this.store.dispatch(saveRole(data));
      } else {
        const data: any = {
          role: eventData.role,
          grantedPermissionNames: [],
        };
        this.store.dispatch(saveRole(data));
      }
    }
  }
  onEditRole(event: any) {

    if (event) {
      this.store.dispatch(getRolByEdit(event));
      this.isEdit = true;
    } else {
      this.RolesData = undefined;
      // const mfeConfig = this.rdsNewRoleMfeConfig
      // this.rdsNewRoleMfeConfig = mfeConfig;
    }
  }
  onnewRole(data: any) {
    this.store.dispatch(getPermission());
    this.selectedPermissionValues = []
  }
  onRefreshRole() {
    // const mfeConfig = this.rdsNewRoleMfeConfig
    this.selectedPermissionValues = [];
    // this.rdsNewRoleMfeConfig = { ...mfeConfig };
    this.store.dispatch(getRoles([]));
  }
  onReset(event: any) {
    this.RolesData = undefined;
    this.permissionsList = [];
    this.selectedPermissionValues = [];
    this.selectedPermissionValues = [];
    // const mfeConfig = this.rdsNewRoleMfeConfig
    this.permissionsList = [... this.permissionsList];
    this.EditShimmer = true;
    // this.rdsNewRoleMfeConfig = mfeConfig;
  }
  deleteEvent(event: any) {
    this.store.dispatch(deleteRole(event.id))
  }
  onFilterPermission(event: any) {
    if (event && event.length) {
      this.FilterselectedPermissions(event)
      const data: any = {
        grantedPermissionNames: this.selectedPermissionValues
      };
      this.selectedPermissionValues = event;
      this.store.dispatch(getRoles(this.selectedPermissionValues));
      // const mfeConfig = this.rdsNewRoleMfeConfig
      this.selectedPermissionValues = [...this.selectedPermissionValues];
      // this.rdsNewRoleMfeConfig = { ...mfeConfig };
    }
  }
  onFilterPermissionReset(event: any) {
    this.permissionsList = [];
    this.selectedPermissionValues = [];
    this.selectedPermissionValues = [];
    // const mfeConfig = this.rdsNewRoleMfeConfig
    this.permissionsList = [... this.permissionsList];
    this.selectedPermissionValues = [... this.selectedPermissionValues];
    // this.rdsNewRoleMfeConfig = mfeConfig;
  }

  onAlertHide(event: any) {
    this.currentAlerts = event;
  }

  save(): void {
    const data = {
      role: this.RoleFromNewRole,
      grantedPermissionNames: this.selectedPermissionList,
    };
    this.onSaveRole(data);
    this.activePage = 0;
    var offcanvas = document.getElementById('RoleOffcanvas')
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.Roles = { RolesData: undefined, permissionsList: [] };
    this.RolesData = undefined;
    this.onReset(true);
    this.isRoleDataValid = false;
    // this.close();
  }
  getRoles() {
    this.onRefreshRole();
  }
  // Filter by permission canvas
  filterByPermission(event): void {
    this.selectedFilterId = '';
    this.canvasTitle = this.translate.instant('Filter By Permission');
    this.RolesData = undefined;
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById('PermissionOffcanvas')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
    this.onnewRole(true)
    this.activePage = 0;
  }
  onActionSelect(event: any) {
    if (event.actionId === 'delete') {
      this.deleteEvent(event.selectedData);
    } else if (event.actionId === 'edit') {
      this.editTableRowData(event.selectedData);
    }
  }
  editTableRowData(event): void {
    this.newRole(true);
    // this.canvasTitle = this.translate.instant('EDIT ROLE');
    this.onEditRole(event.id);
    this.selectedId = event.roleid;
  }

  newRole(isEdit: boolean): void {
    this.selectedId = '';
    this.viewCanvas = true;
    this.selectedPermissionValues = [];
    if (!isEdit) {
      this.showLoadingSpinner = true;
      this.canvasTitle = this.translate.instant('NEW ROLE'),
        this.Roles = { RolesData: undefined, permissionsList: [] };
      this.RolesData = undefined;
      this.onnewRole(true);
    } else {
      this.canvasTitle = this.translate.instant('EDIT ROLE');
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('RoleOffcanvas')
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
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

  close(): void {
    this.viewCanvas = false;
    this.Roles = { RolesData: undefined, permissionsList: [] };
    this.RolesData = undefined;
    this.onReset(true);
    this.isRoleDataValid = false;
    this.showLoadingSpinner = false;
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

  getRoleData(eventdata) {
    if (eventdata.isOnSave) {
      const data: any = {
        role: eventdata.role,
        grantedPermissionNames: this.selectedPermissionList,
      }
      this.onSaveRole(data);
      if (!eventdata) {
        this.EnableTreeSave = false;
      } else {
        this.EnableTreeSave = true;
      }
      this.viewCanvas = false;
      this.Roles = { RolesData: undefined, permissionsList: [] };
      this.RolesData = undefined;
      this.onReset(true);
      this.isRoleDataValid = false;
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

  filterPermissions(event): void {
    this.filterPermission(this.permissionsList, event.target.value);
  }

  filterPermission(nodes, filterText): any {
    nodes.forEach((node) => {
      if (node.data.displayName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) {
        node.styleClass = '';
        this.showParentNodes(node);
      } else {
        node.styleClass = 'd-none';
      }

      if (node.children) {
        this.filterPermission(node.children, filterText);
      }
    });
  }

  showParentNodes(_node): void {
    if (!_node.data.parentName || _node.data.parentName == null) {
      return;
    }
    // findParent
    // node.parent.styleClass = '';
    this.permissionsList.forEach((node: any) => {
      if (node.data.name === _node.data.parentName) {
        node.styleClass = '';
      } else {
        this.findParent(node.children, _node.data.parentName)
      }
    })
  }


  findParent(permissionsList, parentName) {
    permissionsList.forEach((node) => {
      if (node.data.name === parentName) {
        node.styleClass = '';
        if (node.data.parentName) {
          this.findParent(this.permissionsList, node.data.parentName)
        }
      } else {
        this.findParent(node.children, parentName);
      }
    })
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

  closeFilterPermission(): void {
    this.viewCanvas = false;
    this.FilterByPermissions = { filterPermissionsList: [] };
    this.onFilterPermissionReset(true);
  }

  getFilterPermissionList(event: any): void {
    this.selectedFilterPermissionList = event
  }

  saveFilterPermission(): void {
    this.onFilterPermission(this.selectedFilterPermissionList);
    this.activePage = 0;
    var offcanvas = document.getElementById('PermissionOffcanvas')
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  onchangeRoldate(event): void {
    this.RolesData = event;
  }
}
