# SelectList

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Code
`<rds-select-list`  
 ` size="default"`  
 ` [disabled]="false"`  
 ` [multiple]="false"`  
 ` customIcon=""`  
 ` [tooltipTitle]="tooltipTitle"`  
 ` [tooltipPlacement]="tooltipPlacement"`  
`>`  
 ` <option selected>Open this select menu</option>`  
 ` <option value="1">One</option>`    
 ` <option value="2">Two</option>`  
 ` <option value="3">Three</option>`  
`</rds-select-list>`  

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `disabled`                     | `boolean`                            |"false"|For disable and enable the textarea  |                             |
| `customIcon`           | `string`                          | "icon name"|Place the icon in the select list |
| `isRequired`                   |  `boolean`                         | "false"|For seting the select list is mandatory or not|
| `label`                    | `string` |     "label name"|For Add the label for the select list         |
| `listItems`                | `array list`                          |`[{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }]`   |Add items of the select list


### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onChange`                 |  `EventEmitter`  | `Emit value of the selectlist on change of the selectlist`  |
| `onTouched`                 |  `EventEmitter`  | `Emit value of the selectlist on touch of the selectlist`  |
