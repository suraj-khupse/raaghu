import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';

export class Properties {
  public key: any;
  public value: any;
}
@Component({
  selector: 'rds-comp-properties',
  templateUrl: './rds-comp-properties.component.html',
  styleUrls: ['./rds-comp-properties.component.scss'],
})
export class RdsCompPropertiesComponent implements OnInit {
  constructor() {}
  @Input() isEdit: boolean = false;
  @Input() propertyTableData: any = [];
  @Input() propertyActions: any = [];
  @Output() onPropertyResourceSave = new EventEmitter<{ Property: any }>();
  rdsresourceTableMfeConfig: ComponentLoaderOptions;
  PropertiesData: Properties = {
    key: undefined,
    value: undefined,
  };
  @Input() propertyTableHeader: TableHeader[] = [
    {
      displayName: 'Key',
      key: 'key',
      dataType: 'text',
      dataLength: 30,
      sortable: false,
      required: true,
    },
    {
      displayName: 'Value',
      key: 'value',
      dataType: 'text',
      dataLength: 30,
      sortable: false,
      required: true,
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  addProperties(propertyform: NgForm) {
    if (propertyform.invalid) {
      return;
    }
    const data = [...this.propertyTableData];
    data.push({
      key: this.PropertiesData.key,
      value: this.PropertiesData.value,
    });
    this.propertyTableData = [...data];
    propertyform.resetForm();
  }

  onActionSelection(event): void {
    if (event && event.selectedData) {
      if (event.actionId === 'delete') {
        const data = [...this.propertyTableData];

        const index = data.findIndex(
          (x: any) => x.key == event.selectedData.key
        );
        if (index !== -1) {
          data.splice(index, 1);
          this.propertyTableData = [...data];

          // this.onPropertyResourceSave.emit({ Property: this.propertyTableData });
        }
      }
    }
  }

  SavePropertyData() {
    this.onPropertyResourceSave.emit({ Property: this.propertyTableData });
  }

  getBtnName(): string {
    if (this.isEdit) {
      return 'UPDATE';
    }
    return 'CREATE';
  }
}
