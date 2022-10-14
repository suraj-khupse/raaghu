import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSearchInputModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { StoreModule } from '@ngrx/store';
import { AppComponent as DynamicPropertyManagment } from './app.component';
import { RdsCompDynamicPropertiesComponent } from '../../../rds-components/src/app/rds-comp-dynamic-properties/rds-comp-dynamic-properties.component';
import { RdsCompDynamicEnityPropertiesComponent } from '../../../rds-components/src/app/rds-comp-dynamic-enity-properties/rds-comp-dynamic-enity-properties.component';
import { RdsCompPermissionTreeComponent } from '../../../rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompInformationComponent } from '../../../rds-components/src/app/rds-comp-information/rds-comp-information.component';
import { RdsCompNewDynamicEntityPropertyComponent } from '../../../rds-components/src/app/rds-comp-new-dynamic-entity-property/rds-comp-new-dynamic-entity-property.component';


export default {
  title: 'Pages/Dynamic Property Management',
  component: DynamicPropertyManagment,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompDynamicPropertiesComponent,
        RdsCompDynamicEnityPropertiesComponent,
        RdsCompPermissionTreeComponent,
        RdsCompAlertComponent,
        RdsDataTableComponent,
        RdsCompInformationComponent,
        RdsCompNewDynamicEntityPropertyComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsButtonModule,
        RdsPaginationModule,
        RdsModalModule,
        RdsFabMenuModule,
        CommonModule,
        SharedModule,
        RdsBadgeModule,
        RdsOffcanvasModule,
        NgxTranslateModule.forRoot(),
        StoreModule.forRoot({}),
        RdsSearchInputModule,
        RdsDropdownlistModule,
        RdsInputModule
      ],
      providers: [
        FormBuilder
      ]
    })
  ]
} as Meta;
const Template: Story<DynamicPropertyManagment> = (args: DynamicPropertyManagment) => ({
  props: {
    ...args
  },
  template:`
  <div class="row">
    <div class="col-md-12 pb-3 desktop-btn">
      <rds-button
        [label]="'NEW DYNAMIC ENTITY PROPERTY'"
        type="button"
        [size]="'small'"
        (click)="openCanvas()"
        style="float: right"
        [colorVariant]="'primary'"
        [attr.aria-controls]="'AddDynamic'"
        [icon]="'plus'" [iconHeight]="'12px'" iconWidth="12px"
      >
      </rds-button>
    </div>
  </div>
 
  <div class="row">
    <div class="col-md-12">
      <div class="card border-0 p-2 h-100 rounded-0 card-full-stretch">
         <!-- Main Navbar -->
      <rds-nav-tab
      [navtabsItems]="navtabsItems"
      [horizontalAlignment]="'start'"
      [verticalAlignment]="false"
      [pills]="false"
      [tabs]="true"
      [fill]="false"
      [activepage]="0"
      [justified]="false"
      (onClicktab)="btnClick($event)"
    >
    </rds-nav-tab>
    <!-- Main Navbar tabs -->
    <div
      naveContent
      class="row tab-content p-2 pt-3"
      id="nav-tabContent"
    >
      <!-- Dynamic -->
      <div
        class="tab-pane fade show active"
        id="dynamic-properties"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="row">
          <app-rds-comp-dynamic-properties></app-rds-comp-dynamic-properties>
        </div>
      </div>
      <!-- Entity -->
      <div
        class="tab-pane fade"
        id="dynamic-entity-properties"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="row">
         <app-rds-comp-dynamic-enity-properties></app-rds-comp-dynamic-enity-properties>
        </div>
      </div>
    </div>
      </div>
    </div>
     
  </div>
<!--<ng-container *ngIf="currentAlerts&&currentAlerts.length>0">
  <mfe-loader [config]="rdsAlertMfeConfig"></mfe-loader>
</ng-container>-->
`
});

export const Default = Template.bind({});
Default.args = {
  navtabsItems: [
    {
      label: 'Dynamic Properties',
      tablink: '#dynamic-properties',
      ariacontrols: 'dynamic-properties',
    },
    {
      label: 'Dynamic Entity Properties',
      tablink: '#dynamic-entity-properties',
      ariacontrols: 'dynamic-entity-properties',
    }
  ]
}
