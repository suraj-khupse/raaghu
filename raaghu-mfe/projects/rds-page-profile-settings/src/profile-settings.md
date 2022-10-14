---
slug: "/page-profile-settings"
date: "2019-05-04"
title: "Pages > Profile Settings"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Profile Settings

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
         <div class="contents p-5">
              <div class="row">
               <img src="\images\profile-settings.png" class="w-50">
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div class="row">
  <div class="col-md-12 ">
    <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
      <rds-nav-tab [navtabsItems]="navtabsItems" [horizontalAlignment]="'start'" [activepage]="activePage"
        (onClicktab)="getSelectedNavTab($event)" [verticalAlignment]="false" [pills]="false" [tabs]="true"
        [fill]="false" [justified]="false"></rds-nav-tab>
      <div naveContent class="row tab-content p-2" id="nav-tabContent">
        <div class="tab-pane fade show " [ngClass]="{'show active': activePage === 0}" id="my-details" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="mt-3">
                <rds-label [label]="'Personal Info'" class="fs-5" [bold]="true"></rds-label>
              </div>
              <div class="mb-3">
                <rds-label [label]="'Update your photo and personal details here.'"></rds-label>
              </div>
             <app-rds-comp-personal-info></app-rds-comp-personal-info>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show " [ngClass]="{'show active': activePage === 1}" id="password" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="mt-3">
                <rds-label [label]="'Password'" class="fs-5" [bold]="true"></rds-label>
              </div>
              <div class="mb-3">
                <rds-label [label]="'Please enter your current password to change your password.'"></rds-label>
              </div>
              <app-rds-comp-password-settings></app-rds-comp-password-settings>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show " [ngClass]="{'show active': activePage === 2}" id="email" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="mt-3">
                <rds-label [label]="'Update email address'" class="fs-5" [bold]="true"></rds-label>
              </div>
              <div class="mb-3">
                <rds-label [label]="'Manage and update your email.'"></rds-label>
              </div>
              <app-rds-comp-email-settings></app-rds-comp-email-settings>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show " [ngClass]="{'show active': activePage === 3}" id="billing" role="tabpanel"
          aria-labelledby="nav-home-tab">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="mt-3">
                <rds-label [label]="'Billing method'" class="fs-5" [bold]="true"></rds-label>
              </div>
              <div class="mb-3">
                <rds-label [label]="'Manage your plan and billing history details.'"></rds-label>
              </div>
            <app-rds-comp-billing></app-rds-comp-billing>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show " [ngClass]="{'show active': activePage === 4}" id="integations" role="tabpanel"
        aria-labelledby="nav-home-tab">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="mt-3">
              <rds-label [label]="'Integrations and connected apps'" class="fs-5" [bold]="true"></rds-label>
            </div>
            <div class="mb-3">
              <rds-label [label]="'Supercharge your workflow and connect the tool you use every day.'"></rds-label>
            </div>
           <app-rds-comp-integration></app-rds-comp-integration>
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
    </div>
  </section>