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
        RdsIconModule,
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
  <div>
  <div class="row">
  <div class="col-md-12">
    <div class="pt-4 border-0">
      <div class="container-fluid justify-content-center ">
            <div class="text-center">
              <img src="static/media/.storybook/assets/raaghu-logo.svg" alt="Raaghu" class="raaghu-lg2">
              <h1 class="fw-bold pt-3 pb-3 sm-w-50 mx-auto sm-w-100">The site is currently down for maintenance</h1>
              <p class="text-opacity-25 fw-medium text-secondary mb-4">Nulla metus metus ullamcorper vel tincidunt set euismod</p>
              <div class="mt-5 mb-5">
                <img src="https://stageui.raaghu.io/assets/illustration-maintenance.svg" class="raaghu-maintenance">
              </div>
            </div>
      </div>
    </div>
  </div>
</div>
  <footer>
    <div class="sm-d-flex justify-content-between align-items-center border-top py-3 px-3 bg-grey sm-block">
      <p class="mb-0">Copyrights @2022 | All rights reserved.</p>
      <div class="d-flex sm-pt-1">
      <p class="mb-0">Connect with us :</p>
      <ul class="list-unstyled d-flex mb-0">
        <li class="ms-3"><a class="link-dark" href="#"><rds-icon name="twitter" height="18px" colorVariant="primary" width="18px"></rds-icon></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><rds-icon name="phone" height="18px" colorVariant="primary" width="18px"></rds-icon></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><rds-icon name="envelope" height="18px" colorVariant="primary" width="18px"></rds-icon></a></li>
      </ul>
      </div>
    </div>
  </footer>
</div>

`
  });

  export const Default = Template.bind({});
