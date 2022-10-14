import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-benefit',
  templateUrl: './rds-benefit.component.html',
  styleUrls: ['./rds-benefit.component.scss']
})
export class RdsBenefitComponent implements OnInit {

  constructor() { }
  @Input()
  item: any ;
  
  @Input() display_type?: string = 'Default';

  @Input() position: 'start' | 'center' | 'end'  = 'start';
  
  ngOnInit(): void {
    console.log(this.item)
  }

  public get textAlignment(): string[] {

    var classes = ['']
    if (this.position === 'start') {     
      classes.push('text-start');     
    }
    else if(this.position === 'center') {
      classes.push('text-center')
    }
    else if(this.position === 'end') {
      classes.push('text-end')
    }
    

    return classes;
  }

}
 