---
slug: "/modal"
date: "2019-05-04"
title: "Elements > Modal"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

  
 

<link rel="stylesheet" href="../assets/css/main.css">

#### Modal Popups
  
<p class="">It is a dialog box/popup window that is displayed on top of the current page</p>

<section class="py-4">
    <h6>Form Modal</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
               <div class="col-md-12">
                  <img src="/images/modal-basic.png" class="img-fluid w-50">
               </div>               
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <button
  type="button"
  (click)="onClick($event)"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#storybookModal"
>
  {{label}}
</button>
<rds-modal
  modalId="storybookModal"
  (onShow)="onShow($event)"
  [modalClasses]="modalClasses"
  [modalAnimation]="modalAnimation"
>
  <div modalheader class="col-md-12" *ngIf="isModalHeader">
    <button
      style="float:right"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      (click)="onClose($event)"
    ></button>
    <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
  </div>
  <div Modalbody>
    <p>{{modalData.modalContent}}</p>
  </div>
  <div Modalfooter *ngIf="isModalFooter">
    <button
      type="button"
      (click)="onClose($event)"
      class="btn btn-secondary m-1"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</rds-modal>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   


<section class="py-4">
    <h6>Long Content Modal</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab1" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab1" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic-tab1">
         <div class="contents  p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="/images/modal-long-content.png" class="img-fuild w-50">
                </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
  <button
  type="button"
  (click)="onClick($event)"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#storybookModal"
>
  {{label}}
</button>
<rds-modal
  modalId="storybookModal"
  [modalheader]="modalheader"
  [modalClasses]="modalClasses"
  [Modalbody]="Modalbody"
  [Modalfooter]="Modalfooter"
  [modalAnimation]="modalAnimation"
>
  <div modalheader class="col-md-12" *ngIf="isModalHeader">
    <button
      style="float:right"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      (click)="onClose($event)"
    ></button>
    <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
  </div>
  <div Modalbody>
    <p>{{modalData.modalContent}}</p>
  </div>
  <div Modalfooter *ngIf="isModalFooter">
    <button
      type="button"
      (click)="onClose($event)"
      class="btn btn-secondary m-1"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</rds-modal>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>



<section class="py-4">
    <h6>Static Backdrop Modal</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab2" data-bs-toggle="tab" data-bs-target="#PreviewBasic2" type="button" role="tab" aria-controls="PreviewBasic2" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab2" data-bs-toggle="tab" data-bs-target="#AngularBasic2" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic2" role="tabpanel" aria-labelledby="PreviewBasic-tab2">
         <div class="contents  p-5">
              <div class="row">
               <div class="col-md-12">
                  <img src="/images/modal-basic.png" class="img-fuild w-50">
               </div>               
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic2" role="tabpanel" aria-labelledby="AngularBasic-tab2">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <button
  type="button"
  (click)="onClick($event)"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#storybookModal"
>
  {{label}}
</button>
<rds-modal
  backdropstatic="static"
  modalId="storybookModal"
  [modalClasses]="modalClasses"
  [modalheader]="modalheader"
  [Modalbody]="Modalbody"
  [Modalfooter]="Modalfooter"
>
  <div modalheader class="col-md-12" *ngIf="isModalHeader">
    <button
      style="float:right"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      (click)="onClose($event)"
    ></button>
    <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
  </div>
  <div Modalbody>
    <p>{{modalData.modalContent}}</p>
  </div>
  <div Modalfooter *ngIf="isModalFooter">
    <button
      type="button"
      (click)="onClose($event)"
      class="btn btn-secondary m-1"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</rds-modal>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>