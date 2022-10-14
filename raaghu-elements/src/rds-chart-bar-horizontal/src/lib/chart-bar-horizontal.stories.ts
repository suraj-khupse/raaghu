import { Story, Meta } from '@storybook/angular';
import { RdsChartBarHorizontalComponent } from './rds-chart-bar-horizontal.component';

export default {
  title: 'Charts/Bar Chart',
  component: RdsChartBarHorizontalComponent,
  argTypes: {
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartBarHorizontalComponent> = (args: RdsChartBarHorizontalComponent) => ({
  props: args,

});
var delayed: any;
export const HorizontalBarChart = Template.bind({});
HorizontalBarChart.args = {
  chartDataSets: [
    {
      label: 'Dataset 1',
      data: [20, 30, 50, 80, 98, 95, 55],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)'
    },
    {
      label: 'Dataset 2',
      data: [15, 67, 34, 78, 45, 87, 76],
      backgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Dataset 3',
      data: [31, 52, 43, 91, 74, 93, 76],
      backgroundColor: 'rgba(255, 159, 64, 1)',
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  chartWidth: 500,
  chartHeight: 400,
  chartOptions: {
    responsive: true,
    aspectRatio: 2,
    maintainAspectRatio: false,
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    layout:{
      padding:3
    },
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
        text: 'Horizontal Bar Chart'
      }
    }
  },
};
export const VerticalBarChart = Template.bind({});
VerticalBarChart.args = {
  chartDataSets: [
    {
      label: 'Dataset 1',
      data: [20, 30, 50, 80, 98, 95, 55],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)'
    },
    {
      label: 'Dataset 2',
      data: [15, 67, 34, 78, 45, 87, 76],
      backgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Dataset 3',
      data: [31, 52, 43, 91, 74, 93, 76],
      backgroundColor: 'rgba(255, 159, 64, 1)',
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  chartWidth: 100,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Vertical Bar Chart'
      }
    }
  }
};
export const StackedBarChart = Template.bind({});
StackedBarChart.args = {
  chartDataSets: [
    {
      label: 'Dataset 1',
      data: [20, 30, 50, 80, 98, 95, 55],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)'
    },
    {
      label: 'Dataset 2',
      data: [15, 67, 34, 78, 45, 87, 76],
      backgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Dataset 3',
      data: [31, 52, 43, 91, 74, 93, 76],
      backgroundColor: 'rgba(255, 159, 64, 1)',
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  chartWidth: 100,
  chartOptions: {
    plugins: {
      title: {
        display: true,
        text: 'Stacked Bar Chart'
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};
export const BarChartWithBorderRadius = Template.bind({});
BarChartWithBorderRadius.args = {
  chartDataSets: [
    {
      label: 'Fully Rounded',
      data: [20, 30, 50, 80, 98, 95, 55],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: 'Small Radius',
      data: [15, 67, 34, 78, 45, 87, 76],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 245, 1)',
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  chartWidth: 100,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Border Radius Bar Chart'
      }
    }
  }
};
