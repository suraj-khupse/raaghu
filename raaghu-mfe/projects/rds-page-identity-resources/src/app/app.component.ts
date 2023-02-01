import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, Injector, Input } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { claimTypesAll, deleteIdentityResource, getAllIdentityResources, getIdentityResource, saveIdentityResource, updateIdentityResource } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.actions';
import { selectA, selectClaimTypesAll, selectIdentityResource } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Claims, Resource } from '../modal/IdentityResourcemodals';

declare let bootstrap: any;
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
  userClaims: any;

  constructor(public translate: TranslateService, public store: Store) { }
  viewCanvas: boolean = false;
  isAnimation: boolean = true;
  isShimmer : boolean = false;
  showLoadingSpinner:boolean=false
  offCanvasId: string = 'EditIdentityresource'
  title = 'identity-resources';
  offCanvasTitle = 'New Identity Resources'
  activePage: any;
  selectId: any;
  identity: any = {};
  onEditBasic: any = {};
  public selectedProperties: any = [];
  editShimmer: boolean = true;
  PropertyList:any=[];
  PropertyTableData:any=[];
  isEdit:boolean=false;
  public activeTab: number = 0;
  propertyTableData: any = {};
  BasicResource: Resource;
  public navtabsItems: any = [

  ];
  propertyTableHeader: TableHeader[] = [
    { displayName: 'Key', key: 'key', dataType: 'text', dataLength: 30, sortable: false, required: true },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, sortable: false, required: true },
  ]
   property_actions: any = [
    {
      id: 'delete',
      displayName: 'Delete'
    }
  ];
  ResourceTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'Name',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'DisplayName',
      key: 'Displayname',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Description',
      key: 'Description',
      dataType: 'text',
    },
  ];
  ResourceTableData: any = [];
  Properties: any = ([] = [{ key: 'ShairedSecrets', Value: '12345' }]);
  finalResourceData: any;
  ResourceData: any = {};

  basicInfo: any = {};
  clientResourceData: any = [
    {
      displayName: 'abc',
      left: false,
      id: '1',
      name: 'aaa',
    },
    {
      displayName: 'eee',
      left: false,
      id: '4',
      name: 'test',
    }

  ];
 
  actions = [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }];
  onActionSelection(event: any) {
    if (event.actionId === 'delete') {

      this.store.dispatch(deleteIdentityResource(event.selectedData.id));
    } else if (event.actionId === 'edit') {
      this.ResourceData.forEach((claims)=>{
        if(claims){
          claims.left = false;
        }
      })
      this.isEdit = true;
      this.EditIdentyresource(event)
      this.selectId = event.selectedData.id;
      this.store.dispatch(getIdentityResource(event.selectedData.id));
    }
  }

  onPropertyChange(event): void {
    if (event && event.property) {
      this.selectedProperties = event.properties;
      if(this.selectId){
        this.activePage = 2;
      }
      else{
        this.onSave();
      }
      
    }
  }
  ngOnInit(): void {
  this.isAnimation=true;
  this.isShimmer=true;

    this.store.dispatch(getAllIdentityResources());
    this.store.select(selectA).subscribe((res: any) => {
      this.ResourceTableData = [];
      if (res && res.items) {
        this.isAnimation=false;
      
        res.items.forEach((ele: any) => {
          const data: any = {
            id: ele.id,
            Name: ele.name,
            Displayname: ele.displayName,
            Description: ele.description,

          }
          this.ResourceTableData.push(data);
        });
        this.isShimmer=false;
        this.editShimmer = false;
      }
    })

    this.store.select(selectIdentityResource).subscribe((res: any) => {
      
      if (res) {

        const data: any = {
          name: res.name,
          description: res.description,
          displayName: res.displayName,
          emphasize: res.emphasize,
          enabled: res.enabled,
          required: res.required,
          showInDiscoveryDocument: res.showInDiscoveryDocument,
        };
        this.basicInfo = data

        if (res.userClaims && res.userClaims.length > 0) {
          this.ResourceData.forEach((claim: any) => {
       
            claim.left =false;
            if (claim) {
              const _claim = res.userClaims.find(
                (x: any) => x.type == claim.displayName
              );
              if (_claim) {
                claim.left = true;
              }
            }
          });
        }
        this.propertyTableData = [];
        if (res.properties && res.properties.length > 0) {
          res.properties.forEach((element) => {
            const _PropData = {
              apiScopeId: element.apiScopeId,
              value: element.value,
              key: element.key,
            };
            this.propertyTableData.push(_PropData);
          });
        }
      }
    });
    this.store.dispatch(claimTypesAll());
    this.store.select(selectClaimTypesAll).subscribe((res: any) => {
      if (res) {
        this.ResourceData = [];
        res.forEach(element => {
          let item = {
            id: element.id,
            displayName: element.name,
            left: false
          };
          this.ResourceData.push(item);
        })
      }
    })


  }
  openCanvas(edit: boolean = false): void {
    this.viewCanvas = true;
    this.showLoadingSpinner=true;
    this.isEdit = false;
    this.offCanvasTitle="New Identity Resources";
    this.basicInfo= {}
    this.ResourceData.forEach((claims)=>{
      if(claims){
        claims.left = false;
      }
    })
    this.navtabsItems = [{
      label: 'Basics',
      tablink: '#Basics',
      ariacontrols: 'Basics',
    },
    {
      label: 'Claim',
      tablink: '#Claim',
      ariacontrols: 'Claim',
    },
    ]
    this.activePage = 0;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offCanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  
  }

  
  EditIdentyresource(event): void {
    this.viewCanvas = true;
    this.isEdit = true;
    this.offCanvasTitle = 'Edit Identity Resources';
    this.navtabsItems = [{
      label: 'Basics',
      tablink: '#Basics',
      ariacontrols: 'Basics',
    },
    {
      label: 'Claim',
      tablink: '#Claim',
      ariacontrols: 'Claim',
    },
    {
      label: 'Properties',
      tablink: '#Properties',
      ariacontrols: 'Properties',
    },]
    this.selectId = event.selectedData.id;
    this.BasicResource = event.selectedData
    setTimeout(() => {
      var offcanvas = document.getElementById('EditIdentityresource');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
    this.activePage = 0;
  }
  onBasicInfoSave(event: any) {
    this.activePage = 1;
    this.basicInfo = event
    console.log(this.basicInfo)
  }

  onClientResourceSave(event: any) {
    this.identity.ResourceData = event;
  }

  onPropertiesSave(event: any) {
    this.identity.propertyTableData = event.Property;
    this.onSave();
  }

  onTabClick(index: any): void {
    this.activeTab = index
  }
  closeCanvas(): void {
    this.viewCanvas = false;
    this.showLoadingSpinner = false;
  
  }
  onSave() {
    const _data: any[] = [];
    if (this.identity && this.identity.ResourceData) {
      this.identity.ResourceData.forEach(ele => {
        const _claimsData = {
          identityResourceId: ele.id,
          type: ele.displayName
        }
        _data.push(_claimsData)
      });
    }

    if (this.selectId) {
      const properties: any = [];
      if (this.identity && this.identity.propertyTableData) {
        this.identity.propertyTableData.forEach(ele => {
          const _claimsData = {
            identityResourceId: this.selectId,
            key: ele.key,
            value: ele.value
          }
          properties.push(_claimsData)
        });
      }
      const data: any = {
        name: this.basicInfo.name,
        description: this.basicInfo.description,
        displayName: this.basicInfo.displayName,
        enabled: this.basicInfo.enabled,
        required: this.basicInfo.required,
        emphasize: this.basicInfo.emphasize,
        showInDiscoveryDocument: this.basicInfo.showInDiscoveryDocument,
        userClaims: _data,
        properties: properties
     }
     const updateData = {id: this.selectId, body: data};
     this.store.dispatch(updateIdentityResource(updateData));
     this.activePage = 0
      this.viewCanvas = false
      this.showLoadingSpinner=false
      this.editShimmer = false;
    }
    else {
      const data: any = {
        name: this.basicInfo.name,
        description: this.basicInfo.description,
        displayName: this.basicInfo.displayName,
        enabled: this.basicInfo.enabled,
        required: this.basicInfo.required,
        emphasize: this.basicInfo.emphasize,
        showInDiscoveryDocument: this.basicInfo.showInDiscoveryDocument,
        userClaims: _data,
        properties: []
      }
      this.store.dispatch(saveIdentityResource(data));
      
      this.activePage = 0
      this.viewCanvas = false
      this.showLoadingSpinner=false
    }


  }
  
  getBtnName(): string {
    if (this.selectId) {
      return 'Update';
    }
    return 'Create';
  }
}
