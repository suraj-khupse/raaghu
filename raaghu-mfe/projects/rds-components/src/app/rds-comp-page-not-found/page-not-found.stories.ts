import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsLabelModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompPageNotFoundComponent } from './rds-comp-page-not-found.component';

export default {
  title: 'Components/PageNotFound',
  component: RdsCompPageNotFoundComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsLabelModule,RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompPageNotFoundComponent> = (args: RdsCompPageNotFoundComponent) => ({});

export const Default = Template.bind({});
