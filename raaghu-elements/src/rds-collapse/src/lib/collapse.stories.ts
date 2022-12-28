// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCollapseComponent } from './rds-collapse.component';

export default {
  title: 'Elements/Collapse',
  component: RdsCollapseComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, FormsModule],
    }),
  ],
  parameters: { 
    actions: {
      handles: ['hide.bs.collapse','show.bs.collapse'],
     }
   },
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
  },
} as Meta;


const Template: Story<RdsCollapseComponent> = (args: RdsCollapseComponent) => ({
  props: args,
  template: `
   <rds-collapse [buttonList]="buttonList">
     <div class="collapse mt-1" id="collapseExample">
       <div class="card card-body">
         Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
       </div>
     </div>
   </rds-collapse>`

});
export const Default = Template.bind({});
Default.parameters = { controls: { include: ['buttonList','onClose','onShow'] } };
Default.args = {
  buttonList: [{ colorVariant: 'primary', label: 'Toggle Element', id: 'collapseExample', }]
};

const multiToggleTemplate: Story<RdsCollapseComponent> = (args: RdsCollapseComponent) => ({
  props: args,
  template: `
   <rds-collapse [buttonList]="buttonList">
   <div class="d-flex">
   <div class="collapse mt-1 me-2" id="collapseExample">
       <div class="card card-body">
         Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
       </div>
     </div>
   <div class="collapse mt-1 multi-collapse" id="collapseExample1">
       <div class="card card-body">
         Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
       </div>
     </div>
 </div>
   </rds-collapse>`

});

export const multiToggle = multiToggleTemplate.bind({});
multiToggle.parameters = { controls: { include: ['buttonList','onClose','onShow'] } };
multiToggle.args = {
  buttonList: [{ colorVariant: 'primary', label: 'Toggle First Element', id: 'collapseExample', }, { colorVariant: 'primary', label: 'Toggle Second Element', id: 'collapseExample1' }, { colorVariant: 'primary', label: 'Toggle Both Element', id: 'collapseExample,collapseExample1', }]
};

const horizontalTemplate: Story<RdsCollapseComponent> = (args: RdsCollapseComponent) => ({
  props: args,
  template: `
   <rds-collapse [buttonList]="buttonList">
   <div style="min-height: 120px;">
   <div class="collapse collapse-horizontal mt-1" id="collapseExample">
     <div class="card card-body" style="width: 300px;">
       This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
     </div>
   </div>
 </div>
   </rds-collapse>`

});

export const horizontalCollapse = horizontalTemplate.bind({});
horizontalCollapse.parameters = { controls: { include: ['buttonList','onClose','onShow'] } };
horizontalCollapse.args = {
  buttonList: [{ colorVariant: 'primary', label: 'Toggle Element', id: 'collapseExample', }]
};


