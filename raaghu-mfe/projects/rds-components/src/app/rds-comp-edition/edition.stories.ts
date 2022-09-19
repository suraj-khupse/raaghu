import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCardModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsCompEditionComponent } from './rds-comp-edition.component';

export default {
  title: 'Components/Edition',
  component: RdsCompEditionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCardModule, RdsNavTabModule, RdsPaginationModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompEditionComponent> = (args: RdsCompEditionComponent) => ({});

export const Default = Template.bind({});
