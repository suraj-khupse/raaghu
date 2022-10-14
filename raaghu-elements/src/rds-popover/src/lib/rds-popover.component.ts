import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'rds-popover',
  templateUrl: './rds-popover.component.html',
  styleUrls: ['./rds-popover.component.scss']
})
export class RdsPopoverComponent implements OnInit, AfterViewInit {

  @Input() popoverTitle?: string;
  @Input() popoverContent?: string;
  @Input() popoverPosition: 'top' | 'bottom' | 'right' | 'left' = 'bottom';
  @Input() hover = false;
  @Output() onClick = new EventEmitter();

  constructor(// tslint:disable-next-line:variable-name
    private _renderer2: Renderer2,

    // tslint:disable-next-line:variable-name
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:prefer-const
    let script = this._renderer2.createElement('script');
    script.text = `
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
       return new bootstrap.Popover(popoverTriggerEl)
      })
       `;
       
       
    this._renderer2.appendChild(this._document.body, script);
  }



  public get onHover(): string {
    return `${this.hover ? 'hover focus' : 'click'}`;
  }

}
