import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsRadioButtonModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompUserBasicsComponent } from '../rds-comp-user-basics/rds-comp-user-basics.component';
import { RdsCompAlertComponent } from '../rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompPermissionTreeComponent } from '../rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompUserPermissionsNewComponent } from './rds-comp-user-permissions-new.component';
import { RdsCompUserBasicProfileRightComponent } from '../rds-comp-user-basic-profile-right/rds-comp-user-basic-profile-right.component';

export default {
  title: 'Components/User Permissions',
   component: RdsCompUserPermissionsNewComponent,
  decorators: [moduleMetadata({
    declarations: [
      RdsCompUserBasicProfileRightComponent,
      RdsDataTableComponent, RdsCompPermissionTreeComponent, RdsCompAlertComponent]
    , imports: [FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsIconModule, SharedModule, RdsFabMenuModule, NgxTranslateModule, RdsInputModule, RdsOffcanvasModule, RdsNavTabModule, RdsSelectListModule, RdsCheckboxModule, RdsDatepickerModule, RdsRadioButtonModule, RdsCounterModule], providers: [FormBuilder,],
  })]
} as Meta;

const Template: Story<RdsCompUserPermissionsNewComponent> = (args: RdsCompUserPermissionsNewComponent) => ({
  props: {
    ...args
  }
});

export const UserPermissionNew = Template.bind({});
UserPermissionNew.args = {
  userHeaders: [
    {
      key: 'name',
      displayName: 'Name',
      dataType: 'html',
      filterable: true,
      sortable: true,
    },
    {
      key: 'userId',
      displayName: 'User ID',
      dataType: 'html',
      filterable: true,
      sortable: true,
    },
    {
      key: 'roleName',
      displayName: 'Roles',
      dataType: 'html',
      filterable: true,
      sortable: true,
    },
    {
      key: 'statusTemplate',
      displayName: 'Status',
      dataType: 'html',
      filterable: true,
      sortable: true,
    }
  ],
  orgTreeData: [],
  userList:[{
    id: 1,  
    isActive: true,
    statusTemplate: `<div><span class="badge badge-success">Active</span></div>`,
    // name: "Amc Corporation",
    name: `<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Amc Corporation</b></p><small class="text-muted">Support@amc.com</small></div></div>`, 
    roleId: 1,
    roleName: "General Manager",
    userId: "1231"
  },
  {
    id: 2,
    isActive: true,
    statusTemplate: `<div><span class="badge badge-success">Active</span></div>`,
    // name: "Amc Corporation",
    name: `<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Cubic Systems</b></p><small class="text-muted">Support@amc.com</small></div></div>`, 
    roleId: 1,
    roleName: "Team Lead",
    userId: "0198"
  }
],
  permissionsList: [
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
  roles: [
    {
      inheritedFromOrganizationUnit: false,
      isAssigned: true,
      roleDisplayName: "Admin",
      roleId: 1,
      roleName: "Admin",
    },
    {
      inheritedFromOrganizationUnit: false,
      isAssigned: true,
      roleDisplayName: "test",
      roleId: 4,
      roleName: "19bffedb2db041d1ad3e4f6907356e52"
    }
  ]
}
