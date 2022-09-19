import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompInvoiceComponent } from './rds-comp-invoice.component';




export default {
  title: 'Components/Invoice',
  component: RdsCompInvoiceComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RdsButtonModule,
        RdsLabelModule,
        RdsTextareaModule,
        RdsInputModule,
        SharedModule,NgxTranslateModule,
        FormsModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompInvoiceComponent> = (args: RdsCompInvoiceComponent) => ({
    props:{
      ...args
  }
  });

  export const Default = Template.bind({});
