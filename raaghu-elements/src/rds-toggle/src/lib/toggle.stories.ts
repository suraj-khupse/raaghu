
import { CommonModule } from '@angular/common';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsToggleComponent } from './rds-toggle.component';

export default {
  title: 'Elements/Toggle',
  component: RdsToggleComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RdsIconModule, CommonModule,
        RdsButtonModule
      ],

    })
  ],
  argTypes: {

  },
} as Meta;

const Template: Story<RdsToggleComponent> = (args: RdsToggleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  OnLabel: "On",
  OffLabel: "Off"
};


