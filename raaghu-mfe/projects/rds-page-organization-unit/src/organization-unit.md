---
slug: "/page-organization-unit"
date: "2019-05-04"
title: "Pages > Organization Unit"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Organization Unit

 <section class="py-4">
    <h6>Default</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab1" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic1" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab1" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic1" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents bg-light p-5">
              <div class="row">
               <img src="\images\organization-unit.png" class="img-fluid">
              </div>          
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div>
  <div [class.card]="selectedTreeNode==0">
    <div class="row" [class.card-body]="selectedTreeNode==0">
      <div class="col-md-6 gutter-b">
        <div>
          <div class="card p-2 border-0 rounded-0 vh-88">
            <div class="card-header bg-transparent">
              <h5 class="card-title">{{'Organization Tree'| translate}}</h5>
            </div>
            <div class="card-body overflow-auto vh-75">
              <mfe-loader [config]="rdsOrganizationTreeConfig"></mfe-loader>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 gutter-b">
        <div class="card p-2 border-0 rounded-0 vh-88">
          <div [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''">
            <div class="">
              <div *ngIf="selectedTreeNode != 0">
                <div
                  class="
                    card-header
                    d-flex
                    justify-content-between
                    bg-transparent
                    align-items-center
                  "
                >
                  <h5 class="card-title text-primary">
                    {{ organizationName }}
                  </h5>
                  <rds-button
                    [label]="translate.instant('New Member')"
                    *ngIf="selectedTabIndex == 0"
                    [size]="'small'"
                    [colorVariant]="'primary'"
                    (click)="newUser($event)"
                  >
                    <rds-icon
                      left
                      name="plus"
                      height="12px"
                      width="12px"
                    ></rds-icon>
                  </rds-button>
                  <rds-button
                    [label]="translate.instant('New Role')"
                    (click)="newRole($event)"
                    type="button"
                    *ngIf="selectedTabIndex == 1"
                    [size]="'small'"
                    class="px-2"
                    [colorVariant]="'primary'"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#addRoleModal"
                  >
                    <rds-icon
                      left
                      name="plus"
                      height="12px"
                      width="12px"
                    ></rds-icon>
                  </rds-button>
                </div>

                <div class="card-body pt-2">
                  <div class="col-md-12 mb-2">
                    <rds-nav-tab
                      [navtabsItems]="getNavTabItems()"
                      [horizontalAlignment]="'start'"
                      [verticalAlignment]="false"
                      [pills]="false"
                      [tabs]="true"
                      [fill]="false"
                      [justified]="false"
                      [flex]="false"
                      (onClicktab)="btnClick($event)"
                    ></rds-nav-tab>
                  </div>
                  <div naveContent class="row tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="Members"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="row">
                        <mfe-loader
                          [config]="rdsDataTableForMemberMfeConfig"
                        ></mfe-loader>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="Roles"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="row">
                        <mfe-loader
                          [config]="rdsDataTableForRoleMfeConfig"
                        ></mfe-loader>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<rds-offcanvas
  [canvasTitle]="usercanvasTitle"
  [offId]="'addUserModal'"
  [offcanvaswidth]="550"
  *ngIf="viewCanvas"
  [placement]="'end'"
  (onClose)="close()"
>
  <div class="row form-style">
    <form>
      <div class="tab-content">
        <div class="form-group mb-3">
          <div class="col-md-12 mt-2">
            <mfe-loader
              [config]="rdsDataTableForUserListMfeConfig"
            ></mfe-loader>
          </div>
        </div>
      </div>
      <div class="footer-buttons my-2">
        <div class="row">
          <div class="col-md-12 d-flex flex-row">
            <div>
              <rds-button
                [label]="'Cancel'"
                type="button"
                [size]="'small'"
                [colorVariant]="'outline-primary'"
                data-bs-dismiss="offcanvas"
              ></rds-button>
            </div>
            <div *ngIf="addedDataMember">
              <rds-button
                [label]="'Save'"
                type="button"
                [size]="'small'"
                class="px-2"
                [colorVariant]="'primary'"
                (click)="pushUser()"
                data-bs-dismiss="offcanvas"
                data-bs-target="#addUserModal"
              ></rds-button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</rds-offcanvas>
<rds-offcanvas
  [canvasTitle]="rolecanvasTitle"
  [offId]="'addRoleModal'"
  [offcanvaswidth]="550"
  *ngIf="viewCanvas"
  [placement]="'end'"
  (onClose)="close()"
>
  <div class="row form-style">
    <form>
      <div class="tab-content">
        <div class="form-group mb-3">
          <div class="col-md-12 mt-3">
            <mfe-loader
              [config]="rdsDataTableForRoleListMfeConfig"
            ></mfe-loader>
          </div>
        </div>
      </div>
      <div class="footer-buttons my-2">
        <div class="row">
          <div class="col-md-12 d-flex flex-row">
            <div>
              <rds-button
                [label]="'Cancel'"
                type="button"
                [size]="'small'"
                [colorVariant]="'outline-primary'"
                data-bs-dismiss="offcanvas"
              ></rds-button>
            </div>
            <div *ngIf="addedDataRole">
              <rds-button
                [label]="'Save'"
                type="button"
                [size]="'small'"
                class="px-2"
                [colorVariant]="'primary'"
                (click)="pushRole()"
                data-bs-dismiss="offcanvas"
                data-bs-target="#addRoleModal"
              ></rds-button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</rds-offcanvas>
```

</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
