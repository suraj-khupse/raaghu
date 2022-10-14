---
slug: "/page-api-resources"
date: "2019-05-04"
title: "Pages > api-resources"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Api Resources

<p class="">A card is a small rectangular module with images and text. It is an entry point for users to learn more details</p>
<section class="py-4">                                                                                             
    <h6>Api resources</h6>
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
              <img src="/images/api-resources.png" class="">
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="card border-0">
  <h5
    class="card-header border-0 bg-transparent d-flex justify-content-between"
  >
    <div class="card-title fs-3">Api Resources List</div>
    <div class="card-toolbar">
      <rds-button
        [id]="'yes'"
        [size]="'small'"
        [tooltipPlacement]="'top'"
        [colorVariant]="'primary'"
        [label]="'NEW RESOURCE'"
        [attr.data-bs-toggle]="'offcanvas'"
        [attr.data-bs-target]="'#addnewapiresource'"
        [attr.aria-controls]="'addnewapiresource'"
      ></rds-button>
    </div>
  </h5>

  <div class="card-body">
    <app-rds-data-table
      [tableData]="apiResourceTableData"
      [tableHeaders]=" apiResourceTableHeader"
      [actions]="actions"
    ></app-rds-data-table>
  </div>
</div>

<div class="container">
  <!---------------- Add New Api Resource Page ---------------->

  <rds-offcanvas
    [canvasTitle]="'NEW API RESOURCE'"
    [offId]="'addnewapiresource'"
    [placement]="'end'"
    [offcanvaswidth]="600"
  >
    <div class="col-md-12 m-3">
      <rds-nav-tab
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="'start'"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="true"
        [fill]="false"
        [justified]="false"
        [activepage]="0"
      ></rds-nav-tab>
    </div>

    <div naveContent class="row tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="basics"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-api-basics
          (onBsicResourceSave)="SaveBasicResource($event)"
        ></app-api-basics>
      </div>

      <div
        class="tab-pane"
        id="claims"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-api-claims
          [ClaimData]="claimData"
          (onClaimResourceSave)="SaveClaimResource($event)"
        ></app-api-claims>
      </div>
    </div>
  </rds-offcanvas>

  <!--------------- Edit Api Resource Page ------------------->
  <rds-offcanvas
    [canvasTitle]="'EDIT API RESOURCE'"
    [offId]="'EditApiresource'"
    [placement]="'end'"
    [offcanvaswidth]="600"
  >
    <div class="col-md-12 m-3">
      <rds-nav-tab
        [navtabsItems]="navtabsItemsEdit"
        [horizontalAlignment]="'start'"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="true"
        [fill]="false"
        [justified]="false"
        [activepage]="0"
      ></rds-nav-tab>
    </div>

    <div naveContent class="row tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="editBasics"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-api-basics
          [ResourceData]="BasicResource"
          (onBsicResourceSave)="SaveBasicResource($event)"
        ></app-api-basics>
      </div>

      <div
        class="tab-pane"
        id="editClaims"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-api-claims
          [ClaimData]="claimData"
          (onClaimResourceSave)="SaveClaimResource($event)"
        ></app-api-claims>
      </div>

      <div
        class="tab-pane"
        id="editSecrets"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-api-secrets [secretList]="Secrets"></app-api-secrets>
      </div>

      <div
        class="tab-pane"
        id="editProperties"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-api-properties [PropertyList]="Properties"></app-api-properties>
      </div>
    </div>
  </rds-offcanvas>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  
