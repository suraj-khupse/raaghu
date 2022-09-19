import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { RdsCheckboxParentChildComponent } from './rds-checkbox-parent-child.component';

export default {

  title: 'Elements/Checkbox Parent Child',
  component: RdsCheckboxParentChildComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
  argTypes: {

  },
  excludeStories: /.*Data$/
} as Meta;

const Template: Story<RdsCheckboxParentChildComponent> = (args: RdsCheckboxParentChildComponent) => ({
  props: { 
    ...args,
    onCheck: actionsData.onCheck,
    onUncheck: actionsData.onUncheck
  }
});
export const actionsData = {
  onUncheck: action("onUncheck"),
  onCheck: action("onCheck")
};

export const Default = Template.bind({})
Default.args = {
 label:'default checkbox',
 checked:false,
 disabled:false,
 switch:false,
 inline:false,
 state:'checkbox',
 id:"checkboxid",
 withLabel: true,
 isInputGroup: false
}
