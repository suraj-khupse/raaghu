import { Story, Meta } from '@storybook/angular';
import { action } from "@storybook/addon-actions";
import { RdsCheckboxGroupsComponent } from './rds-checkbox-groups.component';
export default {
    title: 'Elements/Checkbox Group',
    component: RdsCheckboxGroupsComponent ,
    argTypes: {

    },
    excludeStories: /.*Data$/
} as Meta

const Template: Story<RdsCheckboxGroupsComponent> = (args: RdsCheckboxGroupsComponent) => ({
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
//  label:'Checkbox Group Label',
itemList : [
  {
    id: 1,
    label: "Child Checkbox 1"
  },
  {
    id: 2,
    label: "Child Checkbox 2"
  },  
],
//  checked:false,
//  disabled:false,
//  switch:false,
//  inline:false,
//  state:'checkbox',
//  id:"checkboxid",
 withLabel: true,
//  isInputGroup: false
}
