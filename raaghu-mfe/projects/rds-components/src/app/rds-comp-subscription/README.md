# Subscription

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
<p align="left">
<img src="../../../../../assets/Subscription.png" alt="Subscription"/>
<p/>

## ✒️ Code
```bash
<app-rds-comp-subscription
  [subscriptionData]="subscriptionData"
></app-rds-comp-subscription>
```

## Options
### 🏗️ Input
<!-- prettier-ignore -->
| Input Name                  | Type        |Example     | Description                                                                  |
| --------------------------- | ----------- |------------| ---------------------------------------------------------------------------- |
| subscriptionData              | `any`       | <pre>[{ name: "test", price: "23", duration: "2", iconurl:"assets/Group.jpg", recommended:false, features:["Maximum User Count","Test Check feature","Test check feature count 2"] },<br>{ name: "test", price: "23", duration: "2", iconurl:"assets/Group.jpg", recommended:false, features:["Maximum User Count","Test Check feature","Test check feature count 2"] },<br>{ name: "test", price: "23", duration: "2", iconurl:"assets/Group.jpg", recommended:false, features:["Maximum User Count","Test Check feature","Test check feature count 2"] },]</pre>  |    Specify the subscription data list |

### 💻 Output
| Output Name                  | Type       | Description                                                                  |
| --------------------------- | ----------- |---------------------------------------------------------------------- |
| onSubcribe              | `EventEmitter`       |    Emits the event and subscription data for save  |
