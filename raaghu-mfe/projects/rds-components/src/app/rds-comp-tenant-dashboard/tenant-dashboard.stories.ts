import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBigNumberWidgetModule, RdsButtonModule, RdsCardModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartDoughnutModule, RdsCheckboxModule, RdsDatepickerModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsWidgetModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard.component';

export default {
  title: 'Components/Tenant Dashboard',
  component: RdsCompTenantDashboardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsWidgetModule, RdsBigNumberWidgetModule, RdsChartDoughnutModule, RdsChartBoolModule, RdsChartBarHorizontalModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompTenantDashboardComponent>=(args: RdsCompTenantDashboardComponent) => ({
  props:{
    ...args
  }
});

export const Default = Template.bind({});

Default.args={

  ConnectedCallsData:  [80, 100 - 80],
  ClientCallsData:  [65, 100 - 65],
  ProfitShareData:  [10, 25, 30],
  userName:'Keanu Foster',
  memberActivityTableData:  [
    { "cases": 10, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer </div></div></div>", "active": 38, "closed": 10, "rate": "<div class=\"HighRate\">92</div>" }
    , { "cases": 18, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Kim</b><div>Senior Developer </div></div></div>", "active": 342, "closed": 25, "rate": "<div class=\"MidRate\">42</div>" }
    , { "cases": 7, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Jane</b><div>Sales Executive </div></div></div>", "active": 25, "closed": 5, "rate": "<div class=\"HighRate\">96</div>" }
    , { "cases": 14, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\"><b>Brian</b><div>Software Developer</div></div></div>", "active": 42, "closed": 42, "rate": "<div class=\"LowRate\">16</div>" }
    , { "cases": 23, "member": "<div class=\"d-flex\"><div> <img src=../assets/user1_icon.png width=\"50px\" ></div><div class=\"ms-2 mt-2\">Kath</b><div>Manager </div></div></div>", "active": 10, "closed": 3, "rate": "<div class=\"MidRate\">52</div>" }
  ],

  monthlySummaryDataSets : [
    {
      label: 'Sales',
      data: [100, 120, 130, 140, 145, 150, 150, 157, 160, 168, 165, 158],
      borderColor: '#928AE0',
      backgroundColor: 'rgba(179, 134, 224, 0.8)',
      fill: true,
    },
  ],
  monthlySummaryLabels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthlySummarychartWidth : 1000,
  monthlySummarychartOptions : {
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'top',
        align: "end",
        pointStyle: "circle",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: { enabled: true },
    },

    tooltip: {
      display: true,
      usePointStyle: true,
    },
  },

  // DOUGHNUT WITH BOOL
  pschartDatasets : [
    {
      label: 'Dataset 1',
      data: 'ProfitShareData',
      backgroundColor: [
        '#ff6384',
        '#ffcd56',
        '#4bc0c0'
      ],
      fillStyle: 'blue',
      fillRect: [200, 100, 140, 100],

      borderColor: [
        '#fff',
      ],
      borderWidth: 0,
      cutout: '85%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  pschartLabels: ['Total Sales', 'Revenue', 'Expenses'],
  pschartWidth: 200,
  pschartOptions: {

    cutoutPercentage: 75,
    legend: {
      display: false
    },
    responsive: true,
    plugins: {

      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: false
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },
      legend: {
        display: true,
        align: "middle",
        position: 'right',
      },
    }
  },

  // daily sales growth bar chart
  barHrChartDatasets: [
    {
      label: 'Sales Growth',
      data: [15, 67, 34, 78, 45, 87, 76, 32, 50],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 245, 1)',
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ],
  barHrChartLabels: ['10k', '20k', '30k', '40k', '50k', '60k', '70k', '80k', '90k'],
  barHrChartWidth: 255,
  barHrChartOptions: {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        width: 1
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: '',
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: false,
        text: 'Monthly Summary'
      }
    },
  },

  // CallOverView bool chart data
  ClientCallschartDatasets: [
    {
      label: 'Dataset 1',
      data: 'ClientCallsData',
      fillStyle: 'blue',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '#E30707',
        '#E1E1E1'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '90%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  ClientCallschartLabels: ['Total Client calls connected', 'Total Client calls disconnected'],
  ClientCallschartWidth: 200,
  ClientCallschartOptions: {
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {
      display: false
    },
    responsive: true,
    plugins: {
      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: true
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },
      legend: {
        display: false,
        align: "start",
        position: 'right',
      },
      tooltip: { enabled: false },
    },
  },

  // ConnectedCalls bool chart data
  ConnectedCallschartDatasets: [
    {
      label: 'Dataset 1',
      data: 'ConnectedCallsData',
      fillStyle: 'blue',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '#07E33F',
        '#E1E1E1'
      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 1,
      cutout: '90%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ],
  ConnectedCallschartLabels: ['Total Connected calls', 'Total calls'],
  ConnectedCallschartWidth: 200,
  ConnectedCallschartOptions: {
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {
      display: false
    },
    responsive: true,
    plugins: {
      series: {
        label: {
          position: "inside",
          text: 'total', // or "inside" | "outside"
          display: false
        }
      },
      doughnutlabel: {
        labels: [{
          text: '550',
          font: {
            size: 20,
            weight: 'bold'
          }
        }, {
          text: 'total'
        }
        ]
      },
      legend: {
        display: false,
        align: "start",
        position: 'right',
      },
      tooltip: { enabled: false },
    }
  }
}
