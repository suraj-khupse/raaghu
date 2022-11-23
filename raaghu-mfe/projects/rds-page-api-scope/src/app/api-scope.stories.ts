import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  RdsButtonModule,
  RdsCheckboxModule,
  RdsDatepickerModule,
  RdsFabMenuModule,
  RdsIconModule,
  RdsInputModule,
  RdsModalModule,
  RdsNavTabModule,
  RdsOffcanvasModule,
  RdsPaginationModule,
  RdsPopoverModule,
  RdsSelectListModule,
} from '@libs/rds-elements';
import { AppComponent as ApiScope } from './app.component';
import {
  NgxTranslateModule,
  SharedModule,
} from '../../../libs/shared/src/public-api';
import { StoreModule } from '@ngrx/store';
import { RdcCompApiScopeBasicsComponent } from 'projects/rds-components/src/app/rdc-comp-api-scope-basics/rdc-comp-api-scope-basics.component';
import { RdcCompApiScopeResourcesComponent } from 'projects/rds-components/src/app/rdc-comp-api-scope-resources/rdc-comp-api-scope-resources.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';

export default {
  title: 'Pages/Api-Scope',
  component: ApiScope,
  decorators: [
    moduleMetadata({
      declarations: [
        RdcCompApiScopeBasicsComponent,
        RdcCompApiScopeResourcesComponent,
        RdsDataTableComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsModalModule,
        RdsPaginationModule,
        RdsIconModule,
        SharedModule,
        RdsFabMenuModule,
        NgxTranslateModule,
        RdsInputModule,
        RdsOffcanvasModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsDatepickerModule,
        StoreModule.forRoot({}),
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;
const Template: Story<ApiScope> = (args: ApiScope) => ({
  props: {
    ...args,
  },
  template: `<div class="d-flex justify-content-end mt-2">
<rds-button
[id]="'yes'"
[size]="'small'"
[tooltipPlacement]="'top'"
[colorVariant]="'primary'"
[label]="'NEW SCOPE'"
[attr.data-bs-toggle]="'offcanvas'"
[attr.data-bs-target]="'#addnewapiresource'"
[attr.aria-controls]="'addnewapiresource'"
>
</rds-button>
</div>
<div class="row  mt-2">
 <rds-data-table
  [tableData]="scopeList"
  [tableHeaders]=" scopeTableHeaders"
  [actions]="actions"
  ></rds-data-table>
</div>

<rds-offcanvas [canvasTitle]="'NEW API SCOPE'" [offId]="'addnewapiresource'" [offcanvaswidth]="550"
[placement]="'end'" >
<rds-nav-tab [navtabsItems]="navtabsItems" [activepage]="activePage" [horizontalAlignment]="'start'"
[verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false" [justified]="false">
<div naveContent class="row tab-content m-2" id="nav-tabContent">
  <div class="tab-pane fade" [ngClass]="{'show active': activePage === 0}" id="basics" role="tabpanel"
               aria-labelledby="nav-home-tab">
               <app-rdc-comp-api-scope-basics></app-rdc-comp-api-scope-basics>
          </div>
          <div class="tab-pane fade" [ngClass]="{'show active': activePage === 2}" id="resources" role="tabpanel"
               aria-labelledby="nav-home-tab">
               <rdc-comp-api-scope-resources></rdc-comp-api-scope-resources>
          </div>
</div>
</rds-nav-tab>
</rds-offcanvas>

  `,
});

export const Default = Template.bind({});

Default.args = {
  scopeTableHeaders: [
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
  ],
  scopeList: [
    {
      id: 1,
      name: 'Use Id',
      displayName: 'Your Id',
      description: 'Associate',
    },
    {
      id: 2,
      name: 'Address',
      displayName: 'Your Address',
      description: 'Address as described as the documents',
    },
    {
      id: 3,
      name: 'Email Id',
      displayName: 'Your Email Id',
      description: 'Email Id associate',
    },
    {
      id: 4,
      name: 'Phone Number',
      displayName: 'Your Phone Number',
      description: 'Conatct number to this account',
    },
    {
      id: 5,
      name: 'Profile',
      displayName: 'Your Profile',
      description: 'Image as per request',
    },
  ],
  actions: [
    { id: 'edit', displayName: 'Edit' },
    { id: 'delete', displayName: 'Delete' },
  ],
  navtabsItems: [
    {
      label: 'Basics',
      tablink: '#basics',
      ariacontrols: 'basics',
    },
    {
      label: 'Resources',
      tablink: '#resources',
      ariacontrols: 'resources',
    },
  ],
  activePage: 0,
};
