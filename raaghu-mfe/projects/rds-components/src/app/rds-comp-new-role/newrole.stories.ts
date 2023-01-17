import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompNewRoleComponent } from './rds-comp-new-role.component';
import { RdsLabelModule } from '@libs/rds-label';


export default {
  title: 'Components/New Role',
  component: RdsCompNewRoleComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompNewRoleComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule, RdsLabelModule
      ],
      providers: [
        FormBuilder,
       
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompNewRoleComponent> = (args: RdsCompNewRoleComponent) => ({
    props:{
      ...args
  }
  });
  export const NewRole = Template.bind({});

  NewRole.args = {
    roleData: {},
    isReset:false
}
