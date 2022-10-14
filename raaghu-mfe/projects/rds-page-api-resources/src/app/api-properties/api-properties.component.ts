import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

export class Properties {
  public key: any;
  public value: any;
}

@Component({
  selector: 'app-api-properties',
  templateUrl: './api-properties.component.html',
  styleUrls: ['./api-properties.component.scss'],
})
export class ApiPropertiesComponent implements OnInit {
  public rdsPropertyMfeConfig: ComponentLoaderOptions;
  constructor() {}
  key: string;
  value: string;
  @Input() PropertyList: any = [];
  @Output()
  onApiPropertySave = new EventEmitter<{ Property: any }>();
  rdsresourceTableMfeConfig: ComponentLoaderOptions;
  PropertiesData: Properties = {
    key: undefined,
    value: undefined,
  };

  ngOnInit(): void {
    this.rdsPropertyMfeConfig = {
      name: 'RdsCompProperties',
      input: {
        PropertyList: this.PropertyList,
      },
      output: {
        onApiPropertySave: (PropertyList) => {
          this.onApiPropertySave.emit({ Property: PropertyList });
        },
      },
    };
  }

  SavePropertyData() {
    this.onApiPropertySave.emit({ Property: this.PropertyList });
  }
}
