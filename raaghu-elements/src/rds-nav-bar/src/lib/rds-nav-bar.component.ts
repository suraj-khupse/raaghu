import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-nav-bar',
  templateUrl: './rds-nav-bar.component.html',
  styleUrls: ['./rds-nav-bar.component.scss']
})
export class RdsNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() navbarItems: any[] = [{
    label: "Home",
    isActive: true,
    navclass: '',
    href: '',
  },
  {
    label: "Features",
    isActive: false,
    navclass: '',
    href: '',
  },
  {
    label: "Pricing",
    isActive: false,
    navclass: '',
    href: '',
  }];
  fontSize!: string;
  @Input() navbarId?: string
  @Input() size = 'medium'
  @Input() navbarheader!: TemplateRef<any>;
  @Input() navbarcontent!: TemplateRef<any>
  
  public get classes(): string {
    const mode1 = `${this.size === 'small' ? 'small' : this.size === 'medium' ? 'medium' : 'large' }`;
    return mode1;
  }
}
