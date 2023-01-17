import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsRadioButtonModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { ArrayToTreeConverterService, NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-permission-tree.module';

export default {
  title: 'Pages/Edition',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,RdsRadioButtonModule,RdsCounterModule,
        RdsDropdownlistModule,
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
        RdsCompDataTableModule,
        RdsCompAlertModule,
        RdsPermissionTreeModule
      ],
      providers: [
        FormBuilder, 
        ArrayToTreeConverterService      
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props:{
      ...args
  }
  });
export const Default = Template.bind({});

Default.args = {
    isShimmer:false,
    EditionsTableData: [{editionname: 'Standard', price: null, trialPeriod: null, expiringEdition: null, id: 1},
    {editionname: 'apple', price: 2000, trialPeriod: 10, expiringEdition: 'Standard', id: 5},
   {editionname: 'Apple1', price: 20, trialPeriod: 3, expiringEdition: 'Standard', id: 6},
   {editionname: 'google', price: 1200, trialPeriod: 2, expiringEdition: null, id: 16}
  ],
  EditionsTableHeader: [
    { displayName: 'Edition Name', key: 'editionname', dataType: 'text', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Price', key: 'price', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Trial Period', key: 'trialPeriod', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Expiring Edition', key: 'expiringEdition', dataType: 'text', dataLength: 30, sortable: true, required: true },
  ],
  recordsPerpage:10,
  EditionName:"",
  AnnualPrice:200,
  TrailPeriod:10,
  ExpiryInterval:10,
  freeEditon:"Edition",
  featureList:[
    {
        "data": {
            "parentName": null,
            "name": "TestEditionScopeFeature",
            "displayName": "[Test edition scope feature]",
            "description": null,
            "defaultValue": "false",
            "inputType": {
                "name": "CHECKBOX",
                "attributes": {},
                "validator": {
                    "name": "BOOLEAN",
                    "attributes": {}
                }
            }
        },
        "level": 1,
        "selected": false,
        "label": "[Test edition scope feature]",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": true,
        "children": []
    },
    {
        "data": {
            "parentName": null,
            "name": "App.ChatFeature",
            "displayName": "Chat",
            "description": null,
            "defaultValue": "false",
            "inputType": {
                "name": "CHECKBOX",
                "attributes": {},
                "validator": {
                    "name": "BOOLEAN",
                    "attributes": {}
                }
            }
        },
        "level": 1,
        "selected": false,
        "label": "Chat",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": true,
        "children": [
            {
                "data": {
                    "parentName": "App.ChatFeature",
                    "name": "App.ChatFeature.TenantToHost",
                    "displayName": "Chat with host",
                    "description": null,
                    "defaultValue": "false",
                    "inputType": {
                        "name": "CHECKBOX",
                        "attributes": {},
                        "validator": {
                            "name": "BOOLEAN",
                            "attributes": {}
                        }
                    }
                },
                "level": 2,
                "selected": false,
                "label": "Chat with host",
                "expandedIcon": "fa fa-folder-open text-warning",
                "collapsedIcon": "fa fa-folder text-warning",
                "expanded": true,
                "selectable": true,
                "children": []
            },
            {
                "data": {
                    "parentName": "App.ChatFeature",
                    "name": "App.ChatFeature.TenantToTenant",
                    "displayName": "Chat with other tenants",
                    "description": null,
                    "defaultValue": "false",
                    "inputType": {
                        "name": "CHECKBOX",
                        "attributes": {},
                        "validator": {
                            "name": "BOOLEAN",
                            "attributes": {}
                        }
                    }
                },
                "level": 2,
                "selected": false,
                "label": "Chat with other tenants",
                "expandedIcon": "fa fa-folder-open text-warning",
                "collapsedIcon": "fa fa-folder text-warning",
                "expanded": true,
                "selectable": true,
                "children": []
            }
        ]
    },
    {
        "data": {
            "parentName": null,
            "name": "App.MaxUserCount",
            "displayName": "Maximum user count",
            "description": "0 = unlimited",
            "defaultValue": "0",
            "inputType": {
                "name": "SINGLE_LINE_STRING",
                "attributes": {},
                "validator": {
                    "name": "NUMERIC",
                    "attributes": {
                        "MinValue": 0,
                        "MaxValue": 2147483647
                    }
                }
            }
        },
        "level": 1,
        "selected": false,
        "label": "Maximum user count",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": false,
        "children": []
    },
    {
        "data": {
            "parentName": null,
            "name": "App.TestCheckFeature",
            "displayName": "Test check feature",
            "description": null,
            "defaultValue": "false",
            "inputType": {
                "name": "CHECKBOX",
                "attributes": {},
                "validator": {
                    "name": "BOOLEAN",
                    "attributes": {}
                }
            }
        },
        "level": 1,
        "selected": false,
        "label": "Test check feature",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": true,
        "children": []
    },
    {
        "data": {
            "parentName": null,
            "name": "App.TestCheckFeature2",
            "displayName": "Test check feature 2",
            "description": null,
            "defaultValue": "true",
            "inputType": {
                "name": "CHECKBOX",
                "attributes": {},
                "validator": {
                    "name": "BOOLEAN",
                    "attributes": {}
                }
            }
        },
        "level": 1,
        "selected": false,
        "label": "Test check feature 2",
        "expandedIcon": "fa fa-folder-open text-warning",
        "collapsedIcon": "fa fa-folder text-warning",
        "expanded": true,
        "selectable": true,
        "children": []
    }
],
editionList:[
    {
        "value": "Standard",
        "some": "Standard",
        "id": 1,           
    },
    {
        "value": "TestOne",
        "some": "TestOne",
        "id": 1,     
    },
    {
        "value": "DemoOne",
        "some": "DemoOne",
        "id": 1,           
    },
],
actions:[   
     { id: 'delete', displayName: 'Delete' },
      { id: 'moveTenant', displayName: 'Move Tenants to Another Edition' }]

 }
