import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-icon-label',
  templateUrl: './rds-icon-label.component.html',
  styleUrls: ['rds-icon-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RdsIconLabelComponent implements OnInit {

  constructor() { }
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconposition: 'left' | 'right' = 'left';
  height: string = '';
  width: string = '';
  @Input() fill: boolean = false;
  @Input() stroke: boolean = true;
  @Input() colorVariant: 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' = 'light';
  @Input() size: 'small' | 'large' | 'medium' = 'medium';
  ngOnInit(): void {
  }
  public get Classes(): string[] {
    var classes: any = [];

    var selectSize = `d-flex form-select-${this.size === 'small' ? 'sm ' : this.size === 'large' ? 'lg' : 'md'}`
    if (this.size === 'small') {
      this.height = '16px';
      this.width = '16px';
    }
    if (this.size === 'medium') {
      this.height = '18px';
      this.width = '18px';
    }
    if (this.size === 'large') {
      this.height = '20px';
      this.width = '20px';
    }
    classes.push(selectSize);

    return classes;
  }

  getLabelColor(): string {
    if (this.colorVariant) {
      return 'text-' + this.colorVariant;
    }
    return '';
  }

}
