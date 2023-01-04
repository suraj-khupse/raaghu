# NavTab

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
  <img src="../../assets/navtabAll.png" alt="button"/>
 
<p/>

## Code
`<div class="col-md-12">`  
 ` <rds-nav-tab`   
  `  [navtabsItems]="navtabsItems"`  
  `  horizontalAlignment="start"`  
  `  [verticalAlignment]="false"`  
   ` [pills]="false"`  
  `  [tabs]="false"`  
  `  [fill]="false"`  
  `  [justified]="false"`  
  `  [flex]="false"`  
  `></rds-nav-tab>`  
  `<div naveContent class="tab-content" id="nav-tabContent">`  
  `  <div`  
   `   class="tab-pane fade show active p-2"`  
   `   id="nav-home"`  
   `   role="tabpanel"`  
    `  aria-labelledby="nav-home-tab"`  
   ` >`  
    `  <div class="contents">`  
    `    <p>`  
     `     This is some placeholder content the Profile tab's associated content.`  
      `    Clicking another tab will toggle the visibility of this one for the`  
      `    next.`  
      `    <br />`  
      `    The tab JavaScript swaps classes to control the content visibility and`  
       `   styling. You can use it with tabs, pills, and any other`  
       ` </p>`  
      `</div>`  
   ` </div>`  
    `<div`  
     ` class="tab-pane fade"`  
     ` id="nav-profile"`  
     ` role="tabpanel"`  
     ` aria-labelledby="nav-profile-tab"`  
   ` >`  
    `  <div class="contents bg-white p-2">`  
     `   This is some placeholder content the Home tab's associated content.`  
     `   Clicking another tab will toggle the visibility of this one for the`  
      `  next.`  
      `  <br />`  
      `  The tab JavaScript swaps classes to control the content visibility and`  
      `  styling. You can use it with tabs, pills, and any other .nav-powered`  
      `  navigation.`  
     ` </div>`  
   ` </div>`  
   ` <div`  
   `   class="tab-pane fade"`  
   `   id="nav-contact"`  
     ` role="tabpanel"`  
     ` aria-labelledby="nav-contact-tab"`  
   ` >`  
    `  <div class="contents bg-white p-2">Tab3</div>`  
   ` </div>`  
   ` <div`  
     ` class="tab-pane fade"`  
     ` id="nav-deabled"`  
    `  role="tabpanel"`  
    `  aria-labelledby="nav-contact-tab"`  
    `>`  
    `  <div class="contents bg-white p-2">test</div>`  
   ` </div>`  
 ` </div>`  
`</div>`  
## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `navtabsItems`              | `array of object`              |`[{label: 'Active',tablink: '#nav-home',ariacontrols: 'nav-home',iconClass: 'bi bi-house',subText: 'Active subtext'},{label: 'Link',tablink: '#nav-profile',ariacontrols: 'nav-profile'},{label: 'Active',tablink: '#nav-home',ariacontrols: 'nav-home',iconClass: 'bi bi-house',subText: 'Active subtext'},{label: 'Active',tablink: '#nav-home',ariacontrols: 'nav-home',iconClass: 'bi bi-house',subText: 'Active subtext'}]`|Add navtab items
| `verticalAlignment`         | `boolean`                          | "true"|For align the tab vertically |

### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `onClicktab`                 |  `EventEmitter`  | `Emit the tab number of the navtab while clicking the tabs`  |
