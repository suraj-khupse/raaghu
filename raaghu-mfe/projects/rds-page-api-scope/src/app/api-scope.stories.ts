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
  template: `

  <div class="card border-0">
    <h5
      class="card-header border-0 bg-transparent d-flex justify-content-between"
    >
      <div class="card-title fs-3">Api Scope</div>
      <div class="card-toolbar">
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
    </h5> 
  
    <div class="card-body">
    <app-rds-data-table
  [tableData]="scopeList"
  [tableHeaders]=" scopeTableHeaders"
  [actions]="actions"
  ></app-rds-data-table>
    </div>
  </div>

  

<ng-container *ngIf="viewCanvas">
  <rds-offcanvas [canvasTitle]="'canvasTitle'" [offcanvaswidth]="550" [offId]="offcanvasId" [placement]="'end'" (onClose)="close()">
    <div class="section">
      <rds-nav-tab [navtabsItems]="navtabsItems" [activepage]="activePage" [horizontalAlignment]="'start'"
                   [verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false" [justified]="false">
        <div naveContent class="row tab-content m-2" id="nav-tabContent">
          <div class="tab-pane fade" [ngClass]="{'show active': activePage === 0}" id="basics" role="tabpanel"
               aria-labelledby="nav-home-tab">
               <app-rdc-comp-api-scope-basics></app-rdc-comp-api-scope-basics>
          </div>
          <div class="tab-pane fade" [ngClass]="{'show active': activePage === 2}" id="resources" role="tabpanel"
               aria-labelledby="nav-home-tab">
               <app-rdc-comp-api-scope-resources></app-rdc-comp-api-scope-resources>
          </div>
        </div>
      </rds-nav-tab>
    </div>
    <div class="">
      <rds-button [label]="'Cancel'" [colorVariant]="'outline-primary'"  [size]="'small'" (click)="close()" data-bs-dismiss="offcanvas" aria-label="Close">
      </rds-button>
      <rds-button [label]="getBtnName()" [colorVariant]="'primary'"   [size]="'small'" [disabled]="!scope.basicInfo" (click)="save()"></rds-button>
    </div>
  </rds-offcanvas>
</ng-container>

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
};
