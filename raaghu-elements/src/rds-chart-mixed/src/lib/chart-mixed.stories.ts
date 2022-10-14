import { Story, Meta } from '@storybook/angular';
import { RdsChartMixedComponent } from './rds-chart-mixed.component';

export default {
  title: 'Charts/Mixed Chart',
  component: RdsChartMixedComponent,
  argTypes: {
    // canvasBackgroundColor: { control: 'color' },
    // chartStyle: {
    //   options: ['Dark', 'light'],
    //   control: 'radio'
    // }
  },

} as Meta;

const Template: Story<RdsChartMixedComponent> = (args: RdsChartMixedComponent) => ({
  props: args,

});
export const Default = Template.bind({});
Default.args = {
  chartDataSets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [0,37, -12, 70, 35,-32,85,-24],
      backgroundColor: 'rgb(248, 188, 198)',
      borderColor:'rgb(248, 188, 198)',
      order: 0
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: [-10,18, -60, -90, -44,-91,-83,46],
      borderColor: 'blue',
      backgroundColor:'blue',
      order: 1
    }
  ],

  chartLabels: ['January', 'February', 'March', 'April','May','June'],
  chartWidth: 500,
  chartHeight: 400,
  chartOptions: {
    radius: 10,
    pointStyle: 'triangle',
    plugins: {
      legend: {
        position: 'top',
        align: "center",
        pointStyle: "bottom",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};