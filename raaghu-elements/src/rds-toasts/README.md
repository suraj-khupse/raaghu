# Toasts

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
 <p align="left">
<img src="../../assets/Toastall.png" alt="Toasts"/>
<p/>
## Code 

`<div`  
 ` aria-live="polite"`  
 ` aria-atomic="true"`  
 ` style="position: relative; min-height: 200px;"`  
`>`  
`  <rds-toasts`  
`    [withImage]="false"`  
 `   [withHeader]="false"`  
 `   colorVariant="bg-info"`  
`    [customColor]="false"`  
`    custcolor=""`  
`    headerTitle="Bootstrap"` 
`    time="11 Seconds ago"`  
`    textColor=""`  
`  ></rds-toasts>`  
`</div>`  

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `colorVariant`              | `big-info`\|`big-warning`\|`big-success`\|`big-danger`\|`big-primary`\|`default`| "big-info"|Specify the color varient |
| `custcolor`                 |  `string`                         | "#000000"|For set specific color for the toasts|
| `customColor`               | `boolean`|     "false"|For Enable the custom color property         |
| `headerTitle`               | `string` |     "Header title"|For add the header title of the toats|
| `message`                   | `string` |     "This is toasts"|For add the message for the toasts         |
| `position`                  | `Top-center`\|`Top-right`\|`Top-left`\|`bottom-left`\|`bottom-center`\|`bottom-right`\|`middle-center`\|`middle-right`\|`middle-left`|  "Top-center"|For chnaging position of the toats       |
| `textColor`                 | `string` |     "false"|For changing the color of the text           |
| `time`                      | `number` |     "false"|For specifing the time of the toasts        |
| `withHeader`                | `boolean` |     "false"|For Enable or desable the header          |
| `withImage`                 | `boolean` |     "false"|For Enable or desable the image with toasts          |


