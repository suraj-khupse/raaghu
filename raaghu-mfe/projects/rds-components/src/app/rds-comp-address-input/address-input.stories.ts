import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAddressInputComponent } from './rds-comp-address-input.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Components/Address Input',
  component: RdsAddressInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsAddressInputComponent> = (args: RdsAddressInputComponent) => ({});

export const Default = Template.bind({});
