import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompNewRoleComponent } from 'projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role.component';
import { RdsCompPermissionTreeComponent } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompRoleListComponent } from 'projects/rds-components/src/app/rds-comp-role-list/rds-comp-role-list.component';


export default {
  title: 'Pages/Role',
  component: RdsCompRoleListComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompRoleListComponent, RdsDataTableComponent, RdsCompNewRoleComponent, RdsCompPermissionTreeComponent,
        RdsCompAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsIconModule,
        SharedModule, RdsFabMenuModule, NgxTranslateModule, RdsInputModule, RdsOffcanvasModule, RdsNavTabModule,
        RdsSelectListModule, RdsCheckboxModule, RdsDatepickerModule,
      ],
      providers: [
        FormBuilder,

      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompRoleListComponent> = (args: RdsCompRoleListComponent) => ({
  props: {
    ...args
  }
});
export const Default = Template.bind({});

Default.args = {
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
  ]
}
