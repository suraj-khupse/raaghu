# Datepicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/.png" alt="Datepicker"/>
<p/>

## Code

`<rds-datepicker datePickerType="advanced" DatePickerConfig="{ dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false, isAnimated: true }"`
 ` placeholder="Date" datesDisabled="[]" datesEnabled="[]" dateTooltipTexts="[]" daysDisabled="[]" [isOpen]="false" [outsideClick]="true" [outsideEsc]="false"`
 ` placement="bottom" Label="Date Range" format="MM-dd-YYYY" TitleType="Top" (onShow)="onShow($event)" (onHide)="onHide($event)" (change)="change($event)"`
`></rds-datepicker>`

## Code

`<rds-datepicker
  datePickerType="advanced"
  DatePickerConfig="{ dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false, isAnimated: true }"
  placeholder="Date"
  datesDisabled="[]"
  datesEnabled="[]"
  dateTooltipTexts="[]"
  daysDisabled="[]"
  [isOpen]="false"
  [outsideClick]="true"
  [outsideEsc]="false"
  placement="bottom"
  Label="Date Range"
  format="MM-dd-YYYY"
  TitleType="Top"
  (onShow)="onShow($event)"
  (onHide)="onHide($event)"
  (change)="change($event)"></rds-datepicker>`
  
## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `label`                | `string`    |"A simple primary alert—check it out!"|For Adding the label    |
| `datePickerType`                | `basic`\|`advanced`     |"basic"   |Specify the type of the datepicker|
| `DatePickerConfig`                     | `DatePickerConfig`     |"{ dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false, isAnimated: true }"  |Specifies the datepicker configuration  |
| `datesDisabled`           | `Date[]`     | "13-03-2022"|    Specify the dates to be disabled |
| `datesEnabled`           | `Date[]`     | "23-03-2022"|    Specify the dates to be enabled |
| `dateTooltipTexts`                    | `DatepickerDateTooltipText[]` |     `[]`|Add the tooltip text  |
| `daysDisabled`                | `number[]`   |`[10]`   |   Specify the number of days to be disabled
| `format`                | `string`             |"MM-dd-YYYY"|     Specify the date format    |
| `isOpen`                | `boolean`    |"false"|    Specify the datepicker opened or not     |
| `maxDate`                | `Date`     |"10-03-2023"|     Specify the maximum date for date range   |
| `minDate`                | `Date`     |"10-03-2021"|     Specify the minimum date for date range   |
| `outsideClick`                | `boolean`    |"true"|    Specify the datepicker close on outside click     |
| `outsideEsc`                | `boolean`    |"false"|    Specify the datepicker close on pressing escape   |
| `placement`                | `top`\|`bottom`\|`left`\|`right` |   "top"|  For specifing the position    |
| `placeholder`                     | `string`      |"Start Date"|Shows the placeholder of textbox  | 
| `TitleType`                     | `string`      |"top"|Shows the position of title  | 
| `value`                     | `any`      |"13-03-2022"|Specify default value  | 


### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `change`                 |  `EventEmitter`  | `Emits the event on changing date`  |
| `onHide`                 |  `EventEmitter`  | `Emits the event on hiding the datepicker`  |
| `onShow`                 |  `EventEmitter`  | `Emits the event on showing datepicker`  |
