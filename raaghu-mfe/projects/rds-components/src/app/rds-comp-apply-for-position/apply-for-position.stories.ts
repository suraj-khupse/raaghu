import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsButtonModule } from '@libs/rds-button';
import { CommonModule } from '@angular/common';
import { RdsCompApplyForPositionComponent } from './rds-comp-apply-for-position.component';
import {RdsFileUploaderModule, RdsInputModule, RdsTextareaModule } from '@libs/rds-elements';


export default {
  title: 'Components/Apply-For-Position',
  component: RdsCompApplyForPositionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,      
        RdsLabelModule,
        RdsInputModule,
        RdsTextareaModule,
        RdsButtonModule,
        RdsFileUploaderModule,
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

const Template: Story<RdsCompApplyForPositionComponent> = (args: RdsCompApplyForPositionComponent) => ({
  props: { ...args }
});

export const Default = Template.bind({});
Default.args = {
  itemList: [{
    titleHeader: "Apply for a Position",
    titleDescription: "Please complete the form below to apply for a position with us.",
    emailInputlabel: "Email ID",
    emailInputPlaceholder: "name@domain.com",
    fullNameInputlabel: "Full Name",
    fullNameInputPlaceholder:"full name",
    contactInputlabel: "Contact Number",
    contactInputPlaceholder:"+91 9087654321",
    positionInputlabel: "Applying for Position:",
    positionInputPlaceholder:"position name",
    startInputLabel: "When can you start?",
    startInputPlaceholder:"notice period",
    coverInputLabel: "Cover Letter",
    coverInputPlaceholder:"cover letter..",
    uploadInputlabel: "Upload Resume",
    buttonLabel:"Apply Now"
  }]
}




