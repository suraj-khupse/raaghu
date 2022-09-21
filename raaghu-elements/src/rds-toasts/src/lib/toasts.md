---
slug: "/toasts"
date: "2019-05-04"
title: "Elements > Toasts"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Toast

<p class="checkbox-def">Toasts are time-based window elements used to display short messages. It will disappear after a few seconds.</p>


<section class="py-4">
    <h6>Position</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewPosition-tab" data-bs-toggle="tab" data-bs-target="#PreviewPosition" type="button" role="tab" aria-controls="PreviewPosition" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularPosition-tab" data-bs-toggle="tab" data-bs-target="#AngularPosition" type="button" role="tab" aria-controls="AngularPosition" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewPosition" role="tabpanel" aria-labelledby="PreviewPosition-tab">
          <div class="contents p-5">
             <div class="row">
                <div class="col-md-12">
                  <img src="images/toast.png" class="w-50">
                </div>                 
              </div>
            </div>
        </div>
        <div class="tab-pane fade show" id="AngularPosition" role="tabpanel" aria-labelledby="AngularPosition-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<div
  aria-live="polite"
  aria-atomic="true"
  style="position: relative; min-height: 200px;"
>
  <rds-toast
    [withImage]="false"
    [withHeader]="false"
    background="bg-info"
    [customColor]="false"
    custcolor=""
    headerTitle="Bootstrap"
    time="11 Seconds ago"
    textColor=""
  ></rds-toast>
</div>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Toast</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewToast-tab" data-bs-toggle="tab" data-bs-target="#PreviewToast" type="button" role="tab" aria-controls="PreviewToast" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularToast-tab" data-bs-toggle="tab" data-bs-target="#AngularToast" type="button" role="tab" aria-controls="AngularToast" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewToast" role="tabpanel" aria-labelledby="PreviewToast-tab">
          <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="images/toast.png" class="img-fluid w-50">
                 </div>                
                </div>
             </div>
        </div>
        <div class="tab-pane fade show" id="AngularToast" role="tabpanel" aria-labelledby="AngularToast-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-toasts
  message="Hello, world! This is a toast message."
  [withImage]="false"
  [withHeader]="false"
  background=""
  [customColor]="false"
  custcolor=""
  headerTitle="Bootstrap"
  time="11 Seconds ago"
  textColor=""
  position="Bottom-Right"
></rds-toasts>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-4">
    <h6>With Call To Action</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewAction-tab" data-bs-toggle="tab" data-bs-target="#PreviewAction" type="button" role="tab" aria-controls="PreviewAction" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularAction-tab" data-bs-toggle="tab" data-bs-target="#AngularAction" type="button" role="tab" aria-controls="AngularAction" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewAction" role="tabpanel" aria-labelledby="PreviewAction-tab">
          <div class="contents bg-light p-5">
            <div class="row">
             <img src="images/toast.png" class="w-50">
               </div>
           </div>
        </div>
        <div class="tab-pane fade show" id="AngularAction" role="tabpanel" aria-labelledby="AngularAction-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-toast
  [withImage]="false"
  [withHeader]="false"
  background="undefined"
  [customColor]="false"
  custcolor=""
  headerTitle="Bootstrap"
  time="11 Seconds ago"
  textColor=""
>
  <div class="mt-2 p-2 border-top">
    <button type="button" class="btn btn-primary btn-sm">Take action</button>
    &nbsp;
    <button
      type="button"
      class="btn btn-secondary btn-sm"
      data-bs-dismiss="toast"
    >
      Close
    </button>
  </div>
</rds-toast>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="https://portal.raaghu.io/images/components/_toast-message/img-1.png" class="img-fluid"> 
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>