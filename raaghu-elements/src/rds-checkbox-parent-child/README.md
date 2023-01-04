# Checkbox Parent Child

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/Checkbox-Parent-Child.png" alt="Checkbox Parent Child"/>
<p/>

## Code

`<rds-checkbox-parent-child
  [checked]="false"
  [disabled]="false"
  id="checkboxid"
  label="default checkbox"
  [switch]="false"
  [inline]="false"
  [withLabel]="true"
  [isInputGroup]="false"
  state="checkbox"
  (onClick)="onClick($event)"></rds-checkbox-parent-child>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `withLabel`           | `boolean`                          | "true"|Specify label to be shown or not|
| `checked`                     | `boolean`                            |"false"|Specify checkbox to be checked or not by default  | 
| `disabled`                     | `boolean`                            |"false"|Specify disable the checkbox or not |  
| `inline`                     | `boolean`                            |"false"|Specify items to be shown as in line |  
|`id`|`string`|"checkboxid"|Specify the id |
|`label`|`string`|"checkboxid"|Specify the label |
|`state`|`checkbox`\|`Indeterminate`\|`errorcheckbox`    |"checkbox"|Specify the type of checkbox |
| `isInputGroup`                     | `boolean`                            |"false"|Specify whether using as input group or not | 
| `switch`                     | `boolean`                            |"false"|Specify switch type checkbox or not | 


### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onClick`                 |  `EventEmitter`  | `Emits the click event`  |
