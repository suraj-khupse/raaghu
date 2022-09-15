import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import {  RdsButtonModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompsUserClaimsComponent } from './rds-comps-user-claims.component';

export default {
  title: 'Components/User-Claims',
  component: RdsCompsUserClaimsComponent,
  decorators: [
    moduleMetadata({
       
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,SharedModule,
        RdsInputModule,RdsButtonModule
      ],
      providers: [
        FormBuilder
      ],
      
    })
  ]
} as Meta;

const Template: Story<RdsCompsUserClaimsComponent> = (args: RdsCompsUserClaimsComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});

Default.args={
  userData: [],
}