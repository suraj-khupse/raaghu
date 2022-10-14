import { Component, Input, OnInit } from '@angular/core';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'monthly-summary';

  @Input() ChartDataSets:any= [
    {
      label: 'Sales',
      data: [0.5, 0.8, 0.4, 0.6, 0.7, 0.2, 0.3,0.45,0.23,0.4,0.5,0.8,0.9,0.78],
      borderColor: 'rgba(204, 179, 255, 0.8)',
      backgroundColor:'rgba(204, 179, 255, 0.9)',
      fill: true,
      tension: 0.1
    },
    {
      label: 'Revenue',
      data: [0.95, 0.8, 0.5, 0.3, 0.4, 0.6, 0.9,0.7,0.8,0.6,0.5,0.7,0.75,0.62],
      borderColor: 'rgba(102, 26, 255, 0.8)',
      backgroundColor:'rgba(204, 179, 255, 0.9)',
      fill: true,
      tension: 0.1
    }
  ];
  @Input() chartLabels:any= ['June20', 'July20', 'Aug20', 'Sep20', 'Oct20', 'Nov20', 'Dec20', 'Jan21', 'Feb21', 'Mar21', 'Apr21', 'May21', 'June21', 'July21'];
  @Input() chartWidth:number= 1200;
  @Input() chartOptions= {
    pointStyle: "circle",
    radius: 2,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        pointStyle: "circle",
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
        display: false,
        text: "Monthly Summary"
      }
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: [{
        gridLineWidth: 0,      
        gridLines: {
          display:false
        }
      }],
      y: [{
        beginAtZero: true,
        gridLines: {
          display:false
        }
      }]
    }
  };

  @Input()
  inputTypeList: any[] = [
  { value: '2021-2022', some: '2021-2022', isSelected: true },
  { value: '2020-2021', some: '2020-2021', isSelected: false },
  { value: '2019-2020', some: '2019-2020', isSelected: false },
  { value: '2018-2019', some: '2018-2019', isSelected: false },
  { value: '2017-2018', some: '2017-2018', isSelected: false }
  ]
  listDropdown: any[] = [];
  constructor(private store:Store,public translate:TranslateService) { }

  ngOnInit(): void {
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
  }
  loadMonthlySummaryWithYear(event:any){
  }
}
