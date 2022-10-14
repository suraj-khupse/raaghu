import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartIcons } from './chart-icon';
// import { ChartDataSet } from '@rds-common-lib';

// export interface ChartLabel {
//   labelname: Array<string>;
// }

export interface ChartDataSetBool {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-bool',
  templateUrl: './rds-chart-bool.component.html',
  styleUrls: ['./rds-chart-bool.component.scss']
})
export class RdsChartBoolComponent implements OnInit, AfterViewInit {

  title = "rds-chart-bool";
  static count = 0;
  canvas: any;
  ctx: any;
  value: any;

  chartdata: any;
  //chartId = 'mychart' + RdsChartBoolComponent.count;
  @Input() chartId: string = 'mychart0';
  @Input() chartWidth = 400;
  @Input() chartHeight = 400;
  @Input() chartLabels?: any;
  @Input() centerIconName: string = '';
  @Input() chartDataSets?: ChartDataSetBool[] | any;

  @Input() chartOptions?: any;
  @Input() centerSvg: any;
  static inload: boolean;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {

    // this.chartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    // this.chartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor1');
    // this.chartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    // this.chartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    // this.chartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    // this.chartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    // this.chartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    // this.chartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    // this.chartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor3');
  }


  ngOnChanges(changes: SimpleChanges) {

    // if (this.chartBackgroundColor) {
    //   this.style = getComputedStyle(document.body);
    //   this.chartDataSets[0].backgroundColor[0] = this.style.getPropertyValue(this.chartBackgroundColor);
    // }
    // console.log(this.chartId);
    // var canvass = document.getElementById(this.chartId) as HTMLCanvasElement;
    // if (changes['canvasBackgroundColor']) {
    //   this.CanvasbackgroundColor = changes['canvasBackgroundColor'].currentValue

    // }

  }

  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    // this.canvas = document.getElementById(this.chartId);
    // this.canvas.style.backgroundColor = this.CanvasbackgroundColor;
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById(this.chartId);

    //this.canvas.style.backgroundColor=this.CanvasbackgroundColor;
    this.ctx = this.canvas.getContext('2d');
    this.style = getComputedStyle(document.body);
    this.chartDataSets.forEach((element: any) => {
      element.backgroundColor.forEach((bg: any, index: number) => {
        if (bg && this.style) {
          element.backgroundColor[index] = (this.style.getPropertyValue(bg)) ? this.style.getPropertyValue(bg) : bg
        }
      });
    });
    let svg = ChartIcons[this.centerIconName];
    let blob = new Blob([svg], { type: 'image/svg+xml' });
    let url = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = url;
    const centerImage = {
      id: 'counter2',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        let img = new Image();
        img.src = url;
        ctx.drawImage(img, 30, 30, 30, 30);
        ctx.restore();
      }

    };
    const myChart = new Chart(this.ctx, {
      type:'doughnut',
      data: {
        labels: this.chartLabels,
        datasets: this.chartDataSets,
      },

      options: this.chartOptions,
      plugins: [centerImage]
    });
    if (myChart !== null) {
      myChart.canvas.style.height = this.chartHeight + 'px';
      myChart.canvas.style.width = this.chartWidth + 'px';
    }
  }

  // setCanvasBackground(): void {
  //   this.canvas = document.getElementById(this.chartId);
  //   // console.log(this.chartId);
  //   this.canvas.style.backgroundColor = this.CanvasbackgroundColor;
  //   this.ctx = this.canvas.getContext('2d');
  // }
}
