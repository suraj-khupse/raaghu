---
slug: "/Carousel"
date: "2019-05-04"
title: "Elements > Carousel"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Carousel

<p class="">A card is a small rectangular module with images and text. It is an entry point for users to learn more details</p>
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
                     <img src="/images/carousel-basic.png" class="img-fluid">
                 </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
   <div class="col-md-12">
  <rds-carousel
  [crossFade]="true"
  [indicators]="true"
  [controls]="true"
  display_type="basic"
  [imageItem]="imageItem"
></rds-carousel>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Advanced</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewAdvance-tab" data-bs-toggle="tab" data-bs-target="#PreviewAdvance" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularAdvance-tab" data-bs-toggle="tab" data-bs-target="#AngularAdvance" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewAdvance" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="/images/carousel-advanced.png" class="img-fluid">
                 </div>                           
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularAdvance" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
   <div class="col-md-12">
  <rds-carousel
  [crossFade]="true"
  [darkVariant]="true"
  [indicators]="true"
  [controls]="true"
  display_type="advanced"
  [carousalItem]="carousalItem"
></rds-carousel>
</div>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
  
###### Skeleton/Specifications
<div class="py-3">
 <div class="card border p-5">
  <div class="row">
      <div class="col-md-12">
        <img src="/images/carousel-skeleto.png" class="img-fluid">
     </div>
   </div>
   </div>
 </div>
</div>	