import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-radio-button',
  templateUrl: './rds-radio-button.component.html',
  styleUrls: ['./rds-radio-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsRadioButtonComponent,
    multi: true
  }]
})
export class RdsRadioButtonComponent implements OnInit {

  value = ''
  onChange!: (value: string) => void;
  onTouched!: () => void
  // @Input() disabled = false
  @Input() switch = false
  @Input() inline = false
  @Input() isInputGroup = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() itemList!:any;
  @Input() display_type?: string = 'Default';
  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
    //throw new Error('Method not implemented.');
  }

  public get classes(): string[] {
    var classes = ['form-check']
    if (this.isInputGroup === true) {
      classes = ['input-group-text'];
    }
    if (this.switch === true) {
      classes.push('form-switch')
      return classes
    }
    if (this.inline === true) {
      classes.push('form-check-inline')
      return classes
    }
    return classes
  }

  getValue(event: any) {
    this.itemList.forEach(element => {
     if( element.name!==event.target.value){
      
     }
    });
    this.onClick.emit({ evnt: event, item: event.target.value });
    this.onChange(event.target.value)
    this.onTouched()
  }
}
