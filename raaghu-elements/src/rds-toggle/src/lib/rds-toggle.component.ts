import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-toggle',
    templateUrl: './rds-toggle.component.html',
    styleUrls: ['./rds-toggle.component.scss'],
})
export class RdsToggleComponent implements OnInit {

  constructor() { }

  @Input() OnLabel : string = 'On';
  @Input() OffLabel : string = 'Off';
  @Input() isChecked : boolean = true;
  @Output() selectedMode = new EventEmitter<any>();

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const node:any = document.getElementById("toggleId");
          const Off = document.createAttribute("data-on");
          Off.value = this.OnLabel;
          node.setAttributeNode(Off);
          
          const node1:any = document.getElementById("toggleId");
          const On = document.createAttribute("data-off");
          On.value = this.OffLabel;
          node1.setAttributeNode(On);
          
         
  }
  toggleLightAndDarkMode() {
    this.isChecked = !this.isChecked
    console.log(this.isChecked, 'try');
    this.selectedMode.emit(this.isChecked)
    
  }


}
