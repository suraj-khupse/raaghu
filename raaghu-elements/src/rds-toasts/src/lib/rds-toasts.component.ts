import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import * as bootstrap from 'bootstrap';
import { Toast } from 'bootstrap'

declare var bootstrap: any;

@Component({
  selector: 'rds-toasts',
  templateUrl: './rds-toasts.component.html',
  styleUrls: ['./rds-toasts.component.scss']
})
export class RdsToastsComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() message = 'Hello, world! This is a toast message.';
  @Input() role: string = 'basic';
  @Input() delay: number = 1000;
  @Input() autohide: boolean = false;
  @Input() toastId: string = 'toastId';
  @Input() colorVariant: 'primary' | 'success' | 'secondary' | 'light' | 'dark' | 'danger' | 'warning' | 'info' | undefined = undefined;
  @Input() showHeader: boolean = true
  @Input() headerTitle: string = ''
  @Input() position: 'Top-Left' | 'Top-Center' | 'Top-Right' | 'Middle-Left' | 'Middle-Center' | 'Middle-Right' | 'Bottom-Left' | 'Bottom-Center' | 'Bottom-Right' = 'Top-Left';
  @Input() show: boolean = false;

  // @Input() iconName: string = 'check';
  // @Input() iconHeight: string = '16px'
  // @Input() iconWidth: string = '18px'
  // @Input() iconColorVariant: string = '';
  // @Input() iconFill: boolean = false;
  // @Input() iconStroke: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new Toast(toastEl);
        toast.show();
        this.show = false;
      }
    }
  }

  ngOnInit(): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new Toast(toastEl);
        toast.show();
        this.show = false;
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.show) {
      var toastEl: any = document.getElementById(this.toastId);
      if (toastEl) {
        var toast = new Toast(toastEl);
        toast.show();
        this.show = false;
      }
    }
  }

  close(): void {
    var toastEl: any = document.getElementById(this.toastId);
    if (toastEl) {
      var toast = new Toast(toastEl);
      toast.hide();
      this.show = false;
    }
  }

  public get backgroudClass(): any {
    if (this.colorVariant) {
      return 'text-bg-' + `${this.colorVariant}`
    }
    return '';
  }

  public get positionClass(): any[] {
    var positionClasses = ['']
    if (this.position === "Top-Left") {
      positionClasses.push('start-0')
    }
    else if (this.position === "Top-Center") {
      positionClasses.push('top-0 start-50 translate-middle-x')
    }
    else if (this.position === "Top-Right") {
      positionClasses.push('top-0 end-0')
    }
    else if (this.position === "Middle-Left") {
      positionClasses.push('top-50 start-0 translate-middle-y')
    }
    else if (this.position === "Middle-Center") {
      positionClasses.push('top-50 start-50 translate-middle')
    }
    else if (this.position === "Middle-Right") {
      positionClasses.push('top-50 end-0 translate-middle-y')
    }
    else if (this.position === "Bottom-Left") {
      positionClasses.push('bottom-0 start-0')
    }
    else if (this.position === "Bottom-Center") {
      positionClasses.push('bottom-0 start-50 translate-middle-x')
    }
    else if (this.position === "Bottom-Right") {
      positionClasses.push('bottom-0 end-0')
    }
    return positionClasses;
  }
}
