import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsRadioButtonModule } from '@libs/rds-elements';
import { RdsDataTableComponent } from './rds-comp-data-table.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Data Table',
  component: RdsDataTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, NgxTranslateModule, RdsRadioButtonModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsDataTableComponent> = (args: RdsDataTableComponent) => ({
  props:{
    ...args
}
});

export const Default = Template.bind({});

Default.args = {
  tableHeaders : [{ displayName: 'Edition Name', key: 'editionName', dataType: 'text', dataLength: 30, required: true, sortable: true }, { displayName: 'Price ($)', key: 'price', dataType: 'number', dataLength: 5, required: false, sortable: true }, { displayName: 'Trial Period(Day(s))', key: 'trialPeriod', dataType: 'number', dataLength: 5, required: true }],
  tableData: [
    { id: 1, editionName: 'Standard', price: 60, trialPeriod: 5 },
    { id: 2, editionName: 'Basic', price: 120, trialPeriod: 10 },
    { id: 3, editionName: 'Premium', price: 250, trialPeriod: 5 },
    { id: 4, editionName: 'Standard', price: 60, trialPeriod: 7 },
    { id: 5, editionName: 'Basic', price: 100, trialPeriod: 15 },
    { id: 6, editionName: 'Standard', price: 60, trialPeriod: 5 },
    { id: 7, editionName: 'Premium', price: 100, trialPeriod: 47 },
    { id: 8, editionName: 'Standard', price: 100, trialPeriod: 53 },
    { id: 9, editionName: 'Standard', price: 100, trialPeriod: 35 },
    { id: 10, editionName: 'Basic', price: 100, trialPeriod: 35 },
    { id: 11, editionName: 'Premium', price: 100, trialPeriod: 95 },
    { id: 12, editionName: 'Standard', price: 100, trialPeriod: 75 },
    { id: 13, editionName: 'Premium', price: 100, trialPeriod: 15 },
    { id: 14, editionName: 'Basic', price: 100, trialPeriod: 45 },
    { id: 15, editionName: 'Standard', price: 100, trialPeriod: 3 },
    { id: 16, editionName: 'Basic', price: 100, trialPeriod: 1 },
  ],
  actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
  pagination : true

}

export const RadioTable = Template.bind({});
RadioTable.args = {
  tableHeaders : [{ displayName: 'Problem Name', key: 'problemName', dataType: 'text', dataLength: 30, required: true, sortable: true }, 
  { displayName: 'Problem Status', key: 'problemStatus', dataType: 'radio', required: false, sortable: true }, 
 ],
  tableData: [
    { id: 1, problemName: 'Standard', problemStatus: [{
      id: 1,
      label: "Radio Button 1 ",
      checked: false,
      name: "Standard",
      disabled: false
    },
    {
      id: 2,
      label: "Radio Button 2",
      checked: false,
      name: "Standard",
      disabled: false
    },
    {
      id: 3,
      label: "Radio Button 3",
      checked: false,
      name: "Standard"
    }]},
    { id: 2, problemName: 'Basic',  problemStatus: [{
      id: 4,
      label: "Radio Button 1 ",
      checked: false,
      name: "Basic"
    },
    {
      id: 5,
      label: "Radio Button 2",
      checked: false,
      name: "Basic"
    },
    {
      id: 6,
      label: "Radio Button 3",
      checked: false,
      name: "Basic",
      disabled: false
    }] },
    { id: 3, problemName: 'Premium',  problemStatus: [{
      id: 7,
      label: "Radio Button 1 ",
      checked: false,
      name: "Premium"
    },
    {
      id: 8,
      label: "Radio Button 2",
      checked: false,
      name: "Premium"
    },
    {
      id: 9,
      label: "Radio Button 3",
      checked: false,
      name: "Premium"
    },
    {
      id: 10,
      label: "Radio Button 4",
      checked: false,
      name: "Premium"
    }]}
  ],
  pagination : true,
  isDisabled : false
}