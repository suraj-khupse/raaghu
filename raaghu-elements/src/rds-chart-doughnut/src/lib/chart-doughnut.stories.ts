import { Story, Meta } from '@storybook/angular';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { RdsChartDoughnutComponent } from './rds-chart-doughnut.component';

export default {
  title: 'Charts/Doughnut Chart',
  component: RdsChartDoughnutComponent,
  argTypes: {
    // canvasBackgroundColor: { control: 'color' },
    // chartStyle: {
    //   options: ['Dark', 'light'],
    //   control: 'radio'
    // }
  },

} as Meta;

const Template: Story<RdsChartDoughnutComponent> = (args: RdsChartDoughnutComponent) => ({
  props: args,

});

export const Default = Template.bind({});
Default.args = {
  chartDataSets: [
    {
      label: 'Dataset 1',
      data: [20, 10, 30, 40],
      backgroundColor: [
        '#ff6384',
        '#ff9f40',
        '#ffcd56',
        '#4bc0c0'
      ],
      borderColor: [
        '#fff',
      ],
    }
  ],

  chartLabels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  chartWidth: 300,
  chartOptions: {
    maintainAspectRatio: false,
    type: 'doughnut',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  },
  titleText: 'Title',
  subTitleText: 'Sub-title',
}
