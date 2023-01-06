import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import {
  claimTypesAll,
  deleteApiScope,
  getAllApiScope,
  getApiScope,
  saveApiScope,
  updateApiScope,
} from 'projects/libs/state-management/src/lib/state/api-scope/api-scope-action';
import {
  selectAllScope,
  selectApiScope,
  selectClaimTypesAll,
} from 'projects/libs/state-management/src/lib/state/api-scope/api-scope.selector';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
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
  title = 'scope';
  isAnimation: boolean = true;
  public isButtonSpinner: boolean = false;
  viewCanvas: boolean = false;
  activePage: number = 0;
  scopeUniqueId: any;
  offcanvasId: string = 'scope_canvas';
  scopeTableHeaders: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'name',
      dataType: 'text',
      filterable: true,
      sortable: true,
    },
    {
      displayName: 'Display Name',
      key: 'displayName',
      dataType: 'text',
      filterable: true,
      sortable: true,
    },
    { displayName: 'Description', key: 'description', dataType: 'text' },
  ];
  public property_actions: any = [
    {
      id: 'delete',
      displayName: 'Delete',
    },
  ];
  scopeList: any = [];
  userClaims = [];
  public claims: any = [];
  public basicInfo: any;
  isShimmer: boolean = true;
  canvasTitle: string = 'New Api Scopes';
  public isEdit: boolean = false;
  public navtabsItems: any = [
    {
      label: this.translate.instant('Basics'),
      tablink: '#basics',
      ariacontrols: 'basics',
    },
    {
      label: this.translate.instant('Claims'),
      tablink: '#resources',
      ariacontrols: 'resources',
    },
  ];

  actions: TableAction[] = [
    { id: 'edit', displayName: 'Edit' },
    { id: 'delete', displayName: 'Delete' },
  ];

  PropertyTableHeader: TableHeader[] = [
    {
      displayName: 'Key',
      key: 'key',
      dataType: 'text',
      dataLength: 30,
      sortable: false,
      required: true,
    },
    {
      displayName: 'Value',
      key: 'value',
      dataType: 'text',
      dataLength: 30,
      sortable: false,
      required: true,
    },
  ];
  PropertyList: any = [];
  PropertyTableData: any = [];
  apiScopeEdit: any;

  constructor(public translate: TranslateService, private store: Store) {}
  ngOnChanges(changes: SimpleChanges): void {
   
   
  }
  ngOnInit(): void {
    this.isAnimation = true;
    this.store.dispatch(getAllApiScope());
    this.store.select(selectAllScope).subscribe((res: any) => {
      if (res && res.items) {
        this.isAnimation = false;
        this.scopeList = [];
        res.items.forEach((ele: any) => {
          const data: any = {
            id: ele.id,
            name: ele.name,
            displayName: ele.displayName,
            description: ele.description,
          };
          this.scopeList.push(data);
        });
        this.isShimmer = false;
      }
    });

    this.store.select(selectApiScope).subscribe((res: any) => {
      if (res) {
        const data: any = {
          name: res.name,
          description: res.description,
          displayName: res.displayName,
          emphasize: res.emphasize,
          enabled: res.enabled,
          required: res.required,
          id: res.id,
          showInDiscoveryDocument: res.showInDiscoveryDocument,
        };
        this.apiScopeEdit = data;
        if (res.userClaims && res.userClaims.length > 0) {
          this.claims.forEach((claim: any) => {
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
        this.PropertyList = [];
        if (res.properties && res.properties.length > 0) {
          res.properties.forEach((element) => {
            const _PropData = {
              apiScopeId: element.apiScopeId,
              value: element.value,
              key: element.key,
            };
            this.PropertyList.push(_PropData);
          });
        }
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
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteApiScope(event.selectedData.id));
    } else if (event.actionId === 'edit') {
      this.claims.forEach((element) => {
        element.left = false;
      });
      this.isEdit = true;
      this.scopeUniqueId = event.selectedData.id;
      this.canvasTitle = this.translate.instant('Edit Scope');
      this.store.dispatch(getApiScope(event.selectedData.id));
      this.newScope(true);
    }
  }

  newScope(edit: boolean = false): void {
    this.viewCanvas = true;
    if (!edit) {
      this.isButtonSpinner = true;
      this.isEdit = false;
      this.scopeUniqueId = undefined;
      this.apiScopeEdit = [];
      this.claims.forEach((element) => {
        element.left = false;
      });
      this.canvasTitle = 'New Api Scopes';

      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#basics',
          ariacontrols: 'basics',
        },
        {
          label: this.translate.instant('Claims'),
          tablink: '#resources',
          ariacontrols: 'resources',
        },
      ];
    } else {
      this.canvasTitle = 'Edit Api Scopes';
      this.isEdit = true;
      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#basics',
          ariacontrols: 'basics',
        },
        {
          label: this.translate.instant('Claims'),
          tablink: '#resources',
          ariacontrols: 'resources',
        },
        {
          label: this.translate.instant('Properties'),
          tablink: '#properties',
          ariacontrols: 'properties',
        },
      ];
    }
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
      if (offcanvas) {
        offcanvas.addEventListener('hidden.bs.offcanvas', (event) => {
          this.viewCanvas = false;
          this.basicInfo = undefined;
          this.PropertyList = [];
          this.userClaims = [];
          this.isButtonSpinner = false;
        });
      }
    }, 100);
  }

  close(): void {
    this.apiScopeEdit = [];
    this.userClaims = [];
    this.viewCanvas = false;
    this.activePage = 0;
    this.scopeUniqueId = undefined;
    this.isButtonSpinner = false;
  }

  getScopeInfo(event: any): void {
    this.basicInfo = event;
    this.save();
  }

  getClaims(event: any): void {
    this.userClaims = event;
  }

  getProperties(event: any): void {
    this.PropertyList = event.Property;
    this.save();
  }

  save(): void {
    if (this.scopeUniqueId) {
      const _data: any[] = [];
      this.userClaims.forEach((element) => {
        if (element) {
          const _claimsData = {
            apiScopeId: this.scopeUniqueId,
            type: element.displayName,
          };
          _data.push(_claimsData);
        }
      });
      const _dataProp: any[] = [];
      this.PropertyList.forEach((element) => {
        const _PropData = {
          apiScopeId: this.scopeUniqueId,
          value: element.value,
          key: element.key,
        };
        _dataProp.push(_PropData);
      });
      const data: any = {
        id: this.scopeUniqueId,
        body: {
          description: this.apiScopeEdit.description,
          displayName: this.apiScopeEdit.displayName,
          emphasize: this.apiScopeEdit.emphasize,
          enabled: this.apiScopeEdit.enabled,
          required: this.apiScopeEdit.required,
          showInDiscoveryDocument: this.apiScopeEdit.showInDiscoveryDocument,
          userClaims: _data,
          properties: _dataProp,
        },
      };
      this.store.dispatch(updateApiScope(data));
    } else {
      const data: any = {
        description: this.apiScopeEdit.description,
        displayName: this.apiScopeEdit.displayName,
        emphasize: this.apiScopeEdit.emphasize,
        enabled: this.apiScopeEdit.enabled,
        name: this.apiScopeEdit.name,
        required: this.apiScopeEdit.required,
        showInDiscoveryDocument: this.apiScopeEdit.showInDiscoveryDocument,
        // userClaims: _data,
        userClaims: [],
        properties: [],
      };
      this.userClaims.forEach((element) => {
        if (element) {
          const _claimsData = {
            apiScopeId: this.scopeUniqueId,
            type: element.displayName,
          };
          data.userClaims.push(_claimsData);
        }
      });
      this.store.dispatch(saveApiScope(data));
    }
    this.activePage = 0;
    this.viewCanvas = false;
    this.isButtonSpinner = false;
  }

  getBtnName(): string {
    if (this.scopeUniqueId) {
      return 'Update';
    }
    return 'Create';
  }
}
