import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-fab-menu',
  templateUrl: './rds-fab-menu.component.html',
  styleUrls: ['./rds-fab-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RdsFabMenuComponent,
      multi: true,
    },
  ]
})
export class RdsFabMenuComponent implements OnInit {

  @Input() colorVariant: 'warning' | 'danger' | 'success' | 'info' | 'primary' | 'secondary' | 'dark' | 'light' | undefined = undefined;

  @Input()
  size?:  'small' | 'large' | 'default';
  @Input() menuicon: string = 'list';
  @Input() menuiconWidth!: string;
  @Input() menuiconHeight!: string;
  @Input()
  DropdownItems!: TemplateRef<any>;
  show = '';
  @Input()
  listItems = [
    { value: 'New Role', some: 'value', key: 'new', icon: 'users', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Export to excel', some: 'value', key: 'export', icon: 'export', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Delete', some: 'value', key: 'delete', icon: 'delete', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Click here download sample import file.', some: 'value', key: 'download', icon: '', iconWidth: '20px', iconHeight: '20px' },
  ];

  @Output() onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public get customClasses(): any[] {
    var customClasses=[''];

    if (this.size === 'small') {
      customClasses.push('btn-sm');
    } else if (this.size === 'large') {
      customClasses.push('btn-lg');
    } else {
      customClasses.push('');
    }
    if (`${this.colorVariant}`) {
      customClasses.push('btn-' + `${this.colorVariant}`);
    }
    return customClasses;
  }

  onClick(item: any) {
    this.listItems[item]
    this.onSelect.emit(item);
  }
  onClickshow(){
    this.show == '' ?  this.show = 'show' : this.show = 'show' ? this.show = '' : '';
    }
  }
