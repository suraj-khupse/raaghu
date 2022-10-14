import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetRadar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-radar',
  templateUrl: './rds-chart-radar.component.html',
  styleUrls: ['./rds-chart-radar.component.scss']
})
export class RdsChartRadarComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
 // chartId = 'radarChart' + RdsChartRadarComponent.count;
  @Input() chartId:string='radarChart0';
  @Input() chartWidth = 400;
  @Input() chartHeight = 400;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetRadar[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
    this.chartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
    this.chartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    this.chartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    this.chartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    this.chartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    this.chartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    this.chartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    this.chartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    this.chartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    this.chartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
  }

  // public get classes(): string[] {
  //   var classes = ['res-width']
  //   if (this.chartStyle === "Dark") {
  //     classes.push('dark-mode')
  //     return classes
  //   }
  //   return classes
  // }

  ngOnChanges(): void {
    this.radarChartBrowser();
  }

  ngAfterViewInit(): void {
    this.radarChartBrowser();
  }

  radarChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      // this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const radarChart = new Chart(this.ctx, {
        type: 'radar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if(radarChart !== null){
        radarChart.canvas.style.height = this.chartHeight+'px'; 
        radarChart.canvas.style.width = this.chartWidth+'px';
      } 
    }
  }

}
