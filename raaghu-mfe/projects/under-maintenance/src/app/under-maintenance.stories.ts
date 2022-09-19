import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { AppComponent  as underMaintenance} from './app.component';


export default {
  title: 'Pages/Under-Maintenance',
  component: underMaintenance,
  decorators: [
    moduleMetadata({
      declarations: [
      RdsCompAlertComponent],
      imports: [
        RdsButtonModule,
        SharedModule,NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<underMaintenance> = (args: underMaintenance) => ({
    props:{
      ...args
  },
  template:`
  <div class="row">
  <div class="col-md-12">
    <div class="card p-2 justify-content-center border-0 rounded-0 page-full-height">
      <div class="container-fluid justify-content-center ">
        <div class="row  ">
          <div class="col-md-6 offset-md-3">
            <div class="text-center">
              <h1 class="fw-bold mt-5">The site is currently down for maintenance</h1>
              <p class="text-opacity-25 text-secondary mt-5 mb-4">Nulla metus metus ullamcorper vel tincidunt set euismod</p>
              <div class="mt-5 mb-5">
                <img src="../assets/illustration-maintenance.svg" class="w-75 h-75">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
  });

  export const Default = Template.bind({});
