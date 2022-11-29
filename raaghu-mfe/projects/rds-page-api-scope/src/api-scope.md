---
slug: "/page-api-scope"
date: "2019-05-04"
title: "Pages > api-scope"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Api Scope

<p></p>
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
              <!-- <img src="https://raw.githubusercontent.com/Wai-Technologies/raaghu/main/raaghu-mfe/assets/Edit-Language-Text.png" alt="color"> -->
              <img src="/images/api-scope.png" class="">
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="d-flex justify-content-end mt-2">
  <rds-button
    [id]="'yes'"
    [size]="'small'"
    [tooltipPlacement]="'top'"
    [colorVariant]="'primary'"
    [label]="'NEW SCOPE'"
    [attr.data-bs-toggle]="'offcanvas'"
    [attr.data-bs-target]="'#addnewapiresource'"
    [attr.aria-controls]="'addnewapiresource'"
  ></rds-button>
</div>
<div class="row mt-2">
  <rds-data-table
    [tableData]="scopeList"
    [tableHeaders]=" scopeTableHeaders"
    [actions]="actions"
  ></rds-data-table>
</div>

<rds-offcanvas
  [canvasTitle]="'NEW API SCOPE'"
  [offId]="'addnewapiresource'"
  [offcanvaswidth]="550"
  [placement]="'end'"
>
  <rds-nav-tab
    [navtabsItems]="navtabsItems"
    [activepage]="activePage"
    [horizontalAlignment]="'start'"
    [verticalAlignment]="false"
    [pills]="false"
    [tabs]="true"
    [fill]="false"
    [justified]="false"
  >
    <div naveContent class="row tab-content m-2" id="nav-tabContent">
      <div
        class="tab-pane fade"
        [ngClass]="{'show active': activePage === 0}"
        id="basics"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <rdc-comp-api-scope-basics></rdc-comp-api-scope-basics>
      </div>
      <div
        class="tab-pane fade"
        [ngClass]="{'show active': activePage === 2}"
        id="resources"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <rdc-comp-api-scope-resources></rdc-comp-api-scope-resources>
      </div>
    </div>
  </rds-nav-tab>
</rds-offcanvas>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  
