import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsFileUploaderComponent } from './rds-file-uploader.component';

export default {
  title: 'Elements/File Uploader',
  component: RdsFileUploaderComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    maxfilesize: { control: { type: 'number' } },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    multipleFiles: { control: { type: 'boolean' } },
  }
} as Meta

const Template: Story<RdsFileUploaderComponent> = (args: RdsFileUploaderComponent) => ({
  props: args,
});

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  multipleFiles: false,
  role: 'default',
  label: 'Upload Files',
}


export const multiple_file_uploader = Template.bind({})
multiple_file_uploader.args = {
  size: 'medium',
  multipleFiles: true,
  role: 'fileUpload',
  label: 'Upload Files',
  extensions: 'png, jpg, doc, ,pdf, ppt'
}
