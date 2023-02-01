import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsFileUploaderComponent } from './rds-file-uploader.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Elements/File Uploader',
  component: RdsFileUploaderComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule, CommonModule],
    }),
  ],
  argTypes: {
    maxfilesize: { control: { type: 'number' } },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    multipleFiles: { control: { type: 'boolean' } },
    role: {table: {disable: true,},},
  }
} as Meta

const Template: Story<RdsFileUploaderComponent> = (args: RdsFileUploaderComponent) => ({
  props: args,
});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['size', 'multipleFiles', 'role', 'label','onItemClick','click'] } };
Default.args = {
  size: 'medium',
  multipleFiles: false,
  role: 'default',
  label: 'Upload Files',
}


export const multiple_file_uploader = Template.bind({})
multiple_file_uploader.parameters = { controls: { include: ['size', 'multipleFiles', 'role', 'label', 'extensions','onItemClick','click'] } };
multiple_file_uploader.args = {
  size: 'small',
  multipleFiles: true,
  role: 'fileUpload',
  label: 'Upload Files',
  extensions: 'png, jpg, doc, ,pdf, ppt'
}
