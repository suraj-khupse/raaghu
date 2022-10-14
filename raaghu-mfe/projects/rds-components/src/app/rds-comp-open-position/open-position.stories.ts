import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsButtonModule } from '@libs/rds-button';
import { CommonModule } from '@angular/common';
import { RdsInputModule, RdsNavTabModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsCompOpenPositionComponent } from './rds-comp-open-position.component';


export default {
  title: 'Components/Open-Position',
  component: RdsCompOpenPositionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsLabelModule,
        RdsButtonModule,
        RdsNavTabModule,
        CommonModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
  }
} as Meta;

const Template: Story<RdsCompOpenPositionComponent> = (args: RdsCompOpenPositionComponent) => ({
  props: { ...args }
});

export const Default = Template.bind({});
Default.args = {
  item: {
    titleHeader: "Open Positions",
    navtabsItems: [
      {
        id:'developer',
        label: 'Developer',
        tablink: '#developer',
        ariacontrols: 'developer',
      },
      {
        id:'marketing',
        label: 'Marketing',
        tablink: '#marketing',
        ariacontrols: 'marketing',
      },
      {
        id:'designer',
        label: 'Designer',
        tablink: '#designer',
        ariacontrols: 'designer',
      },
      {
        id:'researcher',
        label: 'Researcher',
        tablink: '#researcher',
        ariacontrols: 'researcher',
      }
    ],
    descriptions: [
      {
        type: "developer",
        roleName: "Android Developer",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "marketing",
        roleName: "Sales",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "designer",
        roleName: "UI/UX",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
      {
        type: "researcher",
        roleName: "Tester",
        roleDescription: "Designing and developing advanced applications for the Android platform · Unit-testing code for robustness, ...",
        buttonLabel: "Apply Now"
      },
    ],
  }

}




