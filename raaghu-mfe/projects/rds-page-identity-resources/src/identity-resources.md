---
slug: "/page-identity-resources"
date: "2019-05-04"
title: "Pages > Identity-Resources"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Identity Resource

<p>Gives an important details about a user with other necessary tabular details and actions </p>

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
                                            <img src="/images/identity-resource.png" class="w-100">
                                            </div>
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
    [label]="'NEW RESOURCE'"
    [attr.data-bs-toggle]="'offcanvas'"
    [attr.data-bs-target]="'#addnewIdentityresource'"
    [attr.aria-controls]="'addnewIdentityresource'"
  ></rds-button>
</div>
<div class="row mt-2">
  <rds-data-table
    [tableData]="ResourceTableData"
    [tableHeaders]=" ResourceTableHeader"
    [actions]="actions"
  ></rds-data-table>
</div>
<rds-offcanvas
  [canvasTitle]="'New Identity Resource'"
  [offId]="'addnewIdentityresource'"
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
        id="Basics"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <rds-comp-basic-resource
          (onBsicResourceSave)="SaveBasicResource($event)"
        ></rds-comp-basic-resource>
      </div>
      <div
        class="tab-pane fade"
        [ngClass]="{'show active': activePage === 1}"
        id="Claim"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <rds-comp-claims
          [ClaimData]="claimData"
          (onClaimResourceSave)="SaveClaimResource($event)"
        ></rds-comp-claims>
      </div>
    </div>
  </rds-nav-tab>
</rds-offcanvas>
<rds-offcanvas
  [canvasTitle]="'Edit Identity Resource'"
  [offId]="'EditIdentityresource'"
  [offcanvaswidth]="600"
  [placement]="'end'"
>
  <rds-nav-tab
    [navtabsItems]="navtabsItemsEdit"
    [activepage]="activePage"
    [horizontalAlignment]="'start'"
    [verticalAlignment]="false"
    [pills]="false"
    [tabs]="true"
    [fill]="false"
    [justified]="false"
  >
    <div naveContent class="row tab-content m-2" id="nav-tabContentEdit">
      <div
        class="tab-pane fade"
        [ngClass]="{'show active': activePage === 0}"
        id="Basicsedit"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <basicresource
          [ResourceData]="BasicResource"
          (onBsicResourceSave)="SaveBasicResource($event)"
        ></basicresource>
      </div>
      <div
        class="tab-pane fade"
        [ngClass]="{'show active': activePage === 1}"
        id="ClaimEdit"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-claims
          [ClaimData]="claimData"
          (onClaimResourceSave)="SaveClaimResource($event)"
        ></app-claims>
      </div>
      <div
        class="tab-pane fade"
        [ngClass]="{'show active': activePage === 1}"
        id="Properties"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <app-properties [PropertyList]="Properties"></app-properties>
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
  </section>

 