import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ClaimTypeDto,
  ComponentLoaderOptions,
  GetPermissionListResultDto,
  IdentityRoleClaimDto,
  IdentityRoleDto,
} from '@libs/shared';
// import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import {
  deleteRole,
  getAllClaimTypes,
  getClaimTypes,
  getPermission,
  getRolByEdit,
  getRoles,
  saveClaims,
  savePermissions,
  saveRole,
  updateRole,
} from 'projects/libs/state-management/src/lib/state/role/role.actions';
import {
  selectAllClaimsTypesRoles,
  selectAllPermissions,
  selectAllRoles,
  selectClaimsTypeByRole,
  selectRoleForEdit,
} from 'projects/libs/state-management/src/lib/state/role/role.selector';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { NgForm } from '@angular/forms';

declare let bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.4s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.4s', style({ opacity: 1 }))],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  selectedParent: any = null;
  isAnimation: boolean = true;
  viewCanvas: boolean = false;
  activePage: number = 0;
  selectedId: any;
  viewCreateOrganisationCanvas: boolean = false;
  selectedTreeNode: number = 0;
  canvasTitle: string = 'New Role';
  navtabsItems: any;
  treeData1 = [
    {
      data: {
        parentId: null,
        code: '00001',
        displayName: null,
        memberCount: 1,
        roleCount: 3,
        lastModificationTime: '2022-05-06T00:08:34.702+05:30',
        lastModifierUserId: 6,
        creationTime: '2022-04-29T11:43:17.223+05:30',
        creatorUserId: 1,
        id: 1,
      },
      level: 1,
      selected: false,
      label: 'waii',
      expandedIcon: 'fa fa-folder-open text-warning',
      collapsedIcon: 'fa fa-folder text-warning',
      expanded: true,
    },
  ];
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  rdsOrganizationTreeConfig: ComponentLoaderOptions;
  treeData2: any;
  node: string = '';
  selectedNodeInfo: any;
  isEdit: boolean = false;
  selectedPermissionList: any = [];
  actionId: 'edit' | 'new' | 'delete' = 'new';
  isReset: boolean = false;
  EditShimmer: boolean = false;
  Roledetails: any = undefined;
  treeData: any = [];
  selectedPermissions: any = [];
  claimValueData: any[] = [];
  claimDisplayArray: any[] = [];
  emitRoleData: any = undefined;
  emitClaimData = { claimData: [], id: undefined };
  saveNextBtn = 'SAVE';
  getOriginalData: any;
  permissionTreeData: any = [];
  emitPermissionsData = { name: undefined, permissions: { permissions: [] } };
  public claims_actions: any = [
    {
      id: 'delete',
      displayName: 'Delete',
    },
  ];
  entityDisplayName: string = '';
  dataSaved: boolean;
  isSaved: boolean = false;
  constructor(
    private store: Store,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public datepipe: DatePipe,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.isAnimation = true;

    // Permissions
    this.store.dispatch(getPermission('admin'));
    this.store.select(selectAllPermissions).subscribe((res: any) => {
      if (res && res.groups) {
        this.permissionTreeData = res.groups;
        this.isEdit = false;
      }
    });

    // Claim Types
    this.store.dispatch(getAllClaimTypes());
    this.store
      .select(selectAllClaimsTypesRoles)
      .subscribe((res: ClaimTypeDto[]) => {
        if (res) {
          this.claimValueData = [];
          res.forEach((element) => {
            const data: any = {
              id: element.id,
              value: element.name,
              some: element.name,
            };
            this.claimValueData.push(data);
          });
        }
      });

    this.store.dispatch(getRoles());
    this.store.select(selectAllRoles).subscribe((res: any) => {
      this.isAnimation = false;
      if (res && res.items) {
        const resArrayId: any[] = [];
        res.items.forEach((element) => {
          const item = {
            id: element.id,
            creationTime: undefined,
            creatorId: undefined,
            lastModificationTime: undefined,
            lastModifierId: null,
            isDeleted: false,
            deleterId: null,
            deletionTime: undefined,
            parentId: this.selectedParent,
            code: undefined,
            displayName: element.name,
            roles: [],
            concurrencyStamp: undefined,
            extraProperties: {},
          };
          resArrayId.push(item);
        });
        this.getOriginalData = resArrayId;
        this.treeData2 = this._arrayToTreeConverterService.createTree(
          this.getOriginalData,
          'parentId',
          'id',
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
        if (this.treeData2.length > 0) {
          this.treeData1 = this.treeData2;
        } else {
          this.treeData1 = this.treeData1;
        }
        this.saveAndNext();
      }
    });
    this.store.dispatch(getClaimTypes(this.emitClaimData.id));
    this.store
      .select(selectClaimsTypeByRole)
      .subscribe((res: any) => {
        if (res) {
          this.claimDisplayArray = []
            res.forEach((element) => {
              this.claimDisplayArray.push({
                id:element.roleId,
                claimType: element.claimType,
                claimValue: element.claimValue,
              });
            });
        }
      });

    this.store.select(selectRoleForEdit).subscribe((res: any) => {
      if (res) {
        this.Roledetails = {};
        const itemRole: any = {
          name: res.name,
          id: res.id,
          isDefault: res.isDefault,
          isPublic: res.isPublic,
        };
        this.Roledetails['name'] = res.name;
        this.Roledetails['id'] = res.id;
        this.Roledetails['isDefault'] = res.isDefault;
        this.Roledetails['isPublic'] = res.isPublic;
        this.Roledetails = itemRole;
        this.EditShimmer = false;
      }
    });
  }

  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }

  close(): void {
    this.viewCanvas = false;
    this.activePage = 0;
    this.emitRoleData = undefined;
    this.Roledetails = undefined;
    // this.claimDisplayArray = [];
    this.selectedPermissions = [];
    this.EditShimmer = false;
  }

  getNavTabItems(): any {
    return this.navtabsItems;
  }

  onCancelOrganisation(): void {
    this.viewCreateOrganisationCanvas = false;
    this.permissionTreeData = undefined;
    this.activePage = 0;
  }

  openCanvas(): void {
    var offcanvas = document.getElementById('addNodeOffcanvas');
    if (offcanvas) {
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
      offcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
        this.viewCreateOrganisationCanvas = false;
        this.selectedNodeInfo = undefined;
        this.emitRoleData = undefined;
        this.Roledetails = undefined;
      });
    }
  }

  RoleInfo(eventdata: any): void {
    this.emitRoleData = eventdata.roledata;
    if (eventdata.isOnSave) {
      if (this.selectedId) {
        const itemRole: any = {
          name: this.Roledetails.name,
          id: this.Roledetails.id,
          isDefault: this.Roledetails.isDefault,
          isPublic: this.Roledetails.isPublic,
        };
        this.store.dispatch(updateRole(itemRole));
        this.viewCreateOrganisationCanvas = false;
      } else {
        this.store.dispatch(saveRole(this.emitRoleData));
        this.viewCreateOrganisationCanvas = false;
      }
    }
  }

  getAllselectedPermissions(event: any): void {
    this.emitPermissionsData.permissions.permissions = event;
  }

  addClaim(data: any): void {
    if (this.actionId == 'edit') {
      this.emitClaimData.id=this.selectedId ;
    }
    this.claimDisplayArray.push(data);
  }
  deleteClaim(event: any): void {
    this.emitClaimData.id=this.selectedId;
    this.claimDisplayArray = event;
    this.onClaimSave();
  }
  onClaimSave() {
    this.emitClaimData.claimData = this.claimDisplayArray
    this.store.dispatch(saveClaims(this.emitClaimData));
    this.viewCreateOrganisationCanvas= false;
  }
  saveAndNext() {
    if (this.selectedId) {
        const itemRole: any = {
          name: this.Roledetails.name,
          id: this.Roledetails.id,
          isDefault: this.Roledetails.isDefault,
          isPublic: this.Roledetails.isPublic,
        };
        this.store.dispatch(updateRole(itemRole));
        this.store.dispatch(savePermissions(this.emitPermissionsData));
        this.emitPermissionsData = {
          name: undefined,
          permissions: { permissions: [] },
        };
        this.viewCreateOrganisationCanvas = false;
        
      
    } else {
      if (!this.isSaved && this.emitRoleData) {
        this.store.dispatch(saveRole(this.emitRoleData));
        this.isSaved = true;
      } else if (this.isSaved) {
        this.getOriginalData.forEach((ele) => {
          if (this.emitRoleData.name == ele.displayName) {
            this.emitPermissionsData.name = ele.displayName;
            this.store.dispatch(savePermissions(this.emitPermissionsData));
          }
        });
        this.isSaved = false;
        this.emitPermissionsData = {
          name: undefined,
          permissions: { permissions: [] },
        };
        this.viewCreateOrganisationCanvas = false;
      }
      this.viewCreateOrganisationCanvas = false;
    }
    this.selectedId= undefined;
    this.emitRoleData = undefined;
        this.Roledetails = undefined;
  }

  onDeleteNode(data: any): void {
    this.store.dispatch(deleteRole(data.id));
  }

  getSelectedParent(parent): void {
    // this.selectedParent = parent;
    this.selectedId= undefined;
    this.canvasTitle = 'New Role';
    this.isEdit = false;
    this.entityDisplayName = 'admin';
    this.store.dispatch(getPermission('admin'));

    this.navtabsItems = [
      {
        label: this.translate.instant('Role'),
        tablink: '#Role',
        ariacontrols: 'Role-information',
      },
      {
        label: this.translate.instant('Permission'),
        tablink: '#Permission',
        ariacontrols: 'Permission',
      },
    ];
    this.viewCreateOrganisationCanvas = true;
    setTimeout(() => {
      this.openCanvas();
    }, 100);
  }

  // Edit Action click
  onNodeEdit(node: any): void {
    this.selectedId = node.data.id;
    this.emitPermissionsData.name = node.data.displayName;
    this.store.dispatch(getPermission(this.emitPermissionsData.name));
    this.actionId = 'edit';
    this.entityDisplayName = node.data.displayName;
    this.canvasTitle = 'Edit Role';
    this.navtabsItems = [
      {
        label: this.translate.instant('Role'),
        tablink: '#Role',
        ariacontrols: 'Role-information',
      },
      {
        label: this.translate.instant('Permission'),
        tablink: '#Permission',
        ariacontrols: 'Permission',
      },
      {
        label: this.translate.instant('Claims'),
        tablink: '#Claims',
        ariacontrols: 'Claims',
      },
    ];
    this.store.dispatch(getRolByEdit(node.data.id));
     this.store.dispatch(getClaimTypes(this.selectedId));

     this.viewCreateOrganisationCanvas = true;
     setTimeout(() => {
      this.openCanvas();
    }, 100);
  }
}
