import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSearchInputModule, RdsSelectListModule } from '@libs/rds-elements';
import { ArrayToTreeConverterService, NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { AppComponent } from './app.component';
import { RdsCompRoleListModule } from 'projects/rds-components/src/app/rds-comp-role-list/rds-comp-role-list.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompNewRoleModule } from 'projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-permission-tree.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { StoreModule } from '@ngrx/store';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Pages/Role',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsIconModule,
        SharedModule, RdsFabMenuModule, NgxTranslateModule, RdsInputModule, RdsOffcanvasModule, RdsNavTabModule,
        RdsSelectListModule, RdsCheckboxModule, RdsDatepickerModule,RdsCompRoleListModule,RdsCompDataTableModule,
        RdsCompNewRoleModule,RdsPermissionTreeModule,RdsCompAlertModule,StoreModule.forRoot({}),BrowserAnimationsModule,
        RdsSearchInputModule,RdsBannerModule
      ],
      providers: [
        FormBuilder,
        ArrayToTreeConverterService,
        DatePipe
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: {
    ...args
  }
});
export const Default = Template.bind({});

Default.args = {
  isShimmer:false,
  EditShimmer: false,
  roleList: [{ id: 1, rolename: '<div class="d-flex align-items-center"> Admin <div class="d-block text-end"> <span class="badge badge-primary p-1 mx-1 rounded">Static</span>   </div></div> ', isDefault: false, creationTime: '04/29/2022, 8:36:40 PM' },
  { id: 8, rolename: '<div class="d-flex align-items-center"> userPrime <div class="d-block text-end">   </div></div> ', isDefault: false, creationTime: '05/03/2022, 2:26:47 PM' },
  { id: 149, rolename: '<div class="d-flex align-items-center"> Golden Roles <div class="d-block text-end">   </div></div> ', isDefault: false, creationTime: '06/06/2022, 4:47:38 PM' },
  { id: 151, rolename: '<div class="d-flex align-items-center"> work <div class="d-block text-end">   </div></div> ', isDefault: false, creationTime: '06/06/2022, 4:50:14 PM' }
  ],
  listItems: [
    { value: 'New Role', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Filter By Permission', some: 'value', key: 'filterByPermission', icon: 'funnel', iconWidth: '20px', iconHeight: '20px' },
  ],
  roleHeaders: [
    { displayName: 'Role Name', key: 'rolename', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Creation Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ],
  treeData:[
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
}
