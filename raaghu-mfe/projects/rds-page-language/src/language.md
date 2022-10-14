---
slug: "/page-language "
date: "2019-05-04"
title: "Pages > Language"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Language

<p class="checkbox-def">Avatar is known as a visual form representing a user oneself and one's identity wished.</p>

<!-- Basic -->
<section class="py-4">
    <h6>Basic</h6>
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
                                            <img src="/images/language.png" class="w-100">
                                            </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="row">
  <div class="col-md-12 text-end pb-3 desktop-btn d-sm-none d-lg-block">
    <rds-button
      [label]="'New Language'"
      type="button"
      [showLoadingSpinner]="buttonSpinnerForNewLanguage"
      style="float: right"
      [size]="'small'"
      [colorVariant]="'primary'"
      (click)="openCanvas()"
      [attr.aria-controls]="'AddLanguage'"
      [icon]="'plus'"
      [iconHeight]="'12px'"
      [iconWidth]="'12px'"
    ></rds-button>
  </div>
  <div class="col-md-12">
    <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
      <app-rds-data-table
        [tableHeaders]="languageTableHeader"
        [tableStyle]="'light'"
        [tableData]="languageTableData"
        [recordsPerPage]="10"
        [pagination]="true"
        [inlineEdit]="false"
      ></app-rds-data-table>
    </div>
  </div>
</div>
<div class="mobile-btn position-absolute bottom-0 end-0 my-4 mx-5">
  <rds-fab-menu
    [listItems]="listItems"
    [menuicon]="'plus'"
    [colorVariant]="'primary'"
    [menuiconWidth]="'12px'"
    [menuiconHeight]="'12px'"
    (onSelect)="onSelectMenu($event)"
  ></rds-fab-menu>
</div>
<ng-container *ngIf="viewCanvas">
  <rds-offcanvas
    [canvasTitle]="translate.instant(languageCanvasTitle)"
    [offId]="'AddLanguage'"
    (onClose)="closeCanvas()"
    [offcanvaswidth]="550"
    [placement]="'end'"
  >
    <app-rds-comp-new-language></app-rds-comp-new-language>
  </rds-offcanvas>
</ng-container>

```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 