import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-address-detail',
  templateUrl: './rds-address-detail.component.html',
  styleUrls: ['./rds-address-detail.component.scss']
})
export class RdsAddressDetailComponent implements OnInit {
  @Input() header!: string;
  @Input() addressLine1!: string;
  @Input() addressLine2!: string;
  @Input() addressLine3!: string;
  @Input() withIcon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): string[] {
    let classes: string[] = [];
    if (this.withIcon) {
      classes.push('block');
    }

    return classes;
  }
}
