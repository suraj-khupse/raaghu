import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsTagsComponent } from './rds-tags.component';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Elements/Tag',
  component: RdsTagsComponent,
  decorators: [
    moduleMetadata({

      imports: [CommonModule, FormsModule,RdsIconModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'default'],
      control: { type: 'select' }
    },
    tagType: {
      options: ['square', 'round'],
      control: { type: 'select' }
    },

  }
} as Meta

const Template: Story<RdsTagsComponent> = (args: RdsTagsComponent) => ({
  props: args,
});

export const Default = Template.bind({})
Default.args = {
  roles: 'Basic',
  colorVariant: 'primary',
  tagType: 'square'
}

export const TagWithScroll = Template.bind({})
TagWithScroll.args = {
  roles: 'TagWithScroll',
  colorVariant: 'primary',
  tagType: 'square'

}
