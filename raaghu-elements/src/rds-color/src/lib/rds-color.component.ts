import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rds-color',
  templateUrl: './rds-color.component.html',
  styleUrls: ['./rds-color.component.scss']
})
export class RdsColorComponent implements OnInit, OnChanges {

  @Input() header!: string;
  @Input() itemList!: any;
  @Input() defaultValue?:number = 1;
  @Input() displaytype: 'rounded' | 'square'  = 'rounded';
  @Output() selectedColor = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i = 0; i < this.itemList.length; i++) {
      document.getElementById(this.itemList[i].color)!.className = 'default-border';
    }
    document.getElementById(this.defaultValue as any)!.className = 'selected-border';
  }

  selectColor(event: any) {
    for (let i = 0; i < this.itemList.length; i++) {
      document.getElementById(this.itemList[i].color)!.className = 'default-border';
    }
    document.getElementById(event.color)!.className = 'selected-border';
    this.selectedColor.emit(event);
  }
  select(event: any) {
    for (let i = 0; i < this.itemList.length; i++) {
      document.getElementById(this.itemList[i].color)!.className = 'default-border-square';
    }
    document.getElementById(event.color)!.className = 'selected-border-square';
    this.selectedColor.emit(event);
  }
}