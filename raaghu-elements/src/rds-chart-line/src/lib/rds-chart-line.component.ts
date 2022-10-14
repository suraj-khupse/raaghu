import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetLine {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-line',
  templateUrl: './rds-chart-line.component.html',
  styleUrls: ['./rds-chart-line.component.scss']
})
export class RdsChartLineComponent implements OnInit {

  canvas: any;
  ctx: any;
  gradientcolor: any = ['rgba(48,22,194,76%)', 'rgba(12,5,47,18%)'];
  static count = 0;
  //chartId = 'lineChart' + RdsChartLineComponent.count;;
  @Input() chartId: string = 'lineChart0';
  @Input() chartWidth = 200;
  @Input() chartHeight = 100;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() gradient: boolean = false;
  @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: ChartDataSetLine[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration;

  constructor() {
    this.style = getComputedStyle(document.body);
  }

  ngOnInit(): void {

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
    this.chartDataSets[0].backgroundColor[10] = this.style.getPropertyValue('--chartgradient1');
    this.chartDataSets[0].backgroundColor[11] = this.style.getPropertyValue('--chartgradient2');
    this.chartDataSets[0].backgroundColor[12] = this.style.getPropertyValue('--chartgradient3');
    this.chartDataSets[0].backgroundColor[13] = this.style.getPropertyValue('--chartgradient4');
    this.chartDataSets[0].backgroundColor[14] = this.style.getPropertyValue('--chartgradient5');
    this.chartDataSets[0].backgroundColor[15] = this.style.getPropertyValue('--chartgradient6');
    this.chartDataSets[0].backgroundColor[16] = this.style.getPropertyValue('--chartgradient7');
    this.chartDataSets[0].backgroundColor[17] = this.style.getPropertyValue('--chartgradient8');
    this.chartDataSets[0].backgroundColor[18] = this.style.getPropertyValue('--chartgradient9');
    this.chartDataSets[0].backgroundColor[19] = this.style.getPropertyValue('--chartgradient10');
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient1'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient2'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient3'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient4'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient5'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient6'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient7'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient8'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient9'))
    // this.gradientcolor.push(this.style.getPropertyValue('--chartgradient10'))
  }
  addColorStop(arg0: number, arg1: string) {
    throw new Error('Method not implemented.');
  }


  ngOnChanges() {
    this.lineChartBrowser()
  }

  ngAfterViewInit() {
    this.lineChartBrowser();
  }

  lineChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const gradientFill = this.ctx.createLinearGradient(0, 25, 0, 200);
      gradientFill.addColorStop(1, this.style.getPropertyValue('--chartgradient9'));
      gradientFill.addColorStop(0.10, this.style.getPropertyValue('--chartgradient4'));
      this.chartDataSets[0].backgroundColor = gradientFill;
      this.chartDataSets[1].backgroundColor = gradientFill;
      // if(this.gradient){
      //   if( this.chartDataSets.length>0){
      //   let i=0;
      //     this.chartDataSets.forEach((element: any) => {
      //       const gradientFill = this.ctx.createLinearGradient(500, 0, 100, 0);

      //         gradientFill.addColorStop(i,this.gradientcolor[i]); 
      //         i=i+1;   
      //         gradientFill.addColorStop(i,this.gradientcolor[i]); 
      //         if(i>1){
      //           i=0;
      //         }       
      //       element.backgroundColor=gradientFill
      //     }); 
      //   }
      const lineCanvas = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (lineCanvas !== null) {
        lineCanvas.canvas.style.height = this.chartHeight + 'px';
        lineCanvas.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
