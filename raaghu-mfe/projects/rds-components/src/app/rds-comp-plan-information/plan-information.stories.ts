import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsLabelModule, } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompPlanInformationComponent } from './rds-comp-plan-information.component';
import { StoreModule } from '@ngrx/store';



export default {
  title: 'Components/Plan-Information',
  component: RdsCompPlanInformationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        RdsButtonModule,
        RdsLabelModule,
        RdsIconModule,
        SharedModule,
        NgxTranslateModule,   
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompPlanInformationComponent> = (args: RdsCompPlanInformationComponent) => ({
    props:{
      ...args
  },
  });
  export const Default = Template.bind({});
  Default.args ={
    EditionData: {
      displayName: 'Premium',
      creationTimeString: '11/16/2021',
      subscriptionDateString: '11/15/2022',
      featureValues: ["Maximum User Count", "Test Check feature", "Test check feature count 1"]
    },
  }
