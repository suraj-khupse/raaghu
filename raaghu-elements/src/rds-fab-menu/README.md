# Fab Menu

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/Fab-Menu.png" alt="Fab Menu"/>
<p/>

## Code
`<rds-fab-menu colorVariant="btn-secondary" size="default" [listItems]="listItems" (onSelect)="onSelect($event)"></rds-fab-menu>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `colorVariant`                | `primary`\|`secondary`\|`success`\|`danger`\|`warning`\|`info`\|`light`\|`dark`|"danger"|For specifing the color of menu button|
| `size`                | `default`\|`small`\|`large`                           |"small"   |Specify the size of the menu button|
| `listItems`           | `{}`                          | `[ { value: 'New Role', some: 'value', key: 'new', icon: 'users', iconWidth: '20px', iconHeight: '20px' }, { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' }, { value: 'Export to excel', some: 'value', key: 'export', icon: 'export', iconWidth: '20px', iconHeight: '20px' }, { value: 'Delete', some: 'value', key: 'delete', icon: 'delete', iconWidth: '20px', iconHeight: '20px' }, ]`|Specify the menu items |
| `menuicon`                | `string`      |"plus"| Specify the icon for the button |
| `menuiconHeight`      | `string`        |"20px"|Specify the height for the icon|
| `menuiconWidth`             | `string`            |"20px"|Specify the width for the icon|

### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onSelect`                 |  `EventEmitter`  | `Emits the selected menu event`
