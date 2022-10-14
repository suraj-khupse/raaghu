import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCardDetailModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsAddressDetailModule } from 'projects/libs/rds-elements/src/rds-address-detail/src/public-api';
import { RdsLabelModule } from '@libs/rds-label';
import { AppComponent } from './app.component';


export default {
  title: 'Pages/Order Summary',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent, RdsDataTableComponent,
        RdsCompAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule, RdsIconModule,
        SharedModule, RdsFabMenuModule, NgxTranslateModule, RdsInputModule, RdsOffcanvasModule, RdsNavTabModule,
        RdsSelectListModule, RdsCheckboxModule, RdsDatepickerModule, RdsAddressDetailModule, RdsLabelModule, RdsCardDetailModule,
        RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: {
    ...args
  }
});