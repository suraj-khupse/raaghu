// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
// import {AppComponent as RdsAccordionComponent } from './app.component';
import { RdsAccordionComponent } from './rds-accordion.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Elements/Accordion',
  component: RdsAccordionComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsAccordionComponent, AccordionItemComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    onClose: { action: 'clicked' },
    onShow: { action: 'clicked' },
  },
} as Meta;

const Template: Story<RdsAccordionComponent> = (args: RdsAccordionComponent) => ({
  props: { ...args },
  template: `<rds-accordian></rds-accordian>`,
});
export const Default: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
  <rds-accordian [id]="id" >
  <accordion-item [parentId]="id" title="Section 1 title" [expanded]="false" >
  <h3 accordianBody>Custom </h3>
  </accordion-item>
  <accordion-item title="Section 2 title" [parentId]="id" >
  <h3 accordianBody>Custom </h3>
  </accordion-item>
</rds-accordian>`,
});
Default.parameters = { controls: { include: ['expanded', 'id','accordianClass','accordionIcon'] } };
Default.args = {
  expanded: false,
  id: "accordionBasic"
};
export const Flush: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
    <rds-accordian [flush]= "flush" [id]="id">
    <accordion-item title="Section 1 title" [parentId]="id" >
    <h3 accordianBody>Custom </h3>
    </accordion-item>
    <accordion-item title="Section 2 title" [parentId]="id" >
    <h3 accordianBody>Custom </h3>
    </accordion-item>
  </rds-accordian>`,
});
Flush.parameters = { controls: { include: ['flush', 'expand', 'id','accordianClass','accordionIcon'] } };
Flush.args = {
  flush: true,
  expand: false,
  id: "accordionWithFlush"
};
export const StackOpen: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
    <rds-accordian [outline]= "true">
      <accordion-item title="Section 1 title" [alwaysOpen]="alwaysOpen" [expanded]="true">
      this is content updated
      </accordion-item>
    </rds-accordian>
    <rds-accordian>
      <accordion-item title="Section 2 title" [alwaysOpen]="alwaysOpen" >
      <h3>Custom </h3>
      </accordion-item>
    </rds-accordian>`,
});
StackOpen.parameters = { controls: { include: ['expand', 'alwaysOpen','accordianClass','accordionIcon'] } };
StackOpen.args = {
  expand: false,
  alwaysOpen: true
};
export const StackClosed: Story<RdsAccordionComponent> = (args) => ({
  props: args,
  template: `
  <rds-accordian  [border]= "true" [outline]= "true" [id]="id">
  <accordion-item title="Section 1 title" [parentId]="id" >
  <h3 accordianBody>Custom </h3>
  </accordion-item>
  <accordion-item title="Section 2 title" [parentId]="id" >
  <h3 accordianBody>Custom </h3>
  </accordion-item>
</rds-accordian>`,
});
StackClosed.parameters = { controls: { include: ['expand', 'alwaysOpen', 'flush', 'outline', 'border','accordianClass','accordionIcon'] } };
StackClosed.args = {
  expand: false,
  alwaysOpen: true,
  flush: false,
  outline: false,
  border: true
};
