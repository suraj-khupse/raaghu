# SideNav

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="https://github.com/Wai-Technologies/raaghu-elements/blob/Doccumentation-Readme/assets/sidenavdemo.png" alt="button"/>
<p/>

## Code
`<div class="row">`  
 ` <div class="col-lg-2">`  
  `  <rds-side-nav`  
   `   [sidenavItems]="sidenavItems"`  
  `    [collapseRequired]="false"`  
 `   ></rds-side-nav>`  
`  </div>`  
`</div>`  

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `sidenavItems`                     | `array of objects`                            | |Array for displaing the sidenav items |                             |
| `collapseRequired`           | `boolean`                          | "false"|Specify the collapse required or not|
| `activepage`                   |  `number`                         | "1"|For specify the active page in the side nav|
| `activesubmenu`                    | `number` |     "2"|For specify number of active sub menus of the main menu          |
| `iconHeight`                | `string`                          |"20px"   |Specify height of the icon
| `iconWidth`                | `string`                           |"Floating label"|Specify width of the icon   |
| `isPageWrapper`               | `boolean`                      |"false"|Specify pagewraper is enable or not   |

### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `collapsedState`                 |  `EventEmitter`  | `Emit the collapsed state of the menu`  |
| `emitPath`                 |  `EventEmitter`  | `Emit path of the `  |

