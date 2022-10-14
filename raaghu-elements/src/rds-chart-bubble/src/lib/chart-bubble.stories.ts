import { Story, Meta } from '@storybook/angular';
import { RdsChartBubbleComponent } from './rds-chart-bubble.component';

export default {
  title: 'Charts/Bubble Chart',
  component: RdsChartBubbleComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartBubbleComponent> = (args: RdsChartBubbleComponent) => ({
  props: args,

});

export const Default = Template.bind({});
Default.args = {
  chartDataSets: [
    {
      label: 'Dataset 1',
      data: [90, 97, 20, 30, 40, 50, 60, 70],
      borderColor: ['red'],
      backgroundColor: ['rgba(255, 99, 132)'],
    },
    {
      label: 'Dataset 2',
      data: [90, 80, 70, 60, 50, 40, 30, 90, 98],
      borderColor: ['orange'],
      backgroundColor: ['rgba(255, 206, 86)'],
    }
  ],
  chartLabels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  chartWidth: 500,
  chartHeight:400,
  chartOptions: {
    responsive: true,
    radius: 10,
    maintainAspectRatio: false,
    pointStyle: 'triangle',
    plugins: {

      legend: {
        position: 'top',
        pointStyle: "line",

        labels: {

          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: true,
        text: 'Bubble Chart'
      }
    },

  },
};
