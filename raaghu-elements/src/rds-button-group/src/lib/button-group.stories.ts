// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsButtonGroupComponent } from './rds-button-group.component';

export default {
  title: 'Elements/Button Group',
  component: RdsButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
    }),
  ],
} as Meta;

const Template: Story<RdsButtonGroupComponent> = (args: RdsButtonGroupComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  vertical: false,
  size: 'medium',
  colorVariant: 'primary',
  role: 'button',
  buttonGroupItem: [

    {
      label: 'Left',
      id: '',
      name: '',
    },
    {
      label: 'Middle',
      id: '',
      name: '',
    },
    {
      label: 'Right',
      id: '',
      name: '',
    },
  ]
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  size: 'medium',
  colorVariant: 'primary',
  buttonGroupItem: [

    {
      label: 'Left',
      icon: '',
      id: '',
      name: '',
    },
    {
      label: 'Middle',
      icon: '',
      id: '',
      name: '',
    },
    {
      label: 'Right',
      icon: '',
      id: '',
      name: '',
    },
  ]
};

export const IconButtonGroup = Template.bind({});
IconButtonGroup.args = {
  vertical: false,
  size: 'medium',
  colorVariant: 'primary',
  buttonGroupItem: [
    {
      label: '',
      icon: 'setting',
      iconHeight: '20px',
      iconWidth: '20px',
      iconStroke: true,
      iconFill: false,
      id: '',
      name: '',
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
    },
    {
      label: '',
      icon: 'edit',
      iconHeight: '20px',
      iconWidth: '20px',
      iconStroke: true,
      iconFill: false,
      id: '',
      name: '',
    }
  ]
};

export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = {
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
    },
    {
      label: 'radio 2',
      id: 'radio2',
      name: 'btnradio',
    },
    {
      label: 'radio 3',
      id: 'radio3',
      name: 'btnradio',
    }
  ]
};

export const CheckboxButtonGroup = Template.bind({});
CheckboxButtonGroup.args = {
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
    },
    {
      label: 'checkbox 2',
      id: 'checkbox2',
      name: '',
    },
    {
      label: 'checkbox 3',
      id: 'checkbox3',
      name: '',
    }
  ]
};
