import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Properties } from '../../modal/IdentityResourcemodals';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  public rdsPropertyMfeConfig: ComponentLoaderOptions;
  constructor() { }
 key:string;
 value:string;
@Input() PropertyList:any=[];
@Output()
onPropertyResourceSave = new EventEmitter<{Property:any}>()
rdsresourceTableMfeConfig: ComponentLoaderOptions;
PropertiesData:Properties={
  key: undefined,
  value: undefined
}

  ngOnInit(): void {
    
    this.rdsPropertyMfeConfig = {
      name: 'RdsCompProperties',
      input: {
        PropertyList:this.PropertyList
      },
      output: {
        onPropertyResourceSave: (PropertyList) => { this.onPropertyResourceSave.emit({ Property: PropertyList }); },
      }
    };
  }
 
  SavePropertyData(){
    this.onPropertyResourceSave.emit({ Property: this.PropertyList });
  }
}
