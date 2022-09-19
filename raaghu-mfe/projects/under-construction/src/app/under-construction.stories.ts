import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { AppComponent as underConstruction} from './app.component';


export default {
  title: 'Pages/Under-construction',
  component: underConstruction,
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
const Template: Story<underConstruction> = (args: underConstruction) => ({
    props:{
      ...args
  },
  template:`
  <div class="row">
  <div class="col-md-12">
    <div class="card p-2 justify-content-center border-0 rounded-0 page-full-height">
      <div class="container-fluid justify-content-center">
        <div class="row">
          <div class="col-md-10 offset-md-2">
            <div class="row">
              <div class="col-md-4 offset-md-1">
                <div class="top-0 d-grid gap-4">
                  <h1 class="mb-0 fw-bold">Under Construction</h1>
                  <p class=" text-opacity-25 text-secondary">Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat}</p>
                  <div class="d-flex align-items-end">
                    <a href="https://raaghu.io/" target="blank" class="align-self-end d-flex  bottom-0">
                      <rds-button [label]="'Read More'" [size]="'small'" [colorVariant]="'primary'" class=""></rds-button>
                    </a>
                  </div>
                </div>
                
              </div>
              <div class="col-md-4 mt-5">
                <img src="../assets/Illustration-under-construction.svg" class="w-100 h-100">
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
