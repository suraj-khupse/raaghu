# Big Number Widget

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/big-number.png" alt="Big Number Widget"/>
<p/>

## Code

`<div class="col-sm-3"><rds-big-number-widget [bigNumber]="'$13,20,21'" [subText]="'+$1,203'" [iconClass]="'bi bi-caret-up-fill'" [colorVariant]="colorVariant"   [subTitleColorVariant]="subTitleColorVariant" [textAlign]="textAlign"></rds-big-number-widget></div>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `dismisable`                     | `boolean`                            |"false"|Shows the close button  |
| `bigNumber`                | `string`                           |"55,000"| to set the big number to be displayed       |
| `subText`                | `string`                           |"8,65,230"| to set the sub text to be displayed       |
| `colorVariant`                | `primary`\|`secondary`\|`success`\|`danger`\|`warning`\|`info`\|`light`\|`dark`   |"danger"|  For setting color for the big number |
| `subTitleColorVariant`   | `primary`\|`secondary`\|`success`\|`danger`\|`warning`\|`info`\|`light`\|`dark`  |"danger"|  For setting color for the sub text  |
|`textAlign`    |`text-start`\|`text-center`\|`text-end'|   `text-center`   |for setting alignment of the content |
|`icon`|`string`|"plus"|"for setting the icon to be displayed"|
|`iconWidth`|`string`|"12px"|"to set width of the icon"|
|`iconHeight`|`string`|"12px"|"to set height of the icon"|
|`iconColor`  |`string`   |"#f14b4b"    |"to set color of the icon"|
|`fillIcon`|`boolean`   |"true"   | "for getting filled icon"|
