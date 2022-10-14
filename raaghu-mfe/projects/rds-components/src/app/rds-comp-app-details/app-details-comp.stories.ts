
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAppDetailsModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompAppDetailsComponent } from './rds-comp-app-details.component';

export default {
  title: 'Components/App details',
  component: RdsCompAppDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        RdsAppDetailsModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompAppDetailsComponent> = (args: RdsCompAppDetailsComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  appDetailList: [{

    title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home', iconHeight: '18px', iconWidth: '18px', selected: true
  },
  {
    title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home', iconHeight: '18px', iconWidth: '18px', selected: true
  },
  {
    title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home', iconHeight: '18px', iconWidth: '18px', selected: false
  },
  {
    title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home', iconHeight: '18px', iconWidth: '18px', selected: false
  }]
}
