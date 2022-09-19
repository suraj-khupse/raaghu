import { Story, Meta } from '@storybook/angular';
import { RdsChartScatterComponent } from './rds-chart-scatter.component';

export default {
  title: 'Charts/Scatter Chart',
  component: RdsChartScatterComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartScatterComponent> = (args: RdsChartScatterComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  ChartDataSets: [
    {
      type: 'scatter',
      label: 'Scatter Dataset',
      data: [
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: 10,
          y: 5
        },
        {
          x: 0.5,
          y: 5.5
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)'
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April'],
  chartWidth: 500,
  chartOptions: {
    pointStyle: "triangle",
    radius: 10,
    plugins: {
      legend: {
        position: 'bottom',
        align: "start",
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  },
};
export const ScatterChartWithMultiAxis = Template.bind({});
ScatterChartWithMultiAxis.args = {
  ChartDataSets: [
    {
      label: 'Scatter Dataset 1',
      data: [
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: 10,
          y: 5
        },
        {
          x: 0.5,
          y: 5.5
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)',
      yAxisID: 'y',
    },
    {
      label: 'Scatter Dataset 2',
      data: [
        {
          x: -20,
          y: 10
        },
        {
          x: 10,
          y: -10
        },
        {
          x: 20,
          y: 15
        },
        {
          x: 1.5,
          y: 15.5
        }
      ],
      backgroundColor: 'rgb(155, 99, 132)',
      yAxisID: 'y',
    }
  ],
  chartLabels: ['January', 'February', 'March', 'April'],
  chartWidth: 500,
  chartOptions: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Scatter Multi Axis Chart'
      }
    },
    scales: {
      y: {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        position: 'left',
        ticks: {
          color: 'red'
        }
      },
      y2: {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        position: 'right',
        reverse: true,
        ticks: {
          color: 'blue'
        },
        grid: {
          drawOnChartArea: false // only want the grid lines for one axis to show up
        }
      }
    }
  }
};
