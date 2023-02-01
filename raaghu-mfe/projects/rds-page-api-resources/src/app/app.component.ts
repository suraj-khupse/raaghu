import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ApiResourceClaimDto, UserAuthService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import {
  deleteApiResource,
  getAllApiResources,
  getApiResource,
  saveApiResource,
  updateApiResource,
} from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.actions';
import {
  selectAllApiResource,
  selectApiResource,
} from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.selector';
import { claimTypesAll } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.actions';
import { selectClaimTypesAll } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),

      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  isShimmer: boolean = true;
  public resourceTableData: any = [];
  public navtabsItems: any = [];
  public userClaims: ApiResourceClaimDto[] = [];
  public resourceScopes: any = [];
  public claims: any = [];
  public activeTab: number = 0;
  public viewCanvas: boolean = false;
  public offCanvasTitle: string = 'New Api Resource';
  public resourceTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'name',
      dataType: 'text',
    },
    {
      displayName: 'Display Name',
      key: 'displayName',
      dataType: 'text',
    },
    {
      displayName: 'Description',
      key: 'description',
      dataType: 'text',
    },
  ];
  public selectedProperties: any = [];
  public propertyTableHeader: TableHeader[] = [
    {
      displayName: 'Key',
      key: 'key',
      dataType: 'text',
    },
    {
      displayName: 'Vlaue',
      key: 'value',
      dataType: 'text',
    },
  ];
  public actions: any = [
    {
      id: 'edit',
      displayName: 'Edit',
    },
    {
      id: 'delete',
      displayName: 'Delete',
    },
  ];
  public property_actions: any = [
    {
      id: 'delete',
      displayName: 'Delete',
    },
  ];
  public propertyTableData: any = [];
  public secrets: any = [];
  public scopes: any = [];
  public selectedSecrets: any = [];
  public basicInfo: any;
  public isEdit: boolean = false;
  public isButtonSpinner: boolean = false;
  constructor(
    private store: Store,
    public translate: TranslateService,
    private datepipe: DatePipe,
    public userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.isAnimation = true;
    this.isShimmer = true;
    if(this.userAuthService.currentLanguage){
      this.translate.use(this.userAuthService.currentLanguage);
    }
    this.userAuthService.languageObservable$.subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    }) 
    this.store.dispatch(getAllApiResources());
    this.store.select(selectAllApiResource).subscribe((res: any) => {
      this.resourceTableData = [];

      if (res && res.items && res.items.length > 0) {
        this.isAnimation = false;
        this.isShimmer = false;
        res.items.forEach((ele: any) => {
          if (ele) {
            this.resourceTableData.push(ele);
          }
        });
      }
    });
    this.store.dispatch(claimTypesAll());
    this.store.select(selectClaimTypesAll).subscribe((res: any) => {
      if (res) {
        this.claims = [];
        res.forEach((element) => {
          let item = {
            id: element.id,
            displayName: element.name,
            left: false,
          };
          this.claims.push(item);
        });
      }
    });
    this.store.select(selectApiResource).subscribe((res: any) => {
      if (res) {
        this.propertyTableData = res.properties;
        this.basicInfo = {
          name: res.name,
          displayName: res.displayName,
          id: res.id,
          description: res.description,
          enabled: res.enabled,
          algorithm: res.allowedAccessTokenSigningAlgorithms,
          showInDiscoveryDocument: res.showInDiscoveryDocument,
        };

        this.secrets = res.secrets;
        this.resourceScopes = res.scopes;
        // this.scopes = res.scopes;
        if (res.userClaims) {
          this.claims.forEach((claim: any) => {
            if (claim) {
              const _claim: any = res.userClaims.find(
                (x: any) => x.type == claim.displayName
              );
              if (_claim) {
                claim.left = true;
              }
            }
          });
        }
      }
    });
  }

  onActionSelection(event: any): void {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteApiResource(event.selectedData.id));
    } else if (event.actionId === 'edit') {
      this.claims.forEach((claim) => {
        claim.left = false;
      });
      this.basicInfo = undefined;
      this.selectedProperties = [];
      this.userClaims = [];
      this.selectedSecrets = [];
      this.activeTab = 0;
      this.isEdit = true;
      this.viewCanvas = true;
      this.offCanvasTitle = 'Edit Api Resource';
      this.navtabsItems = [
        {
          label: 'Basics',
          tablink: '#Basics',
          ariacontrols: 'Basics',
        },
        {
          label: 'Claims',
          tablink: '#Claims',
          ariacontrols: 'Claims',
        },
        {
          label: 'Secrets',
          tablink: '#Secrets',
          ariacontrols: 'Secrets',
        },
        {
          label: 'Properties',
          tablink: '#Properties',
          ariacontrols: 'Properties',
        },
      ];
      this.store.dispatch(getApiResource(event.selectedData.id));
      setTimeout(() => {
        var offcanvas = document.getElementById('api-resource-offcanvas');
        var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
        bsOffcanvas.show();
      }, 100);
    }
  }

  onClaimSelection(event): void {
    this.userClaims = event;
  }

  onBasicInfoChange(event): void {
    this.basicInfo = event;
    this.save();
  }

  save(): void {
    if (this.basicInfo) {
      const body: any = {
        name: this.basicInfo.name,
        displayName: this.basicInfo.displayName,
        description: this.basicInfo.description,
        allowedAccessTokenSigningAlgorithms: this.basicInfo.algorithm,
        userClaims: [],
      };
      this.userClaims.forEach((claim: any) => {
        if (claim) {
          const _claim = {
            apiResourceId: this.basicInfo.id,
            type: claim.displayName,
          };
          body.userClaims.push(_claim);
        }
      });

      if (this.basicInfo.id) {
        body['properties'] = [];
        body['secrets'] = [];
        body['scopes'] = [];
        if (this.selectedProperties && this.selectedProperties.length > 0) {
          const properties: any = [];
          this.selectedProperties.forEach((element) => {
            const data: any = {
              apiResourceId: this.basicInfo.id,
              key: element.key,
              value: element.value,
            };
            properties.push(data);
          });
          body['properties'] = properties;
        }
        body.scopes = this.resourceScopes;
        if (this.selectedSecrets && this.selectedSecrets.length > 0) {
          const selectedSecrets: any = [];
          this.selectedSecrets.forEach((element) => {
            const data: any = {
              apiResourceId: this.basicInfo.id,
              type: element.type,
              value: element.value,
              expiration:
                element.expiration !== null &&
                element.expiration !== '' &&
                element.expiration
                  ? new Date(element.expiration)
                  : element.expiration,
              description: element.description,
            };
            selectedSecrets.push(data);
          });
          body['secrets'] = selectedSecrets;
        }
        body['enabled'] = this.basicInfo.enabled;
        this.store.dispatch(
          updateApiResource({ body: body, id: this.basicInfo.id })
        );
      } else {
        body['showInDiscoveryDocument'] =
          this.basicInfo.showInDiscoveryDocument;
        this.store.dispatch(saveApiResource(body));
      }
    }
  }

  openCanvas(): void {

    this.isButtonSpinner = true;

    

    this.claims.forEach((claim) => {
      claim.left = false;
    });
    this.basicInfo = undefined;
    this.selectedProperties = [];
    this.userClaims = [];
    this.selectedSecrets = [];
    this.activeTab = 0;
    this.viewCanvas = true;
    this.isEdit = false;
    this.offCanvasTitle = 'New Api Resource';
    this.navtabsItems = [
      {
        label: 'Basics',
        tablink: '#Basics',
        ariacontrols: 'Basics',
      },
      {
        label: 'Claims',
        tablink: '#Claims',
        ariacontrols: 'Claims',
      },
      // {
      //   label: 'Secrets',
      //   tablink: '#Secrets',
      //   ariacontrols: 'Secrets',
      // },
      // {
      //   label: 'Properties',
      //   tablink: '#Properties',
      //   ariacontrols: 'Properties',
      // },
    ];
    setTimeout(() => {
      var offcanvas = document.getElementById('api-resource-offcanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
      if (offcanvas) {
        offcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
          this.viewCanvas = false;
          this.basicInfo = undefined;
          this.selectedProperties = [];
          this.userClaims = [];
          this.selectedSecrets = [];
          this.activeTab = 0;
          this.isButtonSpinner = false;
        });
      }
    }, 100);

  }

  onSecretsChange(event: any): void {
    this.selectedSecrets = event;
  }

  onValidForm(event): void {
    this.basicInfo = event;
  }

  onPropertyChange(event): void {
    if (event && event.Property) {
      this.selectedProperties = event.Property;
      this.save();
    }
  }

  onTabClick(index: any): void {
    this.activeTab = index;
  }

  getBtnName(): string {
    return this.basicInfo && this.basicInfo.id ? 'Update' : 'Create';
  }
}
