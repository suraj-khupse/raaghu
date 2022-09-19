
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { RdsSelectListComponent } from './rds-select-list.component';

export default {
  title: 'Elements/Select List',
  component: RdsSelectListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    // size: {
    //   options: ['default', 'small', 'large'],
    //   control: { type: 'radio' },
    // },
    disabled: { control: { type: 'boolean' } },
    multiple: { control: { type: 'boolean' } },
    customIcon: { control: { type: 'text' } },
    rows: { control: { type: 'text' } },
    // LabelType: {
    //   options: ['Top', 'Bottom', 'Left', 'Right'],
    //   control: { type: 'select' },
    // },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'large', 'default'],
      control: { type: 'radio' }
    },
  },
} as Meta;

const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list
    [rows]="rows"
    [size]="size"
    [disabled]="disabled"
    [multiple]="multiple"
    [labelText]="labelText"
    [LabelType]="LabelType"
    customIcon="">
    <option selected hidden>{{placeholderText}}</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </rds-select-list>`,
});
const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list 
  [size]="rows"
    [disabled]="disabled  "
    [multiple]="multiple"
    customIcon=""
    [labelText]="labelText"
    [tooltipTitle]="tooltipTitle"
    [LabelType]="LabelType"
    [tooltipPlacement]="tooltipPlacement"
  >
  <option selected hidden>{{placeholderText}}</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </rds-select-list>`,
});
export const Default = Template.bind({});

Default.args = {
  rows: '',
  labelText: '',
  // labelType: 'Top',
  // size: 'default',
  placeholderText:'Open this select menu', 
  disabled: false,
  multiple: false,
  customIcon: ''
};

export const Tooltip = tooltipTemplate.bind({});
Tooltip.args = {
  disabled: false,
  multiple: false,
  customIcon: '',
  placeholderText:'Open this select menu', 
  tooltipPlacement: '',
  tooltipTitle: 'This is tooltip'
};


// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { moduleMetadata } from '@storybook/angular';
// import { Story, Meta } from '@storybook/angular';
// import { RdsSelectListComponent } from './rds-select-list.component';

// export default {
//   title: 'Elements/Select List',
//   component: RdsSelectListComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [CommonModule, FormsModule],
//     }),
//   ],
//   argTypes: {
//     // size: {
//     //   options: ['default', 'small', 'large'],
//     //   control: { type: 'radio' },
//     // },
//     disabled: { control: { type: 'boolean' } },
//     multiple: { control: { type: 'boolean' } },
//     customIcon: { control: { type: 'text' } },
//     rows: { control: { type: 'text' } },
//     // LabelType: {
//     //   options: ['Top', 'Bottom', 'Left', 'Right'],
//     //   control: { type: 'select' },
//     // },
//     tooltipPlacement: {
//       options: ['top', 'bottom', 'right', 'left'],
//       control: { type: 'radio' }
//     },
//     size: {
//       options: ['small', 'large', 'default'],
//       control: { type: 'radio' }
//     },
//   },
// } as Meta;

// // const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
// //   props: args,
// //   template: `<rds-select-list
// //     [rows]="rows"
// //     [size]="size"
// //     [disabled]="disabled"
// //     [multiple]="multiple"
// //     [labelText]="labelText"
// //     [LabelType]="LabelType"
// //     customIcon="">
// //     <option selected>Open this select menu</option>
// //     <option value="1">One</option>
// //     <option value="2">Two</option>
// //     <option value="3">Three</option>
// //   </rds-select-list>`,
// // });
// // const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
// //   props: args,
// //   template: `<rds-select-list 
// //   [size]="rows"
// //     [disabled]="disabled  "
// //     [multiple]="multiple"
// //     customIcon=""
// //     [labelText]="labelText"
// //     [tooltipTitle]="tooltipTitle"
// //     [LabelType]="LabelType"
// //     [tooltipPlacement]="tooltipPlacement"
// //   >
// //   <option selected>Open this select menu</option>
// //   <option value="1">One</option>
// //   <option value="2">Two</option>
// //   <option value="3">Three</option>
// //   </rds-select-list>`,
// // });
// // export const basic = Template.bind({});

// // basic.args = {
// //   rows: '',
// //   labelText: '',
// //   // labelType: 'Top',
// //   // size: 'default',
// //   disabled: false,
// //   multiple: false,
// //   customIcon: ''
// // };

// // export const Tooltip = tooltipTemplate.bind({});
// // Tooltip.args = {
// //   disabled: false,
// //   multiple: false,
// //   customIcon: '',
// //   tooltipPlacement: '',
// //   tooltipTitle: 'This is tooltip'
// // };






// const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
//   props: args,
 
// });
// const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
//   props: args,
  
// });
// export const basic = Template.bind({});

// basic.args = {
//   rows: '',
//   labelText: '',
//   // labelType: 'Top',
//   // size: 'default',
//   disabled: false,
//   multiple: false,
//   customIcon: '',
//   itemList: [
//     { id:1, value: 'One', displayText: 'One'},
//     { id:2, value: 'Two', displayText: 'Two'},
//     { id:3, value: 'Three', displayText: 'Three'},
//   ]
// };

// export const Tooltip = tooltipTemplate.bind({});
// Tooltip.args = {
//   disabled: false,
//   multiple: false,
//   customIcon: '',
//   tooltipPlacement: '',
//   tooltipTitle: 'This is tooltip',
//   itemList: [
//     { id:1, value: 'One', displayText: 'One'},
//     { id:2, value: 'Two', displayText: 'Two'},
//     { id:3, value: 'Three', displayText: 'Three'},
//   ]
// };