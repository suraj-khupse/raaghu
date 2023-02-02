import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
// import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
// import { getOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.actions';
// import { selectOrganizationUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.selector';
import {
  assignableRoles,
  availbleOrganizationUnit,
  changePasswordUser,
  deleteUser,
  getAllClaimTypes,
  getClaimTypes,
  getUserForEdit,
  getUserOrgForEdit,
  getUserPermission,
  getUserRolesForEdit,
  getUsers,
  saveClaims,
  saveUser,
  updateUser,
  UpdateUserPermission,
} from 'projects/libs/state-management/src/lib/state/user/user.actions';
import {
  selectAllClaimTypes,
  selectAllUserFilterPermissions,
  selectAllUsers,
  selectAssignableRoles,
  selectAvailableOrgUnit,
  selectClaimTypes,
  selectUserForEdit,
  selectUserOrgForEdit,
  selectUserRolesForEdit,
} from 'projects/libs/state-management/src/lib/state/user/user.selector';
import {
  AlertService,
  ComponentLoaderOptions,
  UserAuthService,
} from '../../../libs/shared/src/public-api';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {

  permissionTreeData = [];
  userList: any = [];
  userHeaders: TableHeader[] = [
    { key: 'name',displayName: 'Name',dataType: 'html',filterable: true,sortable: true,},
    { key: 'statusTemplate',displayName: 'Status',dataType: 'html',filterable: true,sortable: true,},
    { key: 'email',displayName: 'email',dataType: 'html',filterable: true,sortable: true,},
    { key: 'surName',displayName: 'surName',dataType: 'html',filterable: true,sortable: true,},    
  ]

  isAnimation: boolean = true;

  title: string = 'user';
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
 TreeData: any = [];
  treeData1: any;
  isAssigned: boolean;
  isShimmer: boolean;
  roleListItem: any[];
  orgUnitListItem: any[];
  roleNamePermissionTree: string;
  adminId: any;
  savePermissionData: any;
  saveClaimData: any;
  userNameToSearch: string;
  userId: any;
  claimDisplayArray: any[] = [];
  constructor(
    public datepipe: DatePipe,
    private store: Store,
    private alertService: AlertService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public translate:TranslateService,
    public userAuthService:UserAuthService
  ) { }
  public rdsUserMfeConfig: ComponentLoaderOptions={ name:'RdsCompUserPermissionsNew'}
  UserPermissionFiltertreeData: any = [];
  roleName: any;
  roles: any=[] ;
  userData:any=[];
  user:any=[];
  userinfo: any = undefined;
  organizationTreeList:any=[];
  permissionsList:any=[];
  Permission: any = [];
  isEdit: boolean = false;
  selectedPermissions: any = [];
  selectedFilterPermissions: any = [];
  organizationUnits: any = [];
  resOrganizationUnit:any=[];
  SelectedOrganizationUnit: any = [];
  selectedOrganizations:any = [];
  claimValueData: any[] = [];
  Selectedata:any=[];
  navtabsItems: any = [];
  Selecteorganizationdata:any=[];
  treeData:any=[];
  //organizationtreeData:any=[];
  PermissionFiltertreeData:any=[];
  selectedRoles:any=[];
  listItemsm:any=[];
  orgTreeData: any = [];
  UserTableData: any = [];
  entityDisplayName: string = '';

  searchUserId(){
    if(this.userNameToSearch)
    this.userList.forEach(ele=>{
      if(ele.name == this.userNameToSearch){
        this.userId = ele.id;
        this.Saveuserinfo(undefined);
      }
    })
    this.userNameToSearch = undefined;
  }
  
  ngOnInit(): void {
    if(this.userAuthService.currentLanguage){
      this.translate.use(this.userAuthService.currentLanguage);
    }
    this.userAuthService.languageObservable$.subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.store.dispatch(getUsers());
    this.store.select(selectAllUsers).subscribe((res: any) => {
      this.userList = [];
      if (res && res.items) {
        //this.isAnimation = false;
        res.items.forEach((element: any) => {
          let statusTemplate; 
          if (element.isActive) {
            statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }
          
          const item: any = {
            name: element.userName,
            statusTemplate: statusTemplate,
            id: element.id,
            email: element.email,
            surName:element.surname,
          }
          if(element.userName == 'admin'){
            this.adminId = element.id;
          }
          this.userList.push(item);
        });
        if(this.userNameToSearch)this.searchUserId();
      }
    });

    this.store.select(selectAssignableRoles).subscribe((res: any) => {
      if (res && res.items) {
        this.roleListItem =  [];
            this.isAnimation = false;
            res.items.forEach((element: any) => {
            const item: any = {
            some: element.name,
            value:element.id,
            isSelected:false
          }
          this.roleListItem.push(item);
        });
      }
    });

    this.store.select(selectUserRolesForEdit).subscribe(res=>{
     if(res){
      res.items.forEach(el=>{
        this.roleListItem.forEach(e=>{
          if(e.id == el.id){
            e.isSelected = true;
          }
        })
      })
     }
   })  
    
    this.store.dispatch(availbleOrganizationUnit());
    this.store.select(selectAvailableOrgUnit).subscribe((res: any) => {
      if (res && res.items) {
        this.orgUnitListItem =  [];
            this.isAnimation = false;
            res.items.forEach((element: any) => {
            const item: any = {
            some: element.displayName,
            value:element.id,
            isSelected:false
          }
          this.orgUnitListItem.push(item);
        });
      }
      
    });

    this.store.select(selectUserOrgForEdit).subscribe(res=>{
      if(res){
        this.orgUnitListItem.forEach(ele=>{
          res.forEach(el=>{
            if(el.code == ele.value){
              ele.isSelected = true;
            }
          })
        })
      }
    })


    this.store.select(selectUserOrgForEdit).subscribe(res=>{
      if(res){
        this.orgUnitListItem.forEach(ele=>{
          res.forEach(el=>{
            if(el.code == ele.value){
              ele.isSelected = true;
            }
          })
        })
      }
    })



    this.store.select(selectClaimTypes).subscribe(res=>{
      if(res){
        
      }
    })
    
  }

  getClaimsEmitter(id=this.adminId){
    if(id == this.adminId)
      this.store.dispatch(getAllClaimTypes());
    else
      this.store.dispatch(getAllClaimTypes())
    this.store
      .select(selectAllClaimTypes)
      .subscribe((res) => {
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
  }

  getPermissionEmitter(id=this.adminId){
    this.store.dispatch(getUserPermission(id));
    if(id == this.adminId){
      this.store.dispatch(assignableRoles());
      this.store.dispatch(availbleOrganizationUnit());
    }
    this.store.select(selectAllUserFilterPermissions).subscribe((res: any) => {
      if (res && res.groups) {
        this.permissionTreeData = res.groups;
        if(id == this.adminId){
          this.entityDisplayName = 'admin';
        }
        else{
          this.entityDisplayName = '';
        }
        this.isEdit = false;
      }
    });
  }
  savepassword(event){
    this.store.dispatch(changePasswordUser(event));
  }
  Saveuserinfo(user?: any){
    this.savePermissionData = user? user.permissionList: this.savePermissionData;
    this.saveClaimData = user? user.claimsData: this.saveClaimData;
   if(this.userId || user.userInfo.id){
    this.userId = user?.userinfo.id? user.userInfo.id:this.userId;
    let tempClaimData = [];
    this.saveClaimData?.forEach((ele)=>{
      const item = {
        claimType:ele.claimType,
        claimValue:ele.claimValue,
        userId:this.userId
      }
      tempClaimData.push(item);
    })
    this.store.dispatch(saveClaims(tempClaimData))
    const data = {
      id:this.userId,
      body:{permissions:this.savePermissionData}
    }
    this.store.dispatch(UpdateUserPermission(data));
    this.saveClaimData = undefined;
    this.savePermissionData = undefined;
    this.claimDisplayArray = [];
   }
    if(user && user.userInfo.id){
        this.store.dispatch(updateUser({id:user.userInfo.id,body:user.userInfo}));
    }
    else{
        this.userNameToSearch = user.userInfo.userName;
        this.store.dispatch(saveUser(user.userInfo));
    }
    this.removeSelectedData();
  }   

  removeSelectedData(){
    this.orgUnitListItem.forEach(el=>{
      el.isSelected = false;
    });

    this.roleListItem.forEach(e=>{
      e.isSelected = false;
    })

  }

  getEditUser (user: any) {
    this.store.dispatch(getUserForEdit(user));
    this.store.dispatch(getUserRolesForEdit(user));
    this.store.dispatch(getUserOrgForEdit(user));
    this.store.dispatch(getClaimTypes(user))
    this.store.select(selectUserForEdit).subscribe(res=>{
      const data: any = {
        email : user.userInfo.email,
        isActive:user.userInfo.isActive,
        name:user.userInfo.name,
        password:user.userInfo.password,
        surname:user.userInfo.surname,
        id:user.userInfo.id,
        roleNames:user.roles.name,
        userName:user.userInfo.userName,
        phoneNumber:user.userInfo.phoneNumber
       };
     console.log(res);
   })  
  }
  
  onClose(event: any){
    this.userinfo = undefined;
  }
  deleteUser(eventData: any){
    this.store.dispatch(deleteUser(eventData.id));
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
    });
  }

 
   
}
