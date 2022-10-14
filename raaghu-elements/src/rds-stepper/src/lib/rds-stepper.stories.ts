import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsStepperComponent } from './rds-stepper.component';


export default {
  title: 'Elements/Stepper',
  component: RdsStepperComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;
const Template: Story<RdsStepperComponent> = (args: RdsStepperComponent) => ({
  props: args,
  template:
      `
      <div>
      <rds-stepper [stepperList]="stepperList" [stepperType]="stepperType" [readOnly]="readOnly" [activePageNumber]="1" ></rds-stepper>
      <div naveContent class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="contents">
        <p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
         The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div></div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><div class="contents bg-white p-2">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
         The  tab JavaScript swaps classes to control the content visibility  tab JavaScript swaps classes to control the content visibility   tab JavaScript swaps classes to control the content visibilityand styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div></div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">Tab3 is showing with nav tab </div></div>
        <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">test</div></div>
      </div>
    </div>
    
  `,
});

export const Simple = Template.bind({});
 
Simple.args = {
  stepperType: 'simple',
  readOnly:true
};

export const Panel = Template.bind({});

Panel.args = {
  stepperType: 'panel',
    readOnly: true

};

export const Bullets = Template.bind({});

Bullets.args = {
  stepperType: 'bullets'
};

export const Panel_Simple = Template.bind({});

Panel_Simple.args = {
  stepperType: 'panel-simple'
};
  
export const Panel_Arrow = Template.bind({});

Panel_Arrow.args = {
  stepperType: 'panel-arrow'
};

export const Panel_Border = Template.bind({});

Panel_Border.args = {
  stepperType: 'panel-border'
};
  
export const multi_circles_1 = Template.bind({});

multi_circles_1.args = {
  stepperType: 'multi-circles-1'
};

export const multi_circles_2 = Template.bind({});

multi_circles_2.args = {
  stepperType: 'multi-circles-2'
};
export const multi_circles_3 = Template.bind({});

multi_circles_3.args = {
  stepperType: 'multi-circles-3'
};

export const Bullets_Text = Template.bind({});

Bullets_Text.args = {
  stepperType: 'bullet-text'
};

export const Progress_Bar = Template.bind({});

Progress_Bar.args = {
  stepperType: 'progress-bar'
};
