import { Component, TemplateRef } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getAllApiResources } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.actions';
import { selectAllApiResource } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.selector';
import { getAllClients } from 'projects/libs/state-management/src/lib/state/clients/clients.actions';
import { selectAllClients } from 'projects/libs/state-management/src/lib/state/clients/clients.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  viewCanvas: boolean = false;
  activePage: number = 0;
  clientUniqueId: any;
  offcanvasId: string = 'client_canvas';
  rdsClientMfeConfig: ComponentLoaderOptions;
  rdsClientSecretsMfeConfig: ComponentLoaderOptions;
  rdsClientBasicsMfeConfig: ComponentLoaderOptions;
  rdsClientResourcesMfeConfig: ComponentLoaderOptions;

  clientTableHeaders: TableHeader[] = [{
    displayName: 'Client ID', key: 'clientId', dataType: 'text', filterable: true, sortable: true
  },
  {
    displayName: 'Name', key: 'clientName', dataType: 'text', filterable: true, sortable: true
  },
  { displayName: 'Description', key: 'description', dataType: 'text' }
  ];
  clientSecretTableHeaders: TableHeader[] = [{
    displayName: 'Type', key: 'type', dataType: 'text', filterable: true, sortable: true, required: true
  },
  {
    displayName: 'Value', key: 'value', dataType: 'number', filterable: true, sortable: true, required: true
  },
  {
    displayName: 'Expiration', key: 'expiration', dataType: 'text', filterable: true, sortable: true, required: true
  },
  { displayName: 'Description', key: 'description', dataType: 'text', required: true }
  ];
  content!: TemplateRef<any>;
  clientList: any = [];
  apiResources: any = [];
  clientSecretList: any = [{}];
  secrets: any;
  client: any = {};
  canvasTitle: string = 'New Client';
  public navtabsItems: any = [
    {
      label: 'Basics',
      tablink: '#basics',
      ariacontrols: 'basics',
    },
    {
      label: 'Secrets',
      tablink: '#secrets',
      ariacontrols: 'secrets',

    },
    {
      label: 'Resources',
      tablink: '#resources',
      ariacontrols: 'resources',
    }];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.rdsClientMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableData: this.clientList,
        tableHeaders: this.clientTableHeaders,
        recordsPerPage: 10,
        inlineEdit: false,
        width: '100%',
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have client'
      },

      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'edit') {
            this.clientUniqueId = event.selectedData.id;
            this.client.basicInfo = event.selectedData;
            this.client.resources = (event.selectedData.resources) ? event.selectedData.resources : [];
            this.clientSecretList = event.selectedData.secrets;
            const mfeConfig = this.rdsClientSecretsMfeConfig
            mfeConfig.input.tableData = [... this.clientSecretList];
            this.rdsClientSecretsMfeConfig = mfeConfig;
            const clientBasicsMfeConfig = this.rdsClientBasicsMfeConfig
            clientBasicsMfeConfig.input.clientInfo = this.client.basicInfo;
            this.rdsClientBasicsMfeConfig = clientBasicsMfeConfig;
            const ClientResourcesMfeConfig = this.rdsClientResourcesMfeConfig
            ClientResourcesMfeConfig.input.clientResources = [...this.client.resources];
            this.rdsClientResourcesMfeConfig = ClientResourcesMfeConfig;
            this.newClient(undefined)
          } else if (event.actionId === 'delete') {
            const index: any = this.clientList.findIndex((x: any) => x.id === event.id);
            if (index !== -1) {
              this.clientList.splice(index, 1);
              const mfeConfig = this.rdsClientMfeConfig
              mfeConfig.input.tableData = [... this.clientList];
              this.rdsClientMfeConfig = mfeConfig;
            }
          }
        }
      }
    };
    this.rdsClientSecretsMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableData: this.clientSecretList,
        tableHeaders: this.clientSecretTableHeaders,
        recordsPerPage: 10,
        width: '100%',
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }],
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index: any = this.clientSecretList.findIndex((x: any) => x.id === event.selectedData.id);
            if (index !== -1) {
              this.clientSecretList.splice(index, 1);
              const mfeConfig = this.rdsClientSecretsMfeConfig
              mfeConfig.input.tableData = [... this.clientSecretList];
              this.rdsClientSecretsMfeConfig = mfeConfig;
            }
          }
          if(event.actionId === 'edit'){
            this.secrets = event.selectedData;
          }
        }
      }
    };
    this.rdsClientBasicsMfeConfig = {
      name: 'RdsCompClientBasics',
      input: {
        clientBasics: {},
      },
      output: {
        clientBasicInfo: (eventData: any) => {
          this.getClientInfo(eventData)
        }
      }
    };
    this.rdsClientResourcesMfeConfig = {
      name: 'RdsCompClientResources',
      input: {
        clientResources: this.client.resources,
      },
      output: {
        selectedResources: (eventData: any) => {
          this.getSelectedResources(eventData)
        }
      }     
    };


    this.store.dispatch(getAllClients());
    this.store.select(selectAllClients).subscribe((res) => {
      this.clientList = [];
      if (res && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            clientId: element.clientId,
            clientName: element.clientName,
            description: element.description
          }
          this.clientList.push(item);
        });
      }
      const mfeConfig = this.rdsClientMfeConfig
      mfeConfig.input.tableData = [...this.clientList];
      mfeConfig.input.refresh = true;
      this.rdsClientMfeConfig = { ...mfeConfig };
    })

    this.store.dispatch(getAllApiResources());
    this.store.select(selectAllApiResource).subscribe((res) => {
      this.apiResources = [];
      if (res) {
        res.items.forEach((element: any) => {
          const item: any = {
            displayName: element.displayName,
            name: element.name,
            left: element.description,
            id:element.id
          }
          this.apiResources.push(item);
        });
      }

      const mfeConfig = this.rdsClientMfeConfig
      mfeConfig.input.apiResources = [...this.apiResources];
      mfeConfig.input.refresh = true;
      this.rdsClientMfeConfig = { ...mfeConfig };
    })
  }

  newClient(event: any): void {
    if (event) {
      this.clientUniqueId = undefined;
      event.stopPropagation();
      this.canvasTitle = 'New Client';
    } else {
      this.canvasTitle = 'Edit Client';
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
    this.clientUniqueId = undefined
  }

  addSecrets(): void {
    this.clientSecretList.push(
      { id: this.clientSecretList.length + 1, type: '', value: '', description: '', expiration: '', isEdit: true },
    );
    const mfeConfig = this.rdsClientSecretsMfeConfig
    mfeConfig.input.tableData = [... this.clientSecretList];
    this.rdsClientSecretsMfeConfig = mfeConfig;
  }

  getClientInfo(event: any): void {
    this.client.basicInfo = event;
  }
  getSelectedResources(event: any): void {
    this.client.resources = event;
  }

  save(): void {
    if (!this.client.basicInfo) {
      return;
    }

    const clientInfo: any = this.client.basicInfo;
    clientInfo.resources = this.client.resources;
    clientInfo.secrets = this.clientSecretList.filter((x: any) => !x.isEdit);
    const client: any = this.clientList.find((x: any) => x.id === this.clientUniqueId);
    if (!client) {
      clientInfo.id = this.clientList.length + 1;
      this.clientList.push(clientInfo);
    } else {
      client.resources = this.client.resources;
      client.clientName = this.client.basicInfo.clientName;
      client.clientUrl = this.client.basicInfo.clientUrl;
      client.logoUrl = this.client.basicInfo.logoUrl;
      client.requiredConsent = this.client.basicInfo.requiredConsent;
      client.clientId = this.client.basicInfo.clientId;
      client.secrets = clientInfo.secrets;
    }
    const mfeConfig = this.rdsClientMfeConfig
    mfeConfig.input.tableData = [... this.clientList];
    this.rdsClientMfeConfig = mfeConfig;
    this.close();
  };
  getBtnName(): string {
    if (this.clientUniqueId) {
      return 'Update';
    }
    return 'Create';
  }

  getNavTabItems(): any {
    this.navtabsItems[0].label = 'Basics';
    this.navtabsItems[1].label = 'Secrets';
    this.navtabsItems[2].label = 'Resources';
    return this.navtabsItems;
  }
}
