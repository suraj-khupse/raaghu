import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { RdsCompAlertComponent } from '../rds-comp-alert/rds-comp-alert.component';
import { RdsCompPermissionTreeComponent } from '../rds-comp-permission-tree/rds-comp-permission-tree.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';

export default {
  title: 'Components/Permission Tree',
  component: RdsCompPermissionTreeComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompPermissionTreeComponent,
        RdsCompAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,
      ],
      providers: [
        FormBuilder,
       
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompPermissionTreeComponent> = (args: RdsCompPermissionTreeComponent) => ({
    props:{
      ...args
  }
  });
  export const PermissionTree = Template.bind({});

  PermissionTree.args = {
    multiselectTree:false,
    selectedItems:[
        {
            "name": "App.MaxUserCount",
            "value": "0"
        },
        {
            "name": "TestEditionScopeFeature",
            "value": "false"
        },
        {
            "name": "App.TestCheckFeature",
            "value": "false"
        },
        {
            "name": "App.TestCheckFeature2",
            "value": "true"
        },
        {
            "name": "App.ChatFeature",
            "value": "false"
        },
        {
            "name": "App.ChatFeature.TenantToTenant",
            "value": "false"
        },
        {
            "name": "App.ChatFeature.TenantToHost",
            "value": "false"
        }
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
