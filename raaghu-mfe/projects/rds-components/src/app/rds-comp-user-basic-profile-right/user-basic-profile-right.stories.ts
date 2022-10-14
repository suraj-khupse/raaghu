import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompUserBasicProfileRightComponent } from './rds-comp-user-basic-profile-right.component';

export default {
  title: 'Components/User Basics',
  component: RdsCompUserBasicProfileRightComponent,
  decorators: [
    moduleMetadata({
      declarations:[
        RdsCompUserBasicProfileRightComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
        RdsLabelModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompUserBasicProfileRightComponent> = (args: RdsCompUserBasicProfileRightComponent) => ({
  props: {
    ...args
  }
});

export const UserProfileRight = Template.bind({});
UserProfileRight.args = {
  userData: [],
  editShimmer: false,
  buttonSpinner: true
}

