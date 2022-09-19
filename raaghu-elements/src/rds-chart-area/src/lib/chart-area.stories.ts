// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { RdsChartAreaComponent } from './rds-chart-area.component';

export default {
  title: 'Charts/Area Chart ',
  component: RdsChartAreaComponent,
  argTypes: {
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartAreaComponent> = (args: RdsChartAreaComponent) => ({
  props: args,

});

export const Default = Template.bind({});
Default.args = {
  ChartDataSets: [
    {
      label: 'Dataset 1',
      data: [0.5, 0.8, 0.4, 0.6, 0.7, 0.2, 0.9],
      borderColor: 'rgba(75, 192, 192, 0.8)',
      fill: true,
      tension: 0.1
    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
  chartWidth: 600,

  chartOptions: {
    pointStyle: "star",
    radius: 7,
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        align: "start",
        pointStyle: "bottom",
        labels: {
          usePointStyle: true
        },

      },
      tooltip: {
        usePointStyle: true,
      },
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: 'Area Chart with boundries'
      }
    },
    interaction: {
      intersect: false,
    }
  },
};





