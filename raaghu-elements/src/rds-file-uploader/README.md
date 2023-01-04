# File Uploader

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/assets/File-Uploader.png" alt="File Uploader"/>
<p/>

## Code
`<rds-file-uploader size="medium" label="Upload Files" [multipleFiles]="false" maxfilesize="5" sizeType="" role="fileUpload" (click)="click($event)"`
`(onItemClick)="onItemClick($event)"></rds-file-uploader>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `role`                | `default`\|`fileUpload`|"fileUpload"|For specifing the type of file uploader    |
| `size`                 |`small`\|`medium`\|`large`                           |"medium"   |Specify the size of the dropdown
| `multipleFiles`        | `boolean`                            |"false"|Specify uploading multiple files  |
| `label`           | `string`                          | "File Upload Files" |Specify the label for uploader |
| `extensions`                | `string`    |".png"   |Specify the file extension
| `maxfilesize`                | `any`      |"5"|Specify the maximum siz for the file  |
| `sizeType`      | `string`        |""| specify size type for file

### Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| `click`                 |  `EventEmitter`  | `to open the file explorer to choose the file`
| `onItemClick`                 |  `EventEmitter`  | `Emits the event on selecting file`
