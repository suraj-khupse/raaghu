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
    <div class="p-2 border-0 pt-5">
    <img src="static/media/.storybook/assets/raaghu-logo.svg" alt="Raaghu" class="raaghu-lg">
            <div class="row d-flex align-items-center">
              <div class="col-md-6 mb-3">
                <div class="top-0 d-grid gap-4">
                  <h1 class="mb-0 fw-bold">Under Construction</h1>
                  <p class="fw-medium text-muted text-secondary pe-5 sm-pe-0">Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat</p>
                  <div class="d-flex align-items-end">
                    <a href="#" target="blank" class="align-self-end d-flex  bottom-0">
                      <rds-button [label]="'Read More'" [size]="'small'" [colorVariant]="'primary'" class=""></rds-button>
                    </a>
                  </div>
                </div>
                
              </div>
              <div class="col-md-6 mb-3">
                <img src="https://stageui.raaghu.io/assets/Illustration-under-construction.svg" class="w-100 h-100">
              </div>
            </div>
    </div>
`
  });

  export const Default = Template.bind({});
