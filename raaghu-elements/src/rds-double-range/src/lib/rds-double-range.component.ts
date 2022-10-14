import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-double-range',
  templateUrl: './rds-double-range.component.html',
  styleUrls: ['./rds-double-range.component.scss']
})
export class RdsDoubleRangeComponent implements OnInit {

  @Input() val1: number = 0;
  @Input() val2: number = 100;

  @Input() min = 0

  @Input() max = 100

  @Output() rangeValueOne = new EventEmitter()

  @Output() rangeValueTwo = new EventEmitter()

  rangeval!: HTMLInputElement
  range1!: HTMLSpanElement
  range2!: HTMLSpanElement
  sliderOne!: HTMLInputElement
  sliderTwo!: HTMLInputElement
  sliderTrack!: HTMLDivElement

  minGap = 0

  valueDisabled1!: boolean;
  valueDisabled2!: boolean;
  rangeZIndex1!: number;
  rangeZIndex2!: number;

  constructor() { }

  ngOnInit(): void {
    this.val1;
    this.val2;
    this.sliderTrack = document.querySelector('.slider-track') as HTMLDivElement
    this.sliderOne = document.getElementById('slider1') as HTMLInputElement
    this.sliderTwo = document.getElementById('slider2') as HTMLInputElement
    this.fillColor();


  }

  writeValue(obj: any): void {
    this.val1 = obj;
    this.val2 = obj;
  }

  rangeone() {
    this.val1 = parseInt(this.sliderOne.value)
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.val1 = parseInt(this.sliderTwo.value) - this.minGap;
    }
    this.rangeValueOne.emit(this.val1)
    this.fillColor();
    if (this.val1 == 0 && this.val2 == 0) {
      this.valueDisabled1 = true;
      this.valueDisabled2 = false;
      this.rangeZIndex1 = 0;
      this.rangeZIndex2 = 1;
    } 
    else if (this.val1 == 100 && this.val2 == 100) {
      this.valueDisabled1 = false;
      this.valueDisabled2 = true;
      this.rangeZIndex1 = 1;
      this.rangeZIndex2 = 0;
    } 
    else if(this.val1 >= this.val2){
      this.val1 <= this.val2;
      this.valueDisabled1 = true;
      this.valueDisabled2 = false;
      this.rangeZIndex1 = 0;
    }
    else if(this.val1 < this.val2){
      this.val1 <= this.val2;
      this.valueDisabled1 = false;
      this.valueDisabled2 = false;
      this.rangeZIndex2 = 1;
    }
  }
  rangetwo() {
    this.val2 = parseInt(this.sliderTwo.value)
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.val2 = parseInt(this.sliderOne.value) + this.minGap;
    }
    this.rangeValueTwo.emit(this.val2)
    this.fillColor();
    if (this.val1 == 0 && this.val2 == 0) {
      this.valueDisabled1 = true;
      this.valueDisabled2 = false;
      this.rangeZIndex1 = 0;
      this.rangeZIndex2 = 1;
    } 
    else if (this.val1 == 100 && this.val2 == 100) {
      this.valueDisabled1 = false;
      this.valueDisabled2 = true;
      this.rangeZIndex1 = 1;
      this.rangeZIndex2 = 0;
    } else
    if(this.val2 <= this.val1){
      this.val1 <= this.val2;
      this.valueDisabled2 = true;
      this.valueDisabled1 = false;
      this.rangeZIndex1 = 1;
    }
    else if(this.val2 > this.val1){
      this.val1 <= this.val2;
      this.valueDisabled2 = false;
      this.valueDisabled1 = false;
      this.rangeZIndex2 = 0;
    }

  }

  fillColor() {
    this.range1 = document.getElementById("range1") as HTMLSpanElement
    this.range2 = document.getElementById("range2") as HTMLSpanElement
    let percent1 = ((this.val1 - this.min) / (this.max - this.min)) * 100;
    let percent2 = ((this.val2 - this.min) / (this.max - this.min)) * 100;
    this.sliderTrack.style.background = `linear-gradient(90deg, #D0D7DD ${percent1}% , #7E2EEf ${percent1}% , #7E2EEf ${percent2}%, #D0D7DD ${percent2}%)`;
    this.range1.style.left = `calc(${percent1}% + (${-5 - percent1 * 0.15}px))`
    this.range2.style.left = `calc(${percent2}% + (${-5 - percent2 * 0.15}px))`
  }

}
