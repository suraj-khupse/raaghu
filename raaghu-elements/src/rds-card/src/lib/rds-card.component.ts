import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-card',
  templateUrl: './rds-card.component.html',
  styleUrls: ['./rds-card.component.scss']
})
export class RdsCardComponent implements OnInit {

  @Input() sidePadding: boolean = true;
  @Input() topBottomPadding: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() showBody: boolean = true;
  @Input() showFooter: boolean = true;
  @Input() borderColor: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined = undefined;
  @Input() colorVariant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | undefined = undefined;

  //@Input() cardWidth?: number;


  constructor() { }

  ngOnInit(): void {
  }

  public get cardClasses(): string[] {
    let custClasses:string[] = []
    if (this.borderColor) {
      custClasses.push('border-' + `${this.borderColor}`);
    }
    // if (this.colorVariant) {
    //   custClasses.push('text-bg-' + `${this.colorVariant}`);
    // }
    
      if (this.borderColor) {
        custClasses.push('border-' + `${this.borderColor}`);
  
      }
    return custClasses
  }

  public get cardBody(): string {
    const side = `${this.sidePadding === false ? ' px-0 ' : ''}`;
    const topBottom = `${this.topBottomPadding === false ? ' py-0 ' : ''}`;
    return side + topBottom;
  }

}
