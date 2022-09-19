import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsIconModule, RdsLabelModule } from '@libs/rds-elements';
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