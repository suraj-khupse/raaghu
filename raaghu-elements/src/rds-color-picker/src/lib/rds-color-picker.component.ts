import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-color-picker',
  templateUrl: './rds-color-picker.component.html',
  styleUrls: ['./rds-color-picker.component.scss']
})
export class RdsColorPickerComponent implements OnInit {

  title1 = 'rds-color-picker';
  @Input() value = '';
  @Input() label!: string;
  @Input() disabled!: boolean;
  width:any;
  @Input() position: 'start' | 'end' | 'top' | 'bottom' = 'start';
  @Output() onItemClick = new EventEmitter<any>();

  onChange!: (value: string) => void;
  onTouched!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  changedValue(event: any) {
    this.onItemClick.emit({ evnt: event, item: event.target.value });
    console.log(event.target.value);
    // this.onChange(event.target.value)
    // this.onTouched()
  }

  public get inputClasses(): string[] {

    var classes = ['form-control-color']
    if (this.position === 'start') {     
      classes.push('');     
    }
    else if(this.position === 'end') {
      // classes.push('end-0')
    }
    else if(this.position === 'bottom') {
      classes.push('')
    }
     else if(this.position === 'top') {
      classes.push('')
    }

    return classes;
  }
  public get labelClasses(): string[] {

    var classes = ['position-absolute']
    if (this.position === 'start') {     
      classes.push('');     
    }
    else if(this.position === 'end') {
      classes.push('end-0')
    }
    else if(this.position === 'bottom') {
      classes.push('mt-5')
    }
     else if(this.position === 'top') {
      classes.push('top-0')
    }

    return classes;
  }
  public get inputPosition(): string[]{
    var inputClass=['input-group'];
    if(this.position==='top'){
      inputClass.push('mt-4');
    }
    else if(this.position==='bottom'){
      inputClass.push('mb-4');
    }
    return inputClass;
  }
}
