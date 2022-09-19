import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsCompDownloadCollectionComponent } from './rds-comp-download-collection.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Download Collection',
  component: RdsCompDownloadCollectionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsNavTabModule, RdsPaginationModule, NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompDownloadCollectionComponent> = (args: RdsCompDownloadCollectionComponent) => ({
  props:{
    ...args
  }
});

export const Default = Template.bind({});

Default.args = {
  DownloadTable:[
    { DateofData: '08/07/2022', NummberofDates: '5 days ago',downloadUrl:'assets/Group.jpg' },
    {DateofData: '08/07/2022', NummberofDates: '5 days ago',downloadUrl:'assets/DeleteIcon.jpg'  },
    { DateofData: '08/07/2022', NummberofDates: '5 days ago',downloadUrl:'assets/Photp.jpeg' }
  ]
}