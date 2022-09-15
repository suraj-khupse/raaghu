import { Story, Meta } from '@storybook/angular';
import { RdsProgressbarComponent } from './rds-progressbar.component';

export default {
  title: 'Elements/Progress bar',
  component: RdsProgressbarComponent,
  argTypes: {
    colorVariant: {
      options: ['info', 'warning', 'success', 'danger', 'default'],
      control: { type: 'select' }
    },
    striped: {
      options: ['default', 'progress-bar-striped'],
      control: { type: 'radio' }
    },

    progressWidth: { control: { type: 'text' } },
    animation: { control: { type: 'boolean' } },
    label: { control: { type: 'boolean' } },
    height: { control: { type: 'text' } },
    progressbar_MaxWidth: { control: { type: 'text' } },
    //showMulitplebar:{control: { type: 'boolean' }}
  }
} as Meta;

const Template: Story<RdsProgressbarComponent> = (args: RdsProgressbarComponent) => ({
  props: args,
});

export const Progressbar = Template.bind({});
Progressbar.args = {
  colorVariant: 'default',
  striped: 'default',
  progressWidth: 40,
  animation: false,
  label: false,
  height: '15',
  role: 'single',
  progressvalues: [{ progressWidth: "50%", background: 'bg-success', stripe: 'progress-bar-striped', animation: 'progress-bar-animated' }, { progressWidth: "20%", background: 'bg-danger' }, { progressWidth: "30%", background: 'bg-info' }],
  progressbar_MaxWidth: '100'
};

// export const multi_Progressbar = Template.bind({});
// multi_Progressbar.args = {
//   colorType:'default',
//   striped:'default',
//   customColor:'',
//   progressWidth:'25',
//   animation: false,
//   label:false,
//   height:'15',
//   role:'multiple',
//   progressvalues : [{progressWidth:"50%",background:'bg-success',stripe:'progress-bar-striped',
//   animation:'progress-bar-animated'},{progressWidth:"20%",background:'bg-danger'}],
//   progressbar_MaxWidth:'400'
// };

