# Color Picker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/Color-Picker.png" alt="Color Picker"/>
<p/>

## Code

`<rds-color-picker
  value="#800080"
  label="Color picker"
  [disabled]="false"
  title="Pick your color"
  (onItemClick)="onItemClick($event)"></rds-color-picker>`
  
## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `title`                   |  `string`                         | "Pick your color"|Add the tooltip title of the color picker|
| `label`                   |  `string`                         | "Color Picker"|Add the label of the color picker|
| `value`                   |  `string`                         | "#800080"|Sets the value of the color picker|
| `disabled`                     | `boolean`                            |"false"|Disables color picker |


### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onItemClick`                 |  `EventEmitter`  | `Emits the event on choosing color`  |
