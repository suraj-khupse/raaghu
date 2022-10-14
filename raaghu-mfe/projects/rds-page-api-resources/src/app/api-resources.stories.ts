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
import { AppComponent as ApiResource } from './app.component';
import {
  NgxTranslateModule,
  SharedModule,
} from '../../../libs/shared/src/public-api';
import { StoreModule } from '@ngrx/store';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';

export default {
  title: 'Pages/Api-Resources',
  component: ApiResource,
  decorators: [
    moduleMetadata({
      declarations: [
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
const Template: Story<ApiResource> = (args: ApiResource) => ({
  props: {
    ...args,
  },
  template: `
  <div class="card border-0">
    <h5
      class="card-header border-0 bg-transparent d-flex justify-content-between"
    >
      <div class="card-title fs-3">Api Resources List</div>
      <div class="card-toolbar">
        <rds-button
          [id]="'yes'"
          [size]="'small'"
          [tooltipPlacement]="'top'"
          [colorVariant]="'primary'"
          [label]="'NEW RESOURCE'"
          [attr.data-bs-toggle]="'offcanvas'"
          [attr.data-bs-target]="'#addnewapiresource'"
          [attr.aria-controls]="'addnewapiresource'"
        >
        </rds-button>
      </div>
    </h5> 
  
    <div class="card-body">
    <app-rds-data-table
    [tableData]="apiResourceTableData"
    [tableHeaders]=" apiResourceTableHeader"
    [actions]="actions"
    ></app-rds-data-table>
    </div>
  </div>
  
  <div class="container">
  
    <!---------------- Add New Api Resource Page ---------------->
  
  
    <rds-offcanvas
      [canvasTitle]="'NEW API RESOURCE'"
      [offId]="'addnewapiresource'"
      [placement]="'end'"
      [offcanvaswidth]="600"
    >
      <div class="col-md-12 m-3">
        <rds-nav-tab
          [navtabsItems]="navtabsItems"
          [horizontalAlignment]="'start'"
          [verticalAlignment]="false"
          [pills]="false"
          [tabs]="true"
          [fill]="false"
          [justified]="false"
          [activepage]="0"
        ></rds-nav-tab>
      </div>
  
      <div naveContent class="row tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="basics"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <app-api-basics (onBsicResourceSave)="SaveBasicResource($event)"></app-api-basics>
        </div>
  
        <div
          class="tab-pane"
          id="claims"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <app-api-claims [ClaimData]="claimData" (onClaimResourceSave)="SaveClaimResource($event)"></app-api-claims>
        </div>
      </div>
    </rds-offcanvas>
  
  
    <!--------------- Edit Api Resource Page ------------------->
    <rds-offcanvas
      [canvasTitle]="'EDIT API RESOURCE'"
      [offId]="'EditApiresource'"
      [placement]="'end'"
      [offcanvaswidth]="600"
    >
      <div class="col-md-12 m-3">
        <rds-nav-tab
          [navtabsItems]="navtabsItemsEdit"
          [horizontalAlignment]="'start'"
          [verticalAlignment]="false"
          [pills]="false"
          [tabs]="true"
          [fill]="false"
          [justified]="false"
          [activepage]="0"
        ></rds-nav-tab>
      </div>
  
      <div naveContent class="row tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="editBasics"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <app-api-basics [ResourceData]="BasicResource" (onBsicResourceSave)="SaveBasicResource($event)"></app-api-basics>
        </div>
  
        <div
          class="tab-pane"
          id="editClaims"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <app-api-claims [ClaimData]="claimData" (onClaimResourceSave)="SaveClaimResource($event)"></app-api-claims>
        </div>
  
        <div
          class="tab-pane"
          id="editSecrets"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <app-api-secrets [secretList]="Secrets"></app-api-secrets>
        </div>
  
        <div
          class="tab-pane"
          id="editProperties"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <app-api-properties [PropertyList]="Properties"></app-api-properties>
        </div>
      </div>
    </rds-offcanvas>
  
  </div>

 
  `,
});

export const Default = Template.bind({});

Default.args = {
  apiResourceTableHeader: [
    {
      displayName: 'Name',
      key: 'Name',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'Display Name',
      key: 'DisplayName',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Description',
      key: 'Description',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ],
  apiResourceTableData: [
    { Name: 'User Id', DisplayName: 'Your Id', Description: 'Assosiate' },
    {
      Name: 'Address',
      DisplayName: 'Your Address',
      Description: 'Address as described as the documents',
    },
    {
      Name: 'Email Id',
      DisplayName: 'Your Email Id',
      Description: 'Email Id associated',
    },
    {
      Name: 'Phone Number',
      DisplayName: 'Your Phone Number',
      Description: 'Contact number to this account',
    },
    {
      Name: 'Profile',
      DisplayName: 'Your Profile',
      Description: 'Image as per request',
    },
    {
      Name: 'Phone Number',
      DisplayName: 'Your Phone Number',
      Description: 'Contact number to this account',
    },
    {
      Name: 'Profile',
      DisplayName: 'Your Profile',
      Description: 'Image as per request',
    },
  ],
  actions: [
    { id: 'edit', displayName: 'Edit' },
    { id: 'delete', displayName: 'Delete' },
  ],
};
