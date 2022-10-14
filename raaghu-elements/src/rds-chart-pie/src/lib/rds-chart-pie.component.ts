import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

// export interface chartlabel {
//   labelname: Array<string>;
// }

export interface ChartDataSetPie {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-pie',
  templateUrl: './rds-chart-pie.component.html',
  styleUrls: ['./rds-chart-pie.component.scss']
})
export class RdsChartPieComponent implements OnInit {

  static count = 0;
  //chartId = 'pieChart' + RdsChartPieComponent.count;
  @Input() chartId:string='pieChart0';
  canvas: any;
  context: any;
  @Input() chartWidth:number = 400;
  @Input() chartHeight:number = 500;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetPie[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartPieComponent.count++;
  }

  ngOnInit(): void {
	this.style = getComputedStyle(document.body);
  if(this.style.getPropertyValue('--chartColor1')){
    this.chartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
  }
  if(this.style.getPropertyValue('--chartColor2')){
    this.chartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
  }
  if(this.style.getPropertyValue('--chartColor3')){
    this.chartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
  }
  if(this.style.getPropertyValue('--chartColor4')){
    this.chartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
  }
  if(this.style.getPropertyValue('--chartColor5')){
    this.chartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
  }
  if(this.style.getPropertyValue('--chartColor6')){
    this.chartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
  }
  if(this.style.getPropertyValue('--chartColor7')){
    this.chartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
  }
  if(this.style.getPropertyValue('--chartColor8')){
    this.chartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
  }
  if(this.style.getPropertyValue('--chartColor9')){
    this.chartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
  }
  if(this.style.getPropertyValue('--chartColor10')){
    this.chartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
  }
    // this.chartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    // this.chartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    // this.chartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    // this.chartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    // this.chartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    // this.chartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    // this.chartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    // this.chartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    // this.chartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
  }



  ngOnChanges() {
    this.pieChartBrowser();
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      // this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.context = this.canvas.getContext('2d');

      const pieChart = new Chart(this.context, {
        type: 'pie',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if(pieChart !== null){
        pieChart.canvas.style.height = this.chartHeight+'px'; 
        pieChart.canvas.style.width = this.chartWidth+'px';
      } 
    }
  }

}
