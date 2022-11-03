import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rds-label',
  templateUrl: './rds-label.component.html',
  styleUrls: ['./rds-label.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class RdsLabelComponent implements OnInit {
  @Input() label?: any;
  @Input() multiline: boolean = false;
  @Input() bold: boolean = false;
  @Input() italic: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const mode1 = `${this.bold === true ? ' fw-bold' : ''}`;
    const mode2 = `${this.italic === true ? ' fst-italic' : ''}`;
    return mode1 + mode2;
  }

}
