---
slug: "/page-settings"
date: "2019-05-04"
title: "Pages > Settings"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Settings

<p class="checkbox-def">Avatar is known as a visual form representing a user oneself and one's identity wished.</p>

<!-- Basic -->
<section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
                                          <div class="row">
                                            <div class="col-md-12">
                                            <img src="/images/settings-page.png" class="w-100">
                                            </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="row">
  <div class="col-md-12 pb-3 desktop-btn">
    <div class="d-flex justify-content-end">
      <rds-button
        [tooltipPlacement]="'bottom'"
        [tooltipTitle]="'SAVE ALL'"
        [label]="'SAVE ALL'"
        type="button"
        [size]="'small'"
        [colorVariant]="'primary'"
        [outlineButton]="false"
        (click)="onSave()"
        icon="save"
        iconHeight="15px"
        iconWidth="15px"
      ></rds-button>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="mobile-btn position-absolute bottom-0 end-0 my-5 me-5">
        <rds-fab-menu
          [listItems]="listItems1"
          [menuicon]="'plus'"
          [colorVariant]="'primary'"
          [menuiconWidth]="'12px'"
          [menuiconHeight]="'12px'"
          (onSelect)="onSelectMenu($event)"
        ></rds-fab-menu>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="card border-0 py-2 px-4 h-100 rounded-0 card-full-stretch">
        <!--<ng-container *ngIf="currentAlerts&&currentAlerts.length>0">
          <mfe-loader [config]="rdsAlertMfeConfig"></mfe-loader>
        </ng-container>-->
        <div></div>
        <rds-nav-tab
          [navtabsItems]="navtabsItems"
          [horizontalAlignment]="'start'"
          [verticalAlignment]="false"
          [pills]="false"
          [tabs]="true"
          [fill]="false"
          [justified]="false"
        ></rds-nav-tab>

        <div naveContent class="row tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="tenant-management"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <app-rds-comp-tenant-management></app-rds-comp-tenant-management>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="user-management"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <app-rds-comp-user-management></app-rds-comp-user-management>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="security"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <app-rds-security></app-rds-security>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="email"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <app-rds-comp-email></app-rds-comp-email>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="invoice"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <app-rds-comp-invoice></app-rds-comp-invoice>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="other-settings"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="row">
              <app-rds-comp-other-settings></app-rds-comp-other-settings>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 