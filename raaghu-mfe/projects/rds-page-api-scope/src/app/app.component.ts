import { Component, OnInit, TemplateRef } from '@angular/core';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { ComponentLoaderOptions } from '../../../libs/shared/src/public-api';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scope';
  viewCanvas: boolean = false;
  activePage: number = 0;
  scopeUniqueId: any;
  offcanvasId: string = 'scope_canvas';
  rdsApiScopeMfeConfig: ComponentLoaderOptions;
  rdsScopeBasicsMfeConfig: ComponentLoaderOptions;
  rdsScopeResourcesMfeConfig: ComponentLoaderOptions;
  scopeTableHeaders: TableHeader[] = [{
    displayName: 'Name', key: 'name', dataType: 'text', filterable: true, sortable: true
  },
  {
    displayName: 'Display Name', key: 'displayName', dataType: 'text', filterable: true, sortable: true
  },
  { displayName: 'Description', key: 'description', dataType: 'text' }
  ];
  content!: TemplateRef<any>;
  scopeList: any = [];

  scope: any = {};
  canvasTitle: string = 'New Scope';
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
    }];

  constructor(public translate: TranslateService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.rdsApiScopeMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableData: this.scopeList,
        tableHeaders: this.scopeTableHeaders,
        recordsPerPage: 10,
        inlineEdit: false,
        width: '100%',
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have api scope'
      },

      output: {
        onActionSelection: (event) => {
          if (event.actionId === 'edit') {
            this.scopeUniqueId = event.selectedData.id;
            this.scope.basicInfo = event.selectedData;
            this.scope.resources = event.selectedData.resources;
            this.newScope(undefined)
          } else if (event.actionId === 'delete') {
            const index: any = this.scopeList.findIndex((x: any) => x.id === event.selectedData.id);                                  
            if (index !== -1) {
              this.scopeList.splice(index, 1);
              const mfeConfig = this.rdsApiScopeMfeConfig
              mfeConfig.input.tableData = [... this.scopeList];
              this.rdsApiScopeMfeConfig = mfeConfig;
            }
          }
        }

      }
    };
    this.rdsScopeBasicsMfeConfig = {
      name: 'RdcCompApiScopeBasics',
      input: {
        scopeInfo: this.scope.basicInfo,
      },
      output: {
        scopeBasicInfo: (eventData: any) => {
          this.getScopeInfo(eventData)
        }
      }
    };
    this.rdsScopeResourcesMfeConfig = {
      name: 'RdcCompApiScopeResources',
      input: {
        scopeResources: this.scope.resources,
      },
      output: {
        selectedResources: (eventData: any) => {
          this.getSelectedResources(eventData)
        }
      }
    };
  }

  newScope(event: any): void {
    if (event) {
      this.scopeUniqueId = undefined;
      event.stopPropagation();
      this.canvasTitle = 'New Scope';
    } else {
      this.canvasTitle = 'Edit Scope';
    }
    this.activePage = 0;
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show()
    }, 100);
  };

  close(): void {
    this.viewCanvas = false;
    this.activePage = 0;
    this.scopeUniqueId = undefined
  }

  getScopeInfo(event: any): void {
    this.scope.basicInfo = event;
  }
  getSelectedResources(event: any): void {
    this.scope.resources = event;
  }

  save(): void {
    if (!this.scope.basicInfo) {
      return;
    }
    const scopeInfo: any = this.scope.basicInfo;
    scopeInfo.resources = this.scope.resources;
    const scope: any = this.scopeList.find((x: any) => x.id === this.scopeUniqueId);
    if (!scope) {
      scopeInfo.id = this.scopeList.length + 1;
      this.scopeList.push(scopeInfo);
    } else {
      scope.resources = this.scope.resources;
      scope.displayName = this.scope.basicInfo.displayName;
      scope.name = this.scope.basicInfo.name;
      scope.enables = this.scope.basicInfo.enables;
      scope.required = this.scope.basicInfo.required;
      scope.emphasize = this.scope.basicInfo.emphasize;
      scope.discoveryDocuments = this.scope.basicInfo.discoveryDocuments;

    }
    const mfeConfig = this.rdsApiScopeMfeConfig
    mfeConfig.input.tableData = [... this.scopeList];
    this.rdsApiScopeMfeConfig = mfeConfig;
    this.close();
  };
  getBtnName(): string {
    if (this.scopeUniqueId) {
      return 'Update';
    }
    return 'Create';
  }
}
