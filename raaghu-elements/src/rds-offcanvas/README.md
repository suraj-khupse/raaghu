# Offcanvas

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Code 
`<button`  
  `class="btn btn-primary"`  
  `type="button"`  
 ` data-bs-toggle="offcanvas"`  
 ` data-bs-target="#canvasExample"`  
 ` aria-controls="canvasExample"`  
 ` (click)="onShow.emit($event)"`  
`>`  
 ` Button`  
`</button>`  
`<rds-offcanvas></rds-offcanvas>`  

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `backDrop`                | `boolean`                          |`false`|For enable or desable the backdrop of the offcanvas
| `scrolling`               | `boolean`                          | "true"|For enable or desable the scrolling of the offcanvas |
| `offId`                   |  `string`                          | "canvasExample"|Set the offcanvas id|
| `canvasTitle`             | `string`                           | "Offcanvas Title"|Add the title for the offcanvas          |
| `placement`               | `start`\|`end`\|`top`\|`bottom` |     "start"|For specify the postion of the offcanvas can open       |
| `colorVariant`            | `string` |     "false"|For specify the color of the offcanvas         |
| `offcanvaswidth`          | `number` |     "false"|For specify the width of the offcanvas         |
### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onClose`                 |  `EventEmitter`  | `Emit any value at the time of close`  |
| `onShow`                 |  `EventEmitter`  | `Emit any value at the time of show`  |


