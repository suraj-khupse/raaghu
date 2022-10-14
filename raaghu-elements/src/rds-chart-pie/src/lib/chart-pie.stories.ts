import { Story, Meta } from '@storybook/angular';
import Chart from 'chart.js/auto';
import { RdsChartPieComponent } from './rds-chart-pie.component';

export default {
  title: 'Charts/Pie Chart',
  component: RdsChartPieComponent,
  argTypes: {
    // canvasBackgroundColor: { control: 'color' },
    // chartStyle: {
    //   options: ['Dark', 'light'],
    //   control: 'radio'
    // }
  },
} as Meta;

const Template: Story<RdsChartPieComponent> = (args: RdsChartPieComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  chartDataSets: [
    {
      label: 'Dataset1',
      data: [20, 10, 20, 40, 10],
      backgroundColor: [
        '#ff6384',
        '#ff9f40',
        '#ffcd56',
        '#4bc0c0',
        '#059bff',
      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1
    }
  ],
  chartLabels: ['red', 'Orange', 'Yellow', 'Green', 'Blue'],
  chartWidth: 300,
  chartHeight:500,
  chartOptions: {
    circumference: 360,
    radius: 100,
    maintainAspectRatio:false,
    animation: {
      animateRotate: false,
      animateScale: true
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        pointStyle: "line",

        labels: {

          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: 'Pie Chart'
      }
    }
  },
};
export const MultiSeriesPieChart = Template.bind({});
MultiSeriesPieChart.args = {
  chartDataSets: [
    {
      backgroundColor: ['#AAA', '#777'],
      data: [21, 79]
    },
    {
      backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
      data: [33, 67]
    },
    {
      backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
      data: [20, 80]
    },
    {
      backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
      data: [10, 90]
    }
  ],
  chartLabels: ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'],
  chartWidth: 300,
  chartHeight:400,
  chartOptions: {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        labels: {
          generateLabels: function (chart: any) {
            // Get the default label list
            const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
            const labelsOriginal = original.call(this, chart);

            // Build an array of colors used in the datasets of the chart
            var datasetColors = chart.data.datasets.map(function (e: any) {
              return e.backgroundColor;
            });
            datasetColors = datasetColors.flat();

            // Modify the color and hide state of each label
            labelsOriginal.forEach((label: any) => {
              // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
              label.datasetIndex = (label.index - label.index % 2) / 2;

              // The hidden state must match the dataset's hidden state
              label.hidden = !chart.isDatasetVisible(label.datasetIndex);

              // Change the color to match the dataset
              label.fillStyle = datasetColors[label.index];
            });

            return labelsOriginal;
          }
        },
        onClick: function (mouseEvent: any, legendItem: any, legend: any) {
          // toggle the visibility of the dataset from what it currently is
          legend.chart.getDatasetMeta(
            legendItem.datasetIndex
          ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
          legend.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
            return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
          }
        }
      }
    }
  }
};
