import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppComponent } from './app.component';


export default {
  title: 'Pages/Under-construction',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent
      ],
      imports: [
        RdsButtonModule,
        SharedModule,NgxTranslateModule,
        RdsCompAlertModule
      ],
      providers: [
        FormBuilder,TranslateService, TranslateStore
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props:{
      ...args
  },
  });

  export const Default = Template.bind({});
