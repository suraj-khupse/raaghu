import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';

import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompNewClaimTypeComponent } from 'projects/rds-components/src/app/rds-comp-new-claim-type/rds-comp-new-claim-type.component';
import { ClaimTypesComponent } from './claim-types.component';
import { RdsCompClaimsComponent } from 'projects/rds-components/src/app/rds-comp-claims/rds-comp-claims.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Pages/Claim types',
  component:RdsCompNewClaimTypeComponent ,
  decorators: [
    moduleMetadata({
      declarations: [ RdsDataTableComponent,RdsCompNewClaimTypeComponent,RdsCompClaimsComponent,
   ],
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,RdsButtonModule,RdsCheckboxModule,RdsLabelModule,RdsIconModule,RdsInputModule,SharedModule,RdsOffcanvasModule] ,
     
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompNewClaimTypeComponent> = (args: RdsCompNewClaimTypeComponent) => ({
    props:{
      ...args
  },
  template: 
  `<app-claim-types></app-claim-types> 
  <app-rds-data-table
   [tableHeaders]="claimtypesHeaders" 
   [tableData]="ClaimTypeData" 
   [actions]="actions"></app-rds-data-table>
   `

   

  });

export const Default = Template.bind({});
Default.args={
  claimtypesHeaders: [
    { key: 'Name', displayName: 'Name', dataType: 'text', sortable: true, filterable: true },
    { key: 'ValueType', displayName: 'ValueType', dataType: 'text', sortable: true, filterable: true },
    { key: 'Description', displayName: 'Description', dataType: 'text', sortable: true, filterable: true },
    { key: 'Regex', displayName: 'Regex', dataType: 'html', sortable: true, filterable: true },
    { key: 'Required', displayName: 'Required', dataType: 'html', sortable: true, filterable: true },
    
    ],
    ClaimTypeData :[
      {
        Id:1,
        Name: 'User Id ',
        ValueType: 'Your Id',
        Description: 'Associate',
        Regex: 'Regex',
        Required: false,
        
      },
      {
        Id:2,
        Name: 'On- Request  ',
        ValueType: 'Boolean',
        Description: 'Associate',
        Regex: 'Regex',
        Required: false,
        
      },
      {
        Id:1,
        Name: 'User Id ',
        ValueType: 'Your Id',
        Description: 'Associate',
        Regex: 'Regex',
        Required: false,
        
      },
      {
        Id:1,
        Name: 'User Id ',
        ValueType: 'Your Id',
        Description: 'Associate',
        Regex: 'Regex',
        Required: false,
        
      },
      {
        Id:1,
        Name: 'User Id ',
        ValueType: 'Your Id',
        Description: 'Associate',
        Regex: 'Regex',
        Required: false,
        
      }
    ],
    actions: [{ id: 'edit', displayName: 'Edit' },
    { id: 'delete', displayName: 'Delete' }
  ]
  }
