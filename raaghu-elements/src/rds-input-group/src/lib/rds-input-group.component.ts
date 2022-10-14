import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-input-group',
  templateUrl: './rds-input-group.component.html',
  styleUrls: ['./rds-input-group.component.scss']
})
export class RdsInputGroupComponent implements OnInit {
  @Input() colorVariant: 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' | undefined = 'secondary';
  @Input() size= 'md';
  @Input() label: string = 'Filed label';
  @Input() outlineButton = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? 'btn btn-outline-' + this.colorVariant : 'btn btn-' + this.colorVariant}`;

    return outline;
  }
}
