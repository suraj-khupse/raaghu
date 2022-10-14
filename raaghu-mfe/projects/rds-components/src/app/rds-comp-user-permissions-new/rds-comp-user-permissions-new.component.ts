import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild,ViewEncapsulation} from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { PermissionNode, TreeType } from '../../models/pemission.model';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

declare let bootstrap: any;

@Component({
  selector: 'app-rds-comp-user-permissions-new',
  templateUrl: './rds-comp-user-permissions-new.component.html',
  styleUrls: ['./rds-comp-user-permissions-new.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsCompUserPermissionsNewComponent implements OnInit {

  actions: TableAction[] = [{ id: 'edit', displayName: 'Edit' }, { id: 'lock', displayName: 'Lock' },{ id: 'setpassword', displayName: 'Set Password' },{ id: 'delete', displayName: 'Delete' }]
  activePage: number = 0;
  canvasTitle: string = '';
  isReset: boolean = false;
  viewCanvas: boolean = false;
  selectedId: any = '';
  selectedOrganizationUnit: any = [];
  buttonSpinnerForNewUser: boolean = true;
  public user: any = {
    userInfo: undefined,
    userSettings: undefined,
    featureList: [],
  };
  rdsOrganizationTreeConfig: ComponentLoaderOptions;
  public navtabsItems: any = [];
 
  @Input() public userList: any = [];
  @Input() public roles: any = [];
  @Input() public userinfo: any;
  @Input() isShimmer: boolean = false;
  @Input() editShimmer: boolean = false;
  @Input() public isEdit: boolean = false;
  @Input() public OrganizationUnit: any = [];
  @Input() organizationTreeList: [];
  @Input() permissionsList: PermissionNode[] = [];
  @Input() selectedPermissions: any = [];
  @Input() selectedOrganizations: any = [];
  @Input() listItemsm = [
    { value: 'New User', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' }
  ];
  @Output() Saveuserinfo = new EventEmitter<{ item: any }>();
  @Output() CreateOrEditUser = new EventEmitter<{ id: any }>();
  @Output() UpdateUserPermission = new EventEmitter<{
    Permission: any;
    id: any;
  }>();
  @Output() searchItem = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<{ item: any }>();
  @Output() onClose = new EventEmitter<any>();
  @Input() Selectedata: any = [];
  Selecteorganizationdata: any = [];
  treeData: [] = [];
  organizationtreeData: [] = [];
  PermissionFiltertreeData: [] = [];
  selectedRoles: any = [];
  PermissinFilterSelectedata: any = [];
  @Input() userHeaders: TableHeader[] = [
      {
        key: 'name',
        displayName: 'Name',
        dataType: 'html',
        filterable: true,
        sortable: true,
      },
      {
        key: 'userId',
        displayName: 'User ID',
        dataType: 'html',
        filterable: true,
        sortable: true,
      },
      {
        key: 'roleName',
        displayName: 'Roles',
        dataType: 'html',
        filterable: true,
        sortable: true,
      },
      {
        key: 'statusTemplate',
        displayName: 'Status',
        dataType: 'html',
        filterable: true,
        sortable: true,
      }
    ]
  selectedTreeNode: number;
  constructor(public translate: TranslateService) { }
  @Input() orgTreeData = [];
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  TreeType: TreeType = {
    IconLabel: false,
    Normal: false,
    checkbox: true,
  };
  TreeNodeLabeles: any = {
    ParentItemPlaceholder: 'Parent node',
    ChildItemPlaceholder: 'Child Node',
    ParentDescriptionPlaceholder: 'Parent label',
    ChildDescriptionPlaceholder: 'Child label',
    ParentNodeTitle: 'Parent Node Title',
    ChildNodeTitle: 'Child node Title',
  };
  ngOnInit(): void {
    this.activePage = 0;
    this.rdsOrganizationTreeConfig = {
      name: 'RdsOrganizationTree',
      input: {
        organizationTreeData: this.orgTreeData,
        nodeColor: this.nodeColors,
        mutable: true,
        OrganizationTreeType: this.TreeType,
        OrganizationTreeLabeles: this.TreeNodeLabeles,
        ButtonLabel: '',
      },
      output: {
        onSelectAll: (onSelectAllevent) => {
          console.log(onSelectAllevent);
        },
        onSelectnode: (onSelectnodeevent) => {
          this.selectedTreeNode = onSelectnodeevent.item.data.id;
        },
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    const mfeConfig = this.rdsOrganizationTreeConfig;
    mfeConfig.input.orgTreeData = [...this.orgTreeData];
    this.rdsOrganizationTreeConfig = mfeConfig;
    this.selectedOrganizationUnit = [];
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
    this.getSelectedRoles();
    this.checkSelectedOrganizationUnits();
    const user: any = {
      userInfo: this.user.userInfo,
      roles: this.selectedRoles,
      organizationUnits: this.Selecteorganizationdata,
    };
    this.Saveuserinfo.emit({ item: user });
    this.isReset = true;
    this.activePage = 0;
    this.close();
    var offcanvas = document.getElementById('userOffcanvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.selectedId = '';
  }

  getUserData(event: any): void {
    if (event.next) {
      this.activePage = 1;
    }
    console.log('Save Data',event.user)
    this.user.userInfo = event.user;
  }
  getUserSettings(event: any): void {
    if (event.next) {
      this.activePage = 2;
    }
    this.user.userSettings = event.settings;
  }
  getSelectedFeaturesList(event: any): void {
    this.user.featureList = event;
  }

  newUser(event): void {
    this.buttonSpinnerForNewUser = true;
    this.selectedId = '';
    this.viewCanvas = true;
    this.navtabsItems = [
      {
        label: this.translate.instant('Basic'),
        tablink: '#User Information',
        ariacontrols: 'basics',
      },
      {
        label: this.translate.instant('Roles'),
        tablink: '#claims',
        ariacontrols: 'claims',
      },
      {
        label: this.translate.instant('Organization Units'),
        tablink: '#organizationUnit',
        ariacontrols: 'organizationUnit',
      },
    ];
    this.CreateOrEditUser.emit({ id: undefined });
    if (event) {
      this.canvasTitle = 'NEW USER';
      this.userinfo = undefined;
      event.stopPropagation();


    } else {
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('userOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
  }

  close(): void {
    this.viewCanvas = false;
    this.user = {
      userInfo: undefined,
      userSettings: undefined,
      featureList: [],
    };
    this.userinfo = undefined;
    this.onClose.emit();
    this.buttonSpinnerForNewUser = false;
  }

  editTableRowData(event): void {
    this.canvasTitle = 'EDIT USER';
    this.selectedId = event.id;

    this.viewCanvas = true;
    if (event) {
      this.canvasTitle = 'EDIT USER';
      this.navtabsItems = [
        {
          label: this.translate.instant('Basic'),
          tablink: '#User Information',
          ariacontrols: 'basics',
        },
        {
          label: this.translate.instant('Roles'),
          tablink: '#claims',
          ariacontrols: 'claims',
        },
        {
          label: this.translate.instant('Organization Units'),
          tablink: '#organizationUnit',
          ariacontrols: 'organizationUnit',
        },
        {
          label: this.translate.instant('Permissions'),
          tablink: '#permissions',
          ariacontrols: 'permissions',
        },
        {
          label: this.translate.instant('Claims'),
          tablink: '#claim',
          ariacontrols: 'claim',
        },
      ];
    } else {
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('userOffcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
    // this.newUser(undefined);
    this.CreateOrEditUser.emit({ id: this.selectedId });

  }
  getSelectedRoles() {
    this.selectedRoles = [];
    this.roles.forEach((item: any) => {
      if (item.isAssigned) {
        this.selectedRoles.push(item.roleName);
      }
    });
  }
  getSelectedPermissionsList(event: any): void {
    this.treeData = event;
    let permissionlist = [];
    if (this.treeData && this.treeData.length > 0) {
      this.Selectedata = this.iterateSelectedPermissions(
        this.treeData,
        permissionlist
      );
    }
    // console.log(permissionlist);

  }

  getSelectedorganizationunits(event: any): void {
    this.organizationtreeData = event;
    let organizationList = [];
    if (this.organizationtreeData && this.organizationtreeData.length > 0) {
      this.Selecteorganizationdata = this.iterateSelectedOrganizationUnits(
        this.organizationtreeData,
        organizationList
      );
    }
    console.log(organizationList);
  }
  iterateSelectedPermissions(arr: any, permissionList): any {
    arr.forEach((item: any) => {
      if (item.selectedChildren && item.selectedChildren.length > 0) {
        this.iterateSelectedPermissions(item.selectedChildren, permissionList);
      }
      permissionList.push(item.data.name);
    });
    return permissionList;
  }
  iterateSelectedOrganizationUnits(arr: any, organizationList): any {
    arr.forEach((item: any) => {
      if (item.selected) {
        organizationList.push(item.data.id);
      }
      if (item.children && item.children.length > 0) {
        this.iterateSelectedOrganizationUnits(item.children, organizationList);
      }
    });
    return organizationList;
  }


  getSelectedUserPermissionFilterList(event: any): void {
    if (event && event.length > 0) {
      this.PermissionFiltertreeData = event;
    }
  }
  savePermission() {
    this.UpdateUserPermission.emit({
      Permission: this.Selectedata,
      id: this.selectedId,
    });
  }
  search(event: any) {
    this.searchItem.emit(event.detail);
  }

  checkSelectedOrganizationUnits() {
    this.selectedOrganizationUnit = [];
    this.OrganizationUnit.forEach((item: any) => {
      if (item.isAssignedUnit) {
        this.selectedOrganizationUnit.push(item.code);
      }
    });
  }
  onActionSelect(event: any): void {
    if (event.actionId === 'edit') {
      this.editTableRowData(event.selectedData);
    } else if (event.actionId === 'delete') {
      this.deleteUser.emit(event.selectedData);
    }
  }

  getNavTabItems(): any {
    this.navtabsItems[0].label = this.translate.instant('Basic');
    this.navtabsItems[1].label = this.translate.instant('Roles');
    this.navtabsItems[2].label = this.translate.instant('Organization Units');
    return this.navtabsItems;
  }

  // fabmenu mobile ts


  onSelectMenu(event: any) {
    if (event.key === 'new') {
      event = new PointerEvent("click")
      this.newUser(event);
    }
  }
}
