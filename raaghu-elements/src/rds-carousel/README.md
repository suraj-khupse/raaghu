# Carousel

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/Carousel.png" alt="Carousel"/>
<p/>

## Code

`<rds-carousel
  [crossFade]="true"
  [darkVariant]="false"
  [indicators]="true"
  [controls]="true"
  [imageItem]="imageItem"></rds-carousel>`

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `crossFade`                     | `boolean`                            |"false"|Specify cross fading required or not  |
| `controls`           | `boolean`                          | "true" |  Specify control over image |
| `imageItem`                   |  `{}`| `[ { img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg', caption: 'this is the caption section were u can add the caption for the image' }, { img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', caption: 'this is the caption section were u can add the caption for the image' } ]`|Add the images|
| `indicators`                     | `boolean`                            |"true"|Shows the indicator for image  | 
| `darkVariant`                     | `boolean`                            |"false"|Sets dark theme |   
