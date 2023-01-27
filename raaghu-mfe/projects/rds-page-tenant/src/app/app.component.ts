import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService, ComponentLoaderOptions, UserAuthService } from '@libs/shared';
import { } from '@libs/state-management';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { selectAllTenants, selectEditionComboboxItems, selectTenantFeature, selectTenantInfo } from 'projects/libs/state-management/src/lib/state/tenant/tenant.selector';
import { deleteTenant, getEditionComboboxItems, getTenantFeaturesForEdit, getTenantForEdit, getTenants, saveTenant, updateTenant, updateTenantFeatureValues } from 'projects/libs/state-management/src/lib/state/tenant/tenant.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    DatePipe
  ],
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
  title = 'tenant';
  tenantData: any = {};
 tenantId = undefined
  editionList: any = [];
  tenantFeatureValues: any;
  tenantTableHeader: TableHeader[] = [
    { displayName: 'Name', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Role', key: 'roleTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
  ]
  isAnimation: boolean = true;

  featureData : any = [];
  tenantTableData: any = []
  isShimmer: boolean= true;
  editShimmer: boolean =false;
  constructor(public datepipe: DatePipe, 
    private store: Store,
    private userAuthService:UserAuthService, 
    private translate: TranslateService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService) { }
  
  onSaveTenant(tenant: any) {        
    if (tenant.id) {
         this.tenantId= tenant.id;
        const data: any = {
          name: tenant.tenantInfo.name,
          editionId: tenant.tenantInfo.editionId[0],
          activationState : tenant.tenantInfo.activationState
        };      
        const body = {body:data,id:this.tenantId};      
        this.store.dispatch(updateTenant(body))
        let body1 = {
        feature : tenant.featureValues,
        id : tenant.id
        }
      this.store.dispatch(updateTenantFeatureValues(body1))
  }
else {
  const data: any = {
    name: tenant.tenantInfo.name,
    adminEmailAddress: tenant.tenantInfo.adminEmailAddress,
    adminPassword: tenant.tenantInfo.adminPassword,
    editionId: tenant.tenantInfo.editionId[0],
    activationState: tenant.tenantInfo.activationState,
  };
  this.store.dispatch(saveTenant(data, 30))
}
}
getHostFeatureEmitter(){
  this.store.dispatch(getTenantFeaturesForEdit(undefined));
}
  
onEditTenant(selectedTenant: any){
  this.store.dispatch(getTenantForEdit(selectedTenant));
  this.store.select(selectTenantInfo).subscribe(res=>{
    if(res){
      this.tenantData = res;
    }
  })  
  this.store.dispatch(getTenantFeaturesForEdit(selectedTenant))
}

deleteEvent(event: any){
  this.store.dispatch(deleteTenant(event.id))
}
// onSaveFeatures: (feature: any) => {
    // this.store.dispatch(updateTenantFeatureValues(feature))
// }
onSaveTenantHost(featureHost : any){
  this.store.dispatch(updateTenantFeatureValues(featureHost))
  console.log("Feature Host" ,featureHost)
}
  
  
  ngOnInit(): void {
    this.isAnimation = true;

    if(this.userAuthService.currentLanguage){
      this.translate.use(this.userAuthService.currentLanguage);
    }
    this.userAuthService.languageObservable$.subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    }) 

    this.store.dispatch(getTenants());
    this.store.select(selectAllTenants).subscribe((res: any) => {
      this.tenantTableData = [];
      if (res && res.items) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          let statusTemplate;
          statusTemplate =  element.activationState ?'<div><span class="badge badge-secondary">Inactive</span></div>': '<div> <span class="badge badge-success">Active</span></div>'
          const tenantInfoTemplate = `<div class=""><div><div><span>${element.name}</span></div><span class="text-muted">${element.adminEmailAddress} </span></div></div>`;

          const item: any = {
            tenantInfoTemplate: tenantInfoTemplate,
            statusTemplate: statusTemplate,
            roleTemplate: 'Admin',
            editionTemplate:element.editionName,
            id: element.id,
            name: element.name,
            adminEmailAddress : element.adminEmailAddress
          }
          this.tenantTableData.push(item);
        });
        this.isShimmer = false;
        
      }
    });

    this.store.select(selectTenantInfo).subscribe((res: any) => {
      if (res) {
        this.tenantData = {};
        this.tenantData['name'] = res.name;
        this.tenantData['adminEmailAddress'] =  res.adminEmailAddress;
         this.tenantData['editionId'] = (res.editionId && res.editionId !== null) ? [res.editionId.toString()] : res.editionId;
        this.tenantData['adminPassword'] = res.adminPassword;
         this.tenantData['activationState'] = res.activationState;
        this.tenantData['id'] = res.id;
        this.editShimmer = false
      }
    });

    this.store.dispatch(getEditionComboboxItems())
    this.store.select(selectEditionComboboxItems).subscribe((res: any) => {
      if (res) {
        this.editionList = [];
          res.items.forEach((element: any) => {
          const item: any = {
            value: element.id,
            displayText: element.displayName,
          }
          this.editionList.push(item);
        });
      }
    })

  
    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res) {
        this.featureData = []
       res.groups.forEach(elements =>{
        elements.features.forEach(el =>{
           const data ={
            name:el.name,
            value:el.value
           }
           this.featureData.push(data);
        })
        
       })

      }
    })

  }
 
}
