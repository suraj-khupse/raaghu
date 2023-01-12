import { Component, OnInit, Injector, Input } from '@angular/core';
import { AlertService, ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';
export class dashboardData {
  SalesPrice: string
  SalesProfit: string
  RevenuePrice: string
  RevenueProfit: string
  ProfitSharePrice: string
  DailySalesGrowth: string
  SalesGrowthLoss: string
  ConnectedCallsData: []
  ClientCallsData: []
  ProfitShareData: []
  monthlySummaryDataSets: []
  monthlySummaryLabels: []
  monthlySummarychartWidth: number
  monthlySummarychartOptions: []
  ProfitShareChartDataSets: []
  ProfitSharechartLabels: []
  ProfitSharechartWidth: number
  ProfitSharechartOptions: []
  ConnectedCallschartDatasets: []
  ConnectedCallschartLabels: []
  ConnectedCallschartWidth: number
  ConnectedCallschartOptions: []
  ClientCallschartDatasets: []
  ClientCallschartLabels: []
  ClientCallschartWidth: number
  ClientCallschartOptions: []
  barHrChartDatasets: []
  barHrChartLabels: []
  barHrChartWidth: number
  barHrChartOptions: []
}
export interface MonthlySummaryData {
  monthlySummaryDataSets: [],
  monthlySummaryLabels: [],
  monthlySummarychartWidth: 0,
  monthlySummarychartOptions: [],
}
export interface WidgetData {
  headerTitle: string,
  backgroundColor: string
  color: string
}
export interface BigNumberWidgetData {
  bigNumber: string,
  backgroundColor?: string
  color?: string
  subText?: string
  subTextColor?: string
  iconClass?: string
}

@Component({
  selector: 'rds-comp-admin-dashboard',
  templateUrl: './rds-comp-admin-dashboard.component.html',
  styleUrls: ['./rds-comp-admin-dashboard.component.scss']
})
export class RdsAdminDashboardComponent extends MfeBaseComponent implements OnInit {

  dashBoardData: dashboardData = {
    SalesPrice: '3,32,230.00', SalesProfit: '',
    RevenuePrice: '',
    RevenueProfit: '',
    ProfitSharePrice: '',
    DailySalesGrowth: '',
    SalesGrowthLoss: '',
    ConnectedCallsData: [],
    ClientCallsData: [],
    ProfitShareData: [],
    monthlySummaryDataSets: [],
    monthlySummaryLabels: [],
    monthlySummarychartWidth: 0,
    monthlySummarychartOptions: [],
    ProfitShareChartDataSets: [],
    ProfitSharechartLabels: [],
    ProfitSharechartWidth: 0,
    ProfitSharechartOptions: [],
    ConnectedCallschartDatasets: [],
    ConnectedCallschartLabels: [],
    ConnectedCallschartWidth: 0,
    ConnectedCallschartOptions: [],
    ClientCallschartDatasets: [],
    ClientCallschartLabels: [],
    ClientCallschartWidth: 0,
    ClientCallschartOptions: [],
    barHrChartDatasets: [],
    barHrChartLabels: [],
    barHrChartWidth: 0,
    barHrChartOptions: []
  };
  @Input() borderRadious?: number = 8;
  @Input() SalesPrice?: string = '3,32,230.00';
  @Input() SalesProfit?: string = '2203.00';
  @Input() RevenuePrice?: string = '9,72,900.00';
  @Input() RevenueProfit?: string = '1203.00';
  @Input() ProfitSharePrice?: string = '39,330.00';
  @Input() DailySalesGrowth?: string = '3,73,960.412';
  @Input() SalesGrowthLoss?: string = '5850.75';
  @Input() TotalClientCalls?: string = '75';
  @Input() TotalConnectedCalls?: string = '93';
  @Input() ConnectedCallsData: any = [80, 100 - 80];
  @Input() ClientCallsData: any = [65, 100 - 65];
  @Input() ProfitShareData: any = [60, 25, 15]
  @Input() userName: string = 'Keanu Foster';
  @Input() memberActivityTableData: any = [
    { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 10 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Brian</b></p><small class=\"text-muted\">Software Developer </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 38 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 10 </div></div>", "rate": "<div class=\"HighRate d-flex align-items-center justify-content-center\">92%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 18 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Kim</b></p><small class=\"text-muted\">Senior Developer </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 342 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 25 </div></div>", "rate": "<div class=\"MidRate d-flex align-items-center justify-content-center\">42%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 7 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Jane</b></p><small class=\"text-muted\">Sales Executive </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 25 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 5 </div></div>", "rate": "<div class=\"HighRate d-flex align-items-center justify-content-center\">96%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 14 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Brian</b></p><small class=\"text-muted\">Software Developer</small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 42 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 42 </div></div>", "rate": "<div class=\"LowRate d-flex align-items-center justify-content-center\">16%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 13 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=https://anzstageui.raaghu.io/assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Kath</b></p><small class=\"text-muted\">Manager </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 10 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 3 </div></div>", "rate": "<div class=\"MidRate d-flex align-items-center justify-content-center\">52%</div>" }
  ];
  @Input() toDoListTableData: any = [
    { "issue": " Activate your account with others intil June 2023", "project": "<div class=\"d-flex align-items-center\"><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Volosoft</b></p><small class=\"text-muted\">Website </small></div></div>", "progress": "<div class=\"progress\"><div class=\"progress-bar w-25\" role=\"progressbar\"  aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> </div></div><div class=\"text-muted\"><small> Due in two week</small></div>" }
    , { "issue": "Your Order @22345678 has been confirmed", "project": "<div class=\"d-flex align-items-center\"><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>ABP Framework</b></p><small class=\"text-muted\">Modules </small></div></div>", "progress": "<div class=\"progress\"><div class=\"progress-bar w-50 bg-danger\" role=\"progressbar\"  aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> </div></div><div class=\"text-muted\"><small> Due in one week</small></div>" }
    , { "issue": "Create a new page for CMS", "project": "<div class=\"d-flex align-items-center\"><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>ASPNET Zero</b></p><small class=\"text-muted\">Payment Module </small></div></div>", "progress": "<div class=\"progress\"><div class=\"progress-bar w-75 bg-info\" role=\"progressbar\"  aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> </div></div><div class=\"text-muted\"><small> Due in two days</small></div>" }
    , { "issue": "Activate your account with others intil June 2024", "project": "<div class=\"d-flex align-items-center\"><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Volosoft</b></p><small class=\"text-muted\">ABP Framework</small></div></div>", "progress": "<div class=\"progress\"><div class=\"progress-bar w-25\" role=\"progressbar\"  aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> </div></div><div class=\"text-muted\"><small> Due in two days</small></div>" }
    , { "issue": "Your Order @22345789 has been confirmed", "project": "<div class=\"d-flex align-items-center\"><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>ABP Framework</b></p><small class=\"text-muted\">Website </small></div></div>", "progress": "<div class=\"progress\"><div class=\"progress-bar w-25\" role=\"progressbar\"  aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> </div></div><div class=\"text-muted\"><small> Due in two days</small></div>" }
  ]

  @Input() monthlySummaryDataSets = [
    {
      label: 'Sales',
      data: [800, 425, 280, 700, 490, 200],
      borderColor: '#4DCFFF',
      pointBackgroundColor: '#4DCFFF',
      backgroundColor: '--chart-line-color1',
      fill: true,
      pointRadius: 2.5,
      borderWidth: 1,
      // fillColor: "rgba(195, 40, 96, 0.1)",
      tension: 0.4,
    },
    {
      label: 'Revenue',
      // data: [400, 750.2, 782.4, 639, 490, 445, 470, 598, 750, 630, 500, 780.2],
      data: [400, 782.4, 490, 470, 750, 500],
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      borderColor: '#863BFF',
      pointBackgroundColor: '#863BFF',
      backgroundColor: '--chart-line-color2',
      fill: true,
      pointRadius: 2.5,
      borderWidth: 1,
      tension: 0.4,
    }
  ]
  @Input() monthlySummaryLabels = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov']
  @Input() monthlySummarychartWidth = 650
  @Input() monthlySummarychartHeight = 250
  @Input() monthlySummarychartOptions = {
    animation: {
      x: {
        easing: "linear",
        duration: 3000,
        from: 0
      },
      y: {
        easing: "linear",
        duration: 3000,
        from: 230
      }
    },
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    borderWidth: 1,
    maintainAspectRatio: false,
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
          boxWidth: 8,
          padding: 30,
          height: 10
        },
      },
      tooltip: { enabled: true },
    },
    scales:
    {
      y: {
        beginAtZero: true,
        legend: {
          labels: {
            maxheight: 10
          },
        },
        grid: {
          display: false
        }
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
    },
    tooltip: {
      display: true,
      usePointStyle: true,
    },
  }


  // DOUGHNUT WITH BOOL
  @Input() pschartDatasets = [
    {
      label: 'Dataset 1',
      data: this.ProfitShareData,
      backgroundColor: [
        '--chart-doughnut-color1',
        '--chart-doughnut-color2',
        '--chart-doughnut-color3'
      ],
      fillStyle: 'blue',
      fillRect: [200, 100, 140, 100],

      borderColor: [
        '#fff',
      ],
      borderWidth: 0,
      cutout: '80%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ];
  @Input() pschartLabels = ['Total Sales - 60%', 'Revenue - 25%', 'Expenses - 15%']
  @Input() pschartWidth = 255;
  @Input() pschartHeight = 200;
  @Input() pschartOptions = {
    animation: {
      easing: "easeOutSine",
      duration: 3000,
      segmentShowStroke: true,
      animateScale: false
    },
    animationEasing: "easeOutSine",
    percentageInnerCutout: 60,
    segmentShowStroke: false,
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
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
        labels: {
          boxWidth: 15,
          padding: 15
        },
      },
    },
    elements: {
      center: {
        text: [{ text: '32 k', font: '500 1.4rem Poppins' }, { text: 'Profit', font: '400 0.8rem Poppins' }],
        color: '--chart-bool-icon-color', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      }
    }
  }

  // daily sales growth bar chart
  @Input() barHrChartDatasets = [
    {
      label: 'Sales Growth',
      data: [15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22],
      backgroundColor: ['--chart-bar-horizontal-color'],
      borderRadius: 10,
      barThickness: 7,
      borderSkipped: false
    }
  ];
  @Input() barHrChartLabels = ['10k', '20k', '25k', '30k', '40k', '50k', '60k', '70k', '75k', '80k', '90k', '95k'];
  @Input() barHrChartWidth = 300;
  @Input() barHrchartHeight = 300;
  @Input() barHrChartOptions = {
    animation: {
      x: {
        easing: "linear",
        duration: 3000,
        from: 0
      },
      y: {
        easing: "linear",
        duration: 3000,
        from: 240
      }
    },
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        width: 1
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: '',
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },
      scales:
      {
        y: {
          beginAtZero: true,
        }
      },
      tooltip: {
        usePointStyle: true,
      },
      title: {
        display: false,
        text: 'Daily Sales Growth'
      }
    },
  };

  // CallOverView bool chart data
  @Input() ClientCallschartDatasets = [
    {
      label: 'Dataset 1',
      data: this.ClientCallsData,
      fillStyle: '#D0D7DD',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '--chartColor9',
        '--chartColor7'

      ],
      borderColor: [
        '#fff',
      ],
      borderWidth: 0,
      cutout: '80%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ];
  @Input() ClientCallschartLabels = ['Total Client calls connected', 'Total Client calls disconnected'];
  @Input() ClientCallschartWidth = 200;
  @Input() ClientCallschartOptions = {
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
    maintainAspectRatio: false,
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
        "fontSize": 20,
      },
      tooltip: { enabled: false },
    },
  }

  // ConnectedCalls bool chart data
  @Input() ConnectedCallschartDatasets = [
    {
      label: 'Dataset 1',
      data: this.ConnectedCallsData,
      fillStyle: '#E1E1E1',
      fillRect: [200, 100, 40, 10],
      backgroundColor: [
        '--chartColor1',
        '--chartColor7'

      ],
      iconColor: '--chart-icon-color',
      borderColor: [
        '#fff',
      ],
      borderWidth: 0,
      cutout: '80%',
      title: {
        text: "Doughnut Chart",
        verticalAlign: "center",
        dockInsidePlotArea: true
      },
    }
  ];
  @Input() ConnectedCallschartLabels = ['Total Connected calls', 'Total calls'];
  @Input() ConnectedCallschartWidth = 200;
  @Input() ConnectedCallschartOptions = {
    elements: {
      center: {
        text: '50%'  //set as you wish
      }
    },
    cutoutPercentage: 75,
    legend: {
      display: false
    },
    maintainAspectRatio: false,
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

  rdsMemberActivityTableMfeConfig: ComponentLoaderOptions;
  @Input() memberActivityTableHeader: TableHeader[] = [
    { displayName: 'Member', key: 'member', dataType: 'html' },
    { displayName: 'Cases', key: 'cases', dataType: 'html' },
    { displayName: 'Active', key: 'active', dataType: 'html' },
    { displayName: 'Closed', key: 'closed', dataType: 'html' },
    { displayName: 'Rate', key: 'rate', dataType: 'html' }
  ]
  toDoListTableHeader: TableHeader[] = [
    { displayName: 'Project', key: 'project', dataType: 'html' },
    { displayName: 'Issue', key: 'issue', dataType: 'html' },
    { displayName: 'Progress', key: 'progress', dataType: 'html' }

  ]
  tableStyle: string = 'light';

  constructor(private injector: Injector, public translate: TranslateService, public alertService: AlertService) { super(injector); }

  ngOnInit(): void {
    this.rdsMemberActivityTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.memberActivityTableHeader,
        tableStyle: this.tableStyle,
        width: '100%',
        tableData: this.memberActivityTableData,
        pagination: false,
        recordsPerPage: 10,
        noDataTitle: 'Currently you do not have member activity'
      },
    };
  }
  LoadSalesData() {

  }
  LoadMonthlySummary() {

  }
  LoadProfitShare() {

  }
  LoadDailySalesGrowth() {

  }
  LoadMemberActivityTable() {

  }
  LoadToDoListTable() {

  }
  getMode(): string {
    const mode: string = localStorage.getItem('THEME');
    if (mode == null || mode == '' || !mode) {
      return 'light';
    }
    return mode;
  }
}