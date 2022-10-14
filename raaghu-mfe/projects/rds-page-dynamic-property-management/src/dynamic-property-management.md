---
slug: "/page-dynamic-property-management "
date: "2019-05-04"
title: "Pages > Dynamic-Property-Management"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Dynamic-Property-Management

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
                                            <img src="/images/dynamic-prop-management.png" class="w-100">
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
    <rds-button
      [label]="'NEW DYNAMIC ENTITY PROPERTY'"
      type="button"
      [size]="'small'"
      (click)="openCanvas()"
      style="float: right"
      [colorVariant]="'primary'"
      [attr.aria-controls]="'AddDynamic'"
      [icon]="'plus'"
      [iconHeight]="'12px'"
      iconWidth="12px"
    ></rds-button>
  </div>
</div>
<div
  class="mobile-btn position-absolute bottom-0 end-0 my-5 me-5"
  style="z-index: 1;"
>
<rds-fab-menu
    [listItems]="listItems1"
    [menuicon]="'plus'"
    [colorVariant]="'primary'"
    [menuiconWidth]="'12px'"
    [menuiconHeight]="'12px'"
    (onSelect)="onSelectMenu($event)"
  ></rds-fab-menu>
</div>
<div class="row">
  <div class="col-md-12">
    <div class="card border-0 p-2 h-100 rounded-0 card-full-stretch">
      <!-- Main Navbar -->
      <rds-nav-tab
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="'start'"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="true"
        [fill]="false"
        [activepage]="0"
        [justified]="false"
        (onClicktab)="btnClick($event)"
      ></rds-nav-tab>
      <!-- Main Navbar tabs -->
      <div naveContent class="row tab-content p-2 pt-3" id="nav-tabContent">
        <!-- Dynamic -->
        <div
          class="tab-pane fade show active"
          id="dynamic-properties"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div class="row">
            <app-rds-comp-dynamic-properties></app-rds-comp-dynamic-properties>
          </div>
        </div>
        <!-- Entity -->
        <div
          class="tab-pane fade"
          id="dynamic-entity-properties"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div class="row">
            <app-rds-comp-dynamic-enity-properties></app-rds-comp-dynamic-enity-properties>
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

 