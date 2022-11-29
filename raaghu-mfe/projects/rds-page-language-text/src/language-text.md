---
slug: "/page-language-text"
date: "2019-05-04"
title: "Pages > Language-Text"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Language-Text

<p>A card with multiple dropdowns and table with different actions </p>

<!-- Basic -->
<section class="py-4">
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
                                            <img src="/images/language-text.png" class="w-100">
                                            </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <!-- <div style="display: flex;"> -->
  <div class="row justify-content-between">
    <div class="col-sm-4">
      <div class="form-group mb-3">
        <rds-search-input
          [placeholder]="'Search'"
          (send)="searchLanguageText($event)"
          (onClick)="searchLanguageText($event)"
        ></rds-search-input>
      </div>
    </div>
    <div class="col-md-2 col-sm-2">
      <div class="from-group mb-3">
        <rds-select-list
          ngDefaultControl
          name="baselanguage"
          [(ngModel)]="baselanguage"
          [value]="baselanguage"
          [itemList]="listbaseLanguage"
          (change)="getLanguageTextTable()"
        ></rds-select-list>
      </div>
    </div>
    <div class="col-md-2 col-sm-2">
      <div class="form-group mb-3">
        <rds-select-list
          ngDefaultControl
          name="TargetCulturename"
          [(ngModel)]="TargetCulturename"
          [value]="TargetCulturename"
          [itemList]="listbaseLanguage"
          (change)="getLanguageTextTable()"
        ></rds-select-list>
      </div>
    </div>
    <div class="col-md-2 col-sm-2">
      <div class="form-group mb-3">
        <rds-select-list
          ngDefaultControl
          name="source"
          [(ngModel)]="source"
          [value]="source"
          [itemList]="listsource"
          (change)="getLanguageTextTable()"
        ></rds-select-list>
      </div>
      <!-- <rds-select-list [(ngModel)]="source" [value]="source" ngDefaultControl name="source"
                         (change)="getLanguageTextTable()">
          <option [value]="''" selected>Source</option>
          <ng-container *ngFor="let item of listsource">
            <option [value]="item.displayText">{{item.displayText}}</option>
          </ng-container>
        </rds-select-list> -->
    </div>

    <div class="col-md-2 col-sm-2">
      <div class="from-group mb-3">
        <rds-select-list
          ngDefaultControl
          name="targetFilter"
          [(ngModel)]="targetFilter"
          [value]="targetFilter"
          [itemList]="listTargetValue"
          (change)="getLanguageTextTable()"
        ></rds-select-list>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
        <rds-data-table
          [tableHeaders]="languageTableHeader"
          [tableStyle]="'light'"
          [tableData]="languageTableData"
          [recordsPerPage]="10"
          [pagination]="true"
          [inlineEdit]="false"
        ></rds-data-table>
      </div>
    </div>
  </div>
  <rds-offcanvas
    [canvasTitle]="'EDIT TEXT'"
    [offId]="'EditlanguageText'"
    [offcanvaswidth]="550"
    [placement]="'end'"
  >
    <app-edit-language-text
      [Languagetext]="LanguageText"
      (onLanguageTextSave)="getLanguageTextTable()"
    ></app-edit-language-text>
  </rds-offcanvas>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

 