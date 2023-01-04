# Button Group

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/button-group.png" alt="Button Group"/>
<p/>

## Code

`<rds-button-group [vertical]="false" colorVariant="primary" [outline]="false" role="button" size="medium" [buttonGroupItem]="buttonGroupItem" (onClick)="onClick($event)"></rds-button-group>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `vertical`                     | `boolean`                            |"false"|Sets the button group to align vertical  |
| `size`                | `small`\|`medium`\|`large`                           |"small"   |Specify the size of the button group
| `colorVariant`                | `primary`\|`secondary`\|`success`\|`danger`\|`warning`\|`info`\|`light`\|`dark`|"primary"|For specifing color of the buttongroup |
| `role`                     |`button`\|`radio`\|`checkbox`   |"button"   |sets type of button in the group  | 
| `outline`                     | `boolean`                            |"true"|Sets outline for buttons  |   


### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onClick`                 |  `EventEmitter`  | `Emits the click event`  |
