import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsLabelModule, RdsRadioButtonModule, RdsTableModule } from '@libs/rds-elements';
import { RdsCompPricingTableComponent } from './rds-comp-pricing-table.component';
import { RdsLikeDislikeModule } from '../../../../libs/rds-elements/src/rds-like-dislike/src/public-api';

export default {
  title: 'Components/Pricing Table',
  component: RdsCompPricingTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompPricingTableComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsTableModule,
        RdsRadioButtonModule,
        RdsLabelModule,
        RdsLikeDislikeModule
      ],
      providers: [
        FormBuilder,
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompPricingTableComponent> = (args: RdsCompPricingTableComponent) => ({
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  selectedPlan: 'Monthly Plan',
  planList: [
    {
      "id": 1,
      "label": "Monthly Plan",
      "name": "Radio-Button",
      "checked": true,
      "planInfo": [{
        "price": "$240 ",
        "description": "Video team and setup, we can create product.",

      },
      {
        "price": "$300 ",
        "description": "Video team and setup, we can create product.",

      },
      {
        "price": "$420 ",
        "description": "Video team and setup, we can create product.",

      }]
    },
    {
      "id": 2,
      "label": "Yearly Plan",
      "name": "Radio-Button",
      "checked": false,
      "planInfo": [
        {
          "price": "$300 ",
          "description": "Video team and setup, we can create product.",
        },
        {
          "price": "$420 ",
          "description": "Video team and setup, we can create product.",

        },
        {
          "price": "$480 ",
          "description": "Video team and setup, we can create product.",

        }]
    },
  ],
  itemList: [
    {
      headerLabel: 'Plans',
      label: 'DESIGN SYSTEM',
      pricingTableHeaderItems: [
        { displayName: 'Plans', dataType: 'text', key: 'name' },
        { displayName: 'Regular', dataType: 'icon', key: 'icon' },
        { displayName: 'Professional', dataType: 'icon', key: 'icon' },
        { displayName: 'Ultimate', dataType: 'icon', key: 'icon' }],
      pricingTableBodyItems:
        [{ id: 1, name: 'Host admin screen', icon: 'tickmark' },
        { id: 2, name: 'Tenant Admin screens', icon: 'tickmark' },
        { id: 3, name: 'End users screens', icon: 'tickmark' },
        { id: 4, name: 'Elements & Component library', icon: 'tickmark' },
        { id: 5, name: 'Downloadable Adobe XD & Figma Kits', icon: 'tickmark' },
        { id: 6, name: 'Theme - Light & Dark mode', icon: 'tickmark' },
        { id: 7, name: 'Theme - Accessible (High Contrast)', icon: 'tickmark' },
        ]
    },
    {
      label: 'Micro Front-end',
      pricingTableHeaderItems: [
        { displayName: 'Plans', dataType: 'text', key: 'name' },
        { displayName: 'Regular', dataType: 'icon', key: 'icon' },
        { displayName: 'Professional', dataType: 'icon', key: 'icon' },
        { displayName: 'Ultimate', dataType: 'icon', key: 'icon' }],
      pricingTableBodyItems: [
        { id: 1, name: 'CI/CD for Azure DevOps', icon: 'tickmark' },
        { id: 2, name: 'Micro Front-end Framework with Angular Support', icon: 'tickmark' },
        { id: 3, name: 'Integration with Kendo UI Controls', icon: 'tickmark' },
        { id: 4, name: 'Integration with Syncfusion control integration', icon: 'tickmark' },
      ]
    },
    {
      label: 'Specification',
      pricingTableHeaderItems: [
        { displayName: 'Plans', dataType: 'text', key: 'name' },
        { displayName: 'Regular', dataType: 'textNumber', key: 'text' },
        { displayName: 'Professional', dataType: 'textNumber', key: 'number' },
        { displayName: 'Ultimate', dataType: 'textNumber', key: 'numberTwo' },
      ],
      pricingTableBodyItems: [
        { id: 1, name: 'Included developer licenses', text: '3', number: '10', numberTwo: '20' },
        { id: 2, name: 'Additional developer license', text: '$499', number: '$399', numberTwo: '$299' },
        { id: 3, name: 'No of Projects', text: 'Single project', number: '3 project', numberTwo: '3 project' },
        { id: 4, name: 'Perpetual license', text: 'Yes', number: 'Yes', numberTwo: 'Yes' },
        { id: 5, name: 'Latest source Code access', text: '1 year', number: '3 year', numberTwo: 'Lifetime' },
        { id: 6, name: 'Access to Premium Support Forum', text: 'No', number: 'No', numberTwo: 'Yes' },
        { id: 7, name: 'Forum support incident count/year', text: '20', number: '50', numberTwo: 'Unlimited' },
        { id: 8, name: 'Forum support incident count/year', text: '$199', number: '$99', numberTwo: 'Free' },
        { id: 9, name: 'Private ticket & email support', text: 'No', number: 'Yes', numberTwo: 'Yes' },
      ]
    },
  ],
}
