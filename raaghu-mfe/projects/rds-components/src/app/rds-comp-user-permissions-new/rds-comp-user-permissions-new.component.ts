import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild,ViewEncapsulation} from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { PermissionNode, TreeType } from '../../models/pemission.model';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

declare let bootstrap: any;

@Component({
  selector: 'rds-comp-user-permissions-new',
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
  buttonSpinnerForNewUser: boolean = false;
  public user: any = {
    userInfo: undefined,
    userSettings: undefined,
    featureList: [],
  };
  rdsOrganizationTreeConfig: ComponentLoaderOptions;
  public navtabsItems: any = [];
  
  @Input() public userList: any = [];
  @Input() userinfo: any;
  @Input() claimValueData: any;
  @Input() claimDisplayArray: any = [];        
  @Input() isEdit: boolean = false;
  @Input() orgUnitListItem:any;
  @Input() OrganizationUnit: any = [];
  @Input() organizationTreeList: [];
  @Input() permissionsList: PermissionNode[] = [];
  @Input() selectedPermissions: any = [];
  @Input() selectedOrganizations: any = [];
  @Input() userTableData:any=[];
  @Input() orgTreeData:any;
  @Input() permissionTreeData:any;
  @Input() roleListItem: any;
  @Input() entityDisplayName:any
  @Input() listItemsm = [
    { value: 'New User', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' }
  ];
  @Output() Saveuserinfo = new EventEmitter<{ item: any }>();
  @Output() EditUserEmitter = new EventEmitter<{ id: any }>();
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
  claims_actions: any = [
    {
      id: 'delete',
      displayName: 'Delete',
    },
  ];
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
  @Output() getPermissionEmitter= new EventEmitter<any>();
  @Output() addClaimEmmiter = new EventEmitter<any>();
  @Output() onClaimSaveEmmiter = new EventEmitter<any>();
  @Output() deleteClaimEmmiter = new EventEmitter<any>();

  constructor(public translate: TranslateService) { }
 // @Input() orgTreeData = [];
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

  addClaim(data:any){
    if (this.selectedId) {
      //this.emitClaimData.id = this.selectedId;
    }
    this.claimDisplayArray.push(data);
    this.user.claimsData = this.claimDisplayArray;
  }
  
  deleteClaim(event){
    this.claimDisplayArray = event;
    this.user.claimsData = this.claimDisplayArray;
  }

  save(): void {
    this.Saveuserinfo.emit(this.user);
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
    debugger
    this.user.userInfo = event.user;
  }
  getUserSettings(event: any): void {
    if (event.next) {
      this.activePage = 2;
    }
    this.user.userSettings = event.settings;
  }
  
  getAllselectedPermissions(event:any){
    this.user.permissionList = event;
  }

  newUser(event): void {
    this.getPermissionEmitter.emit(true);
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
        label: this.translate.instant('Permissions'),
        tablink: '#permissions',
        ariacontrols: 'permissions',
      },
      {
        label: this.translate.instant('Claims'),
        tablink: '#claims',
        ariacontrols: 'claims',
      },
      
    ];
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
    this.getPermissionEmitter.emit(this.selectedId);
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
          label: this.translate.instant('Permisssions'),
          tablink: '#permissions',
          ariacontrols: 'permissions',
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
    this.EditUserEmitter.emit(this.selectedId);

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


  onSelectMenu(event: any) {
    if (event.key === 'new') {
      event = new PointerEvent("click")
      this.newUser(event);
    }
  }
}
