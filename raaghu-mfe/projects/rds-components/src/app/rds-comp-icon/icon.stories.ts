
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompIconComponent } from './rds-comp-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsButtonModule, RdsSearchInputModule } from '@libs/rds-elements';
// import { FilterPipe } from './filter.pipe';

export default {
  title: 'Icon Library/Icons',
  component: RdsCompIconComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,RdsIconModule,RdsSearchInputModule,RdsButtonModule
      ],
      providers: [
     
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompIconComponent> = (args: RdsCompIconComponent) => ({
    props:{
        ...args
    }
});

export const Icons = Template.bind({});