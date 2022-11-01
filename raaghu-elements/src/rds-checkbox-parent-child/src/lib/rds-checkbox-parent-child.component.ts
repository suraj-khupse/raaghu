import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-checkbox-parent-child',
  templateUrl: './rds-checkbox-parent-child.component.html',
  styleUrls: ['./rds-checkbox-parent-child.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsCheckboxParentChildComponent,
    multi: true
  }]
})
export class RdsCheckboxParentChildComponent implements OnInit, ControlValueAccessor {
  private onTouched!: Function;
  private onChanged!: Function;
  title = 'rds-checkbox-parent-child';
  data: any;
  onChange!: (value: string) => void;
  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  @Input() checked!: boolean;
  @Input() disabled!: boolean;
  @Input() id?: string
  @Input() label?: string;
  @Input() switch?: boolean;
  @Input() inline?: boolean;
  @Input() withLabel?: boolean;
  @Input() isInputGroup?: boolean;
  @Input() state: 'checkbox' | 'Indeterminate' | 'errorcheckbox' = 'checkbox';

  @Output() onClick = new EventEmitter<{ evnt: any, item: string }>();

  listItems!: any;
  constructor() {
    this.isMasterSel = false;
    this.data = {};
    this.data.isAllSelected = false;
    this.data.isAllCollapsed = false;

    this.data.ParentChildchecklist = [
      {
        id: 1,
        label: 'Parent Checkbox 1',
        isSelected: false,
        isIntermediate: false,
        isClosed: false,
        childList: [
          {
            id: 1,
            parent_id: 1,
            label: 'Child Checkbox 1',
            isSelected: false
          },
          {
            id: 2,
            parent_id: 1,
            label: 'Child Checkbox 2',
            isSelected: false
          },
          {
            id: 3,
            parent_id: 1,
            label: 'Child Checkbox 3',
            isSelected: false
          },
          {
            id: 4,
            parent_id: 1,
            label: 'Child Checkbox 4',
            isSelected: false
          }
        ]
      },
      {
        id: 2,
        label: 'Parent Checkbox 2',
        isSelected: false,
        isIntermediate: false,
        isClosed: false,
        childList: [
          {
            id: 1,
            parent_id: 1,
            label: 'Child Checkbox 1',
            isSelected: false
          },
          {
            id: 2,
            parent_id: 1,
            label: 'Child Checkbox 2',
            isSelected: false
          }
        ]
      },
      //{
      //  id: 3, 
      //  label: 'Parent Checkbox 3', 
      //  isSelected: false, 
      //  isIntermediate: false,
      //  isClosed: false,
      //  childList: [
      //    {
      //      id: 1, 
      //      parent_id: 1, 
      //      label: 'Child Checkbox 1', 
      //      isSelected: false
      //    },
      //    {
      //      id: 2, 
      //      parent_id: 1, 
      //      label: 'Child Checkbox 2', 
      //      isSelected: false
      //    },
      //    {
      //      id: 3, 
      //      parent_id: 1, 
      //      label: 'Child Checkbox 3', 
      //      isSelected: false
      //    }
      //  ]
      //}
    ];
  }


  ngOnInit(): void {

  }

  public get classes(): string[] {
    var classes = ['form-check']
    if (this.isInputGroup === true) {
      classes = ['input-group-text px-5'];
    }
    if (this.switch === true) {
      classes.push('form-switch')
      return classes
    }
    if (this.inline === true) {
      classes.push('form-check-inline')
      return classes
    }
    if (this.state === 'Indeterminate') {
      classes.push('inder')
      return classes
    }
    if (this.state === 'errorcheckbox') {
      classes.push('errorche')
      return classes
    }
    return classes
  }

  getValueParent(event: any) {
    this.onClick.emit({ evnt: event, item: event.ParentChildchecklist.target.value });
    this.onChange(event.target.click)
    this.onTouched();
  }

  getValueChild(event: any) {
    this.onClick.emit({ evnt: event, item: event.childList.target.value });
    this.onChange(event.target.click)
    this.onTouched();
  }

  changeData(event: boolean): void {
    this.checked = event
    this.onTouched();
    this.onChanged(this.checked);
  }

  parentCheck(parentObj: any, event: boolean) {
    parentObj.isIntermediate = false;
    for (var i = 0; i < parentObj.childList.length; i++) {
      parentObj.childList[i].isSelected = parentObj.isSelected;
    }
    parentObj.isSelected = event
    this.onTouched(); // <-- mark as touched
    this.onChanged(event);
  }

  //Click event on Child Checkbox checkbox  
  childCheck(parentObj: any, childObj: any, event: boolean) {
    parentObj.isSelected = false;
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      return itemChild.isSelected == true;
    });
    const childObjLength = childObj.filter((x: any) => x.isSelected).length;
    if (parentObj.isSelected) {
      parentObj.isSelected = true;
      if (childObjLength == childObj.length) {
        parentObj.isIntermediate = false;
      } else {
        parentObj.isIntermediate = true;
      }
    }
    else if (!parentObj.isSelected) {
      parentObj.isSelected = false;
      if (childObjLength >= 1) {
        parentObj.isSelected = true;
        parentObj.isIntermediate = true;
      } else if (childObjLength === 0) {
        parentObj.isIntermediate = false;
        parentObj.isSelected = false;
      }
    }
    // childObj.isSelected = event
    this.onTouched(); // <-- mark as toucheds
    this.onChanged(event);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }

  //Just to show updated JSON object on view
  // stringify(obj: any) {
  //   return JSON.stringify(obj);
  // }
}
