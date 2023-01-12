# Permission Tree

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

<p align="left">
<img src="../../../../../assets/NewEditionFeature.png" alt="NewEditionFeature"/>
<p/>

## ✒️ Code


```bash
    <app-rds-comp-permission-tree [treeData]="tenantFeatures" [selectedItems]="tenantFeatureValues"
       (getAllselectedPermissions)="getSelectedFeaturesList($event)" [selectAllLabel]="'Select Features'">
    </app-rds-comp-permission-tree>
```

## Options
### 🏗️ Input
<!-- prettier-ignore -->
| Input Name                  | Type                             |Example| Description                                                                  |
| --------------------------- | -------------------------------- |------------| ---------------------------------------------------------------------------- |
| treeData             | `array of object`        |<pre>{"data":{"parentName":null,"name":"TestEditionScopeFeature","displayName":"[Test edition scope feature]",<br>"description":null,"defaultValue":"false","inputType":{"name":"CHECKBOX","attributes":{},"validator":{"name":"BOOLEAN","attributes":{}}}},<br>"level":1,"selected":false,"label":"[Test edition scope feature]","expandedIcon":"fa fa-folder-open text-warning",<br>"collapsedIcon":"fa fa-folder text-warning","expanded":true,"selectable":true,"children":[]}]</pre>|Node for create the tree
| selectedItems      | `array`                          | <pre>[{"name":"App.MaxUserCount","value":"0"},{"name":"TestEditionScopeFeature","value":"false"},<br>{"name":"App.TestCheckFeature","value":"false"},{"name":"App.TestCheckFeature2","value":"true"},<br>{"name":"App.ChatFeature","value":"false"},{"name":"App.ChatFeature.TenantToTenant","value":"false"},<br>{"name":"App.ChatFeature.TenantToHost","value":"false"}]</pre>|For enable and desable the selected nodes|
| selectAllLabel               |  `string`                       | "selectAllLabel"|For specify the label for select All|
| multiselectTree              |  `boolean`                       | "false"|For specify the tree type(muti select or single select)|


### 💻 Output
| Output Name                 | Type          | Description                     |      
| --------------------------- | --------------|------------------|
| onSelectAll                 |  `EventEmitter`  | `Emit value of all selected nodest`  |
| onSelectnode                |  `EventEmitter`  | `Emit value of selected node`  |
| getAllselectedPermission    |  `EventEmitter`  | `Emit value of all selected permissions`  |
