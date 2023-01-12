# Double Range


This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/Double-Range.png" alt="Double Range"/>
<p/>

## Code
`<rds-double-range [min]="5000" [max]="10000" (rangeValueOne)="rangeValueOne($event)" (rangeValueTwo)="rangeValueTwo($event)"></rds-double-range>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `max`                   |  `number`                         | "10000"|specify maximum value  |
| `min`                    | `number` |     "5000"|specify minimum value |


### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `rangeValueOne`                 |  `EventEmitter`  | `Emits the first range value`  |
| `rangeValueTwo`                 |  `EventEmitter`  | `Emits the second range value`  |
