---
slug: "/page-maintenance"
date: "2019-05-04"
title: "Pages > maintenance"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Maintenance

<p class="">A card is a small rectangular module with images and text. It is an entry point for users to learn more details</p>
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
         <div class="contents p-5">
              <div class="row">
              <div class="col-md-12">
                <img src="/images/maintenance.png" class="img-fluid w-100">
              </div>
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="row">
  <div class="col-md-12 text-end pb-3">
    <div
      class="d-flex justify-content-end"
      *ngIf="tabcash && cashedata && cashedata.length>0"
    >
      <div class="desktop-btn">
        <rds-button
          (click)="deletAllcasheConfirmation()"
          [id]="'yes'"
          [size]="'small'"
          [tooltipPlacement]="'top'"
          [colorVariant]="'primary'"
          [label]="'CLEAR ALL'"
        >
          <rds-icon left name="delete" width="15px" height="15px"></rds-icon>
        </rds-button>
      </div>
      <div
        class="mobile-btn position-fixed bottom-0 end-0 my-5 me-5"
        style="z-index: 1;">
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
    <div
      class="d-flex justify-content-end"
      *ngIf="tabweb && websiteLogData && websiteLogData.length > 0 "
    >
      <div class="desktop-btn">
        <rds-button
          type="button"
          [size]="'small'"
          [colorVariant]="'primary'"
          [roundedButton]="true"
          icon="refresh"
          iconHeight="18px"
          iconWidth="26px"
          (click)="refreshData()"
          class="me-2"
        ></rds-button>
        <rds-button
          [id]="'yes'"
          [size]="'small'"
          [tooltipPlacement]="'top'"
          [colorVariant]="'primary'"
          (click)="exportToExcel()"
          [label]="'DOWNLOAD ALL'"
          [outlineButton]="true"
        >
          <rds-icon
            left
            name="download_data"
            height="12px"
            width="12px"
          ></rds-icon>
        </rds-button>
      </div>
      <div
        class="mobile-btn position-fixed bottom-0 end-0 my-5 me-5"
        style="z-index: 1;">
        <rds-fab-menu
          [listItems]="listItems2"
          [menuicon]="'plus'"
          [colorVariant]="'primary'"
          [menuiconWidth]="'12px'"
          [menuiconHeight]="'12px'"
          (onSelect)="onSelectMenu($event)"
        ></rds-fab-menu>
      </div>
    </div>
  </div>
  <div>
    <div class="col-md-12">
      <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
        <rds-nav-tab
          [navtabsItems]="navtabItems"
          horizontalAlignment="start"
          [verticalAlignment]="false"
          [pills]="false"
          [tabs]="true"
          [fill]="false"
          [justified]="false"
          [flex]="false"
          (onClicktab)="getnavtabid($event)"
        ></rds-nav-tab>
        <div naveContent class="tab-content p-4" id="headerbar">
          <div
            class="tab-pane fade active show"
            id="nav-Caches"
            role="tabpanel"
            aria-labelledby="nav-Caches"
          >
            <app-rds-comp-cache [cashedata]="cashedata"></app-rds-comp-cache>
          </div>
          <div
            class="tab-pane fade"
            id="nav-websiteLogs"
            role="tabpanel"
            aria-labelledby="nav-websiteLogs"
          >
            <app-rds-comp-website-log
              [websiteLogData]="websiteLogData"
            ></app-rds-comp-website-log>
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
    </div>
  </section>
   