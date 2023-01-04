import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-badge',
  templateUrl: './rds-badge.component.html',
  styleUrls: ['./rds-badge.component.scss']
})
export class RdsBadgeComponent implements OnInit {

  title = 'rds-badge';
  @Input() size: 'small' | 'smaller' | 'smallest' | 'medium' | 'large' | 'xlg' = 'smallest'
  @Input() label: string = 'New';
  @Input() positioned: boolean = false
  @Input() badgeType: 'rectangle' | 'circle' | 'pill' = 'rectangle'
  @Input() colorVariant: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | 'secondary' | undefined = undefined;
  @Input() showClose: boolean = false;

  @Output() onClose = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  public get classList(): string[] {
    var clsList: string[] = ['badge']
    if (this.colorVariant) {
      const bgColor = 'badge-' + `${this.colorVariant}`;
      clsList.push(bgColor);
    }


    if (this.positioned === true) {
      clsList.push('position-absolute badge_icon start-100 translate-middle')
    }
    if (this.badgeType === 'rectangle') {
      clsList.push('rounded rectangle')
    }
    if (this.badgeType === 'circle') {
      clsList.push('rounded-circle badge-circle')
    }
    if (this.badgeType === 'pill') {
      clsList.push('rounded-pill badge-pill')
    }
    if (this.size) {
      clsList.push(this.size)

    }

    return clsList
  }
  onClosed(event:any){
    this.onClose.emit(event);
  }


}
