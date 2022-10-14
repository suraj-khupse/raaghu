import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompBasicResourceComponent } from './rds-comp-basic-resource.component';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsInputModule, RdsTextareaModule } from '@libs/rds-elements';

export default {
  title: 'Components/Api Scope Basic Resource',
  component: RdsCompBasicResourceComponent,
  decorators: [
    moduleMetadata({
        
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule, NgxTranslateModule, RdsInputModule, RdsLabelModule,
        RdsCheckboxModule,RdsButtonModule,RdsTextareaModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompBasicResourceComponent> = (args: RdsCompBasicResourceComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
  ResourceData:{
    Name: '',
    Displayname: '',
    Description: '',
    enables: false,
    required: false,
    emphasize: false,
    showindiscovery: false
  }
} 
 
