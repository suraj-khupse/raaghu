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
import { AppComponent as IdentityResources } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompBasicResourceComponent } from 'projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resource.component';

export default {
  title: 'Pages/Identity Resources',
  component: IdentityResources,
  decorators: [
    moduleMetadata({
      declarations: [RdsDataTableComponent, RdsCompBasicResourceComponent],
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
const Template: Story<IdentityResources> = (args: IdentityResources) => ({
  props: {
    ...args,
  },
  template: `
    <div class="d-flex justify-content-end mt-2">
      <rds-button [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'" [colorVariant]="'primary'" [label]="'NEW RESOURCE'"
        [attr.data-bs-toggle]="'offcanvas'" [attr.data-bs-target]="'#addnewIdentityresource'"
        [attr.aria-controls]="'addnewIdentityresource'">
      </rds-button>
    </div>
    <div class="row  mt-2">
    <app-rds-data-table
    [tableData]="ResourceTableData"
    [tableHeaders]=" ResourceTableHeader"
    [actions]="actions"
    ></app-rds-data-table>
    </div>
  <rds-offcanvas [canvasTitle]="'New Identity Resource'" [offId]="'addnewIdentityresource'" [offcanvaswidth]="550"
    [placement]="'end'" >
    <rds-nav-tab [navtabsItems]="navtabsItems" [activepage]="activePage" [horizontalAlignment]="'start'"
      [verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false" [justified]="false">
      <div naveContent class="row tab-content m-2" id="nav-tabContent">
        <div class="tab-pane fade" [ngClass]="{'show active': activePage === 0}" id="Basics" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <basicresource (onBsicResourceSave)="SaveBasicResource($event)"></basicresource>
        </div>
        <div class="tab-pane fade" [ngClass]="{'show active': activePage === 1}" id="Claim" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <app-claims [ClaimData]="claimData" (onClaimResourceSave)="SaveClaimResource($event)"></app-claims>
        </div>

      </div>
    </rds-nav-tab>

  </rds-offcanvas>
  <rds-offcanvas [canvasTitle]="'Edit Identity Resource'" [offId]="'EditIdentityresource'" [offcanvaswidth]="600"
    [placement]="'end'">
    <rds-nav-tab [navtabsItems]="navtabsItemsEdit" [activepage]="activePage" [horizontalAlignment]="'start'"
      [verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false" [justified]="false">
      <div naveContent class="row tab-content m-2" id="nav-tabContentEdit">
        <div class="tab-pane fade" [ngClass]="{'show active': activePage === 0}" id="Basicsedit" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <basicresource [ResourceData]="BasicResource" (onBsicResourceSave)="SaveBasicResource($event)">
          </basicresource>
        </div>
        <div class="tab-pane fade" [ngClass]="{'show active': activePage === 1}" id="ClaimEdit" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <app-claims [ClaimData]="claimData" (onClaimResourceSave)="SaveClaimResource($event)"></app-claims>
        </div>
        <div class="tab-pane fade" [ngClass]="{'show active': activePage === 1}" id="Properties" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <app-properties [PropertyList]="Properties"></app-properties>
        </div>
      </div>
    </rds-nav-tab>
  </rds-offcanvas>

  `,
});

export const Default = Template.bind({});

Default.args = {
  ResourceTableHeader: [
    {
      displayName: 'Name',
      key: 'name',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'DisplayName',
      key: 'displayName',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Description',
      key: 'description',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ],
  ResourceTableData: [
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
