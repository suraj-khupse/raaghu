// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsButtonGroupComponent } from './rds-button-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Elements/Button Group',
  component: RdsButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule,CommonModule,FormsModule],
    }),
  ],
} as Meta;

const Template: Story<RdsButtonGroupComponent> = (args: RdsButtonGroupComponent) => ({
  props: args,
});

export const DefaultFilled = Template.bind({});
DefaultFilled.args = {
  vertical: false,
  size: 'medium',
  colorVariant: 'primary',
  role: 'button',
  buttonGroupItem: [

    {
      label: 'Left',
      id: '',
      name: '',
      colorVariant: 'primary'
    },
    {
      label: 'Middle',
      id: '',
      name: '',
      colorVariant: 'danger'

    },
    {
      label: 'Right',
      id: '',
      name: '',
      colorVariant: 'warning'

    },
  ]
};

export const VerticalGroupFilled = Template.bind({});
VerticalGroupFilled.args = {
  vertical: true,
  size: 'medium',
  colorVariant: 'primary',
  buttonGroupItem: [

    {
      label: 'Left',
      icon: '',
      id: '',
      name: '',
      colorVariant: 'primary'

    },
    {
      label: 'Middle',
      icon: '',
      id: '',
      name: '',
      colorVariant: 'primary'

    },
    {
      label: 'Right',
      icon: '',
      id: '',
      name: '',
      colorVariant: 'primary'

    },
  ]
};

export const IconGroupFilled = Template.bind({});
IconGroupFilled.args = {
  vertical: false,
  size: 'medium',
  colorVariant: 'primary',
  buttonGroupItem: [
    {
      label: '',
      icon: 'gear',
      iconHeight: '20px',
      iconWidth: '20px',
      iconStroke: true,
      iconFill: false,
      id: '',
      name: '',
      colorVariant: 'primary'

    },
    {
      label: '',
      icon: 'delete',
      iconHeight: '20px',
      iconWidth: '20px',
      iconStroke: true,
      iconFill: false,
      id: '',
      name: '',
      colorVariant: 'primary'

    },
    {
      label: '',
      icon: 'pencil',
      iconHeight: '20px',
      iconWidth: '20px',
      iconStroke: true,
      iconFill: false,
      id: '',
      name: '',
      colorVariant: 'primary'

    }
  ]
};

export const radioButtonGroup = Template.bind({});
radioButtonGroup.args = {
  vertical: false,
  size: 'medium',
  colorVariant: 'primary',
  outline: true,
  role: 'radio',
  buttonGroupItem: [
    {
      label: 'radio 1',
      id: 'radio1',
      name: 'btnradio',
      colorVariant: 'primary',
      value: 0

    },
    {
      label: 'radio 2',
      id: 'radio2',
      name: 'btnradio',
      colorVariant: 'primary',
      value: 1
    },
    {
      label: 'radio 3',
      id: 'radio3',
      name: 'btnradio',
      colorVariant: 'primary',
      value: 2
    }
  ]
};

export const OutlineButtonGroup = Template.bind({});
OutlineButtonGroup.args = {
  vertical: false,
  size: 'medium',
  colorVariant: 'primary',
  outline: true,
  role: 'checkbox',
  buttonGroupItem: [
    {
      label: 'checkbox 1',
      id: 'checkbox1',
      name: '',
      colorVariant: 'primary',
      checked: true

    },
    {
      label: 'checkbox 2',
      id: 'checkbox2',
      name: '',
      colorVariant: 'primary',
      checked: false
    },
    {
      label: 'checkbox 3',
      id: 'checkbox3',
      name: '',
      colorVariant: 'primary',
      checked: false

    }
  ]
};
