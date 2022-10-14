import { Story, Meta } from '@storybook/angular';
import { RdsChartLineComponent } from './rds-chart-line.component';

export default {
  title: 'Charts/Line Chart',
  component: RdsChartLineComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartLineComponent> = (args: RdsChartLineComponent) => ({
  props: args,

});

export const Default = Template.bind({});
Default.args = {
  chartDataSets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,

    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  chartWidth: 600,
  chartHeight: 400,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: "center",
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
        text: 'Line Chart',
        Position: 'left',
        align: 'center',
        color: '#666'
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#666'
        }
      },
      y: {
        ticks: {
          color: '#666'
        }
      }
    }
  }
};
export const MultiAxis = Template.bind({});
MultiAxis.args = {

  chartDataSets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,

    },
    {
      label: 'My Second Dataset',
      data: [50, 89, 299, 40, 120, 100],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  chartWidth: 600,
  chartHeight: 400,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Line Chart - Multi Axis'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};
export const Stepped = Template.bind({});
Stepped.args = {

  chartDataSets: [
    {
      label: 'My First Dataset',
      data: [20, -40, 80, 90, 0, -55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      // tension: 0.1,
      // Change the stepped mode to explore different stepped chart options
      // false: no stepping
      // true: stepped before interpolation
      // 'before': step before interpolation
      // 'after': step after interpolation
      // 'middle': step middle interpolation
      stepped: true,

    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  chartWidth: 600,
  chartHeight: 400,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Line Chart - Stepped'
      }
    }
  },
};
export const LineStyling = Template.bind({});
LineStyling.args = {

  chartDataSets: [
    {
      label: 'Unfilled',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',


    }, {
      label: 'Dashed',
      fill: false,
      backgroundColor: 'red',
      borderColor: 'rgb(75, 192, 192)',
      borderDash: [5, 5],
      data: [10, 20, 30, 40, 50, 60],
    }, {
      label: 'Filled',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [15, 25, 35, 45, 55, 65],
      fill: true,
    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  chartWidth: 600,
  chartHeight: 400,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Line Chart - Style'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};
export const LineChartWithAnimation = Template.bind({});
LineChartWithAnimation.args = {

  chartDataSets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      animations: {
        y: {
          duration: 2000,
          delay: 500
        }
      },

    },
    {
      label: 'My Second Dataset',
      data: [60, 50, 70, 61, 26, 85],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  chartWidth: 600,
  chartHeight:400,
  chartOptions: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        align: "start",
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
        text: 'Line Chart',
        Position: 'left',
        align: 'center',
        color: '#666'
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#666'
        }
      },
      y: {
        ticks: {
          color: '#666'
        }
      }
    },
    animations: {
      y: {
        easing: 'easeInOutElastic',
        from: (ctx: any) => {
          if (ctx.type === 'data') {
            if (ctx.mode === 'default' && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
          return;
        }
      }
    },
  }
};
