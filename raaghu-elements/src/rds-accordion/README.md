# Accordian

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../assets/Accordion.png" alt="Accordion"/>
<p/>

## Code
```bash
<rds-accordian [id]="id">
  <accordion-item title="Section 1 title" [accordionId]="id">
    <h3>Custom</h3>
  </accordion-item>
  <accordion-item title="Section 2 title" [accordionId]="id">
    <h3>Custom</h3>
  </accordion-item>
</rds-accordian>
```

## Options
### Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| `id`                     | `string`                            |"AccordianID"|Id of the accordian  |                             |
| `alwaysOpen`           | `boolean`                          | "false"|Open a specific accoordion permanently  |
| `expand`                   |  `boolean`                         | "false"|Expand the accordion using the expand property |
| `flush`                    | `boolean` |     "false"|Enable and disable flush property of the Accordion              |
| `outline`                | `boolean`                           |"false"|Put an outline for the accordion      |
| `title`                     | `string`                            |"Section 1 title"|Data to be displayed in the accordion  |                             |
