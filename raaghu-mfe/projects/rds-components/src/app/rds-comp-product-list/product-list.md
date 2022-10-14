---
slug: "/comp-product-list"
date: "2019-05-04"
title: "Components > Product-list"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Product List

<p class="">A card is a small rectangular module with images and text. It is an entry point for users to learn more details</p>
<!-- Defualt -->
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
         <div class="contents p-5">
              <div class="row">              
                 <div class="col-md-12">
                    <img src="/images/product-image-with-title.png" class="img-fluid w-100">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="ImageWithTitle"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
</section>

<!-- Card with full details-->
<section class="py-4">
    <h6>Card With Full Details</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewCard" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularCard" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewCard" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                    <img src="/images/card-with-full-details.png" class="img-fluid w-100">
                 </div>                  
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularCard" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="cardWithFullDetails"
[productListItems]="productListItems"
[itemListRating]="itemListRating">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   
<!-- Product with info  -->
<section class="py-4">
    <h6>Product With Info</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewProduct" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularProduct" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewProduct" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row"> 
                 <div class="col-md-12">
                     <img src="/images/product-with-info.png" class="img-fluid w-100">
                 </div>                          
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularProduct" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="ImageWithInfo"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- Simple -->
<section class="py-4">
    <h6>Simple</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewSimple" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularSimple" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewSimple" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="/images/simple.png" class="img-fluid w-100">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularSimple" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="simple"
[productListItems]="productListItems"
[itemListRating]="itemListRating">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With Border Grid -->
<section class="py-4">
    <h6>With Border Grid</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBorder" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBorder" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBorder" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">  
                 <div class="col-md-12">
                     <img src="/images/with-border-grid.png" class="img-fluid w-100">
                 </div>                         
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBorder" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withBorderGrid"
[productListItems]="productListItems"
[itemListRating]="itemListRating">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With CTA Link -->
<section class="py-4">
    <h6>With CTA Link</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewCTA" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularCTA" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewCTA" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">               
                 <div class="col-md-12">
                     <img src="/images/with-cta-link.png" class="img-fluid w-100">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularCTA" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withCTALink"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Color Swatches And Horizontal Scrolling -->
<section class="py-4">
    <h6>With Color Swatches And Horizontal Scrolling</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewColor" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularColor" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewColor" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">             
                 <div class="col-md-12">
                     <img src="/images/with-color-swatches-and-horizontal-scrolling.png" class="img-fluid w-100">
                 </div>             
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularColor" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withColorSwatchesAndHorizontalScrolling"
[productListItems]="productListItems"
[itemListColor]="itemListColor"
[itemListRating]="itemListRating">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Image Overlay And Add Button -->
<section class="py-4">
    <h6>With Image Overlay And Add Button</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewImage" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularImage" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewImage" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                     <img src="/images/with-image-overlay-and-add-button.png" class="img-fluid w-100">
                 </div>                          
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularImage" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withImageOverlayAndAddButton"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With Inline Price -->
<section class="py-4">
    <h6>With Inline Price</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewInline" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularInline" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewInline" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">           
                 <div class="col-md-12">
                     <img src="/images/with-inline-price.png" class="img-fluid w-100">
                 </div>              
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularInline" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withInlinePrice"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- With Supporting Text -->
<section class="py-4">
    <h6>With Supporting Text</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewSupporting" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularSupporting" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewSupporting" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">   
                 <div class="col-md-12">
                    <img src="/images/with-supporting-text.png" class="img-fluid w-100">
                 </div>                        
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularSupporting" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withSupportingText"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Tall Images -->
<section class="py-4">
    <h6>With Tall Images</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewTall" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularTall" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewTall" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">  
                 <div class="col-md-12">
                     <img src="/images/with-tall-image.png" class="img-fluid w-100">
                 </div>                        
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularTall" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withTallImages"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

<!-- With Tall Images And CTA Link -->
<section class="py-4">
    <h6>With Tall Images And CTA Link </h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewTallCTA" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularTallCTA" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewTallCTA" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents bg-light p-5">
              <div class="row">
                 <div class="col-md-12">
                      <img src="/images/with-tall-image-and-cta-link.png" class="img-fluid w-100">
                 </div>                         
           </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularTallCTA" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-product-list
role="withTallImagesAndCTALink"
[productListItems]="productListItems">
</app-rds-comp-product-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


