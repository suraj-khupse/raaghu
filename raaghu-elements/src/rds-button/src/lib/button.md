---
slug: "/Button"
date: "2019-05-04"
title: "Elements > Button"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

<link rel="stylesheet" href="../assets/css/main.css">

#### Buttons
  
<p class="">A button triggers an event or action. They let users know what will happen next.</p> 
<section class="py-4">
  <h6>Default</h6>
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDefault-tab" data-bs-toggle="tab" data-bs-target="#PreviewDefault" type="button" role="tab" aria-controls="PreviewDefault" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDefault-tab" data-bs-toggle="tab" data-bs-target="#AngularDefault" type="button" role="tab" aria-controls="AngularDefault" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDefault" role="tabpanel" aria-labelledby="PreviewDefault-tab">
         <div class="contents  p-5">
         <div class="row">
         <div class="col-md-12">
           <img src="/images/button-basic.png"> 
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularDefault" role="tabpanel" aria-labelledby="AngularDefault-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  label="button"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>
  

  <section class="py-4">

 ###### Icon Button  
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewIcon-tab" data-bs-toggle="tab" data-bs-target="#PreviewIcon" type="button" role="tab" aria-controls="PreviewIcon" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularIcon-tab" data-bs-toggle="tab" data-bs-target="#AngularIcon" type="button" role="tab" aria-controls="AngularIcon" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewIcon" role="tabpanel" aria-labelledby="PreviewIcon-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
          <img src="/images/button-icon.png">  
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularIcon" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  [roundedButton]="false"
  iconHeight="18px"
  iconWidth="18px"
  icon="plus"
  label="button"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>

<section class="py-4">

 ###### Icon with label 
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewIconwithLabel-tab" data-bs-toggle="tab" data-bs-target="#PreviewIconwithLabel" type="button" role="tab" aria-controls="PreviewIcon" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularIconwithLabel-tab" data-bs-toggle="tab" data-bs-target="#AngularIconwithLabel" type="button" role="tab" aria-controls="AngularIcon" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewIconwithLabel" role="tabpanel" aria-labelledby="PreviewIcon-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents bg-light p-5">
          <img src="/images/button-with-label.png">  
           </div>
   </div>                          
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularIconwithLabel" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  [roundedButton]="false"
  [roundedCorner]="false"
  iconHeight="18px"
  iconWidth="18px"
  icon="plus"
  label="button"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
</section>

<section class="py-4">

###### Outline Button  
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOutline-tab" data-bs-toggle="tab" data-bs-target="#PreviewOutline" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutline-tab" data-bs-toggle="tab" data-bs-target="#AngularOutline" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewOutline" role="tabpanel" aria-labelledby="PreviewOutline-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/button-outline.png">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularOutline" role="tabpanel" aria-labelledby="AngularOutline-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  [outlineButton]="true"
  label="outline"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>

<section class="py-4">

###### Button Disable
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDisable-tab" data-bs-toggle="tab" data-bs-target="#PreviewDisable" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutline-tab" data-bs-toggle="tab" data-bs-target="#AngularDisable" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDisable" role="tabpanel" aria-labelledby="PreviewDisable-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/disable-button.png">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularDisable" role="tabpanel" aria-labelledby="AngularDisable-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  [disabled]="true"
  label="Disable"
></rds-button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>

  ###### Button-Tooltip Disable
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Previewtooltip-tab" data-bs-toggle="tab" data-bs-target="#Previewtooltip" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="Angulartooltip-tab" data-bs-toggle="tab" data-bs-target="#Angulartooltip" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Previewtooltip" role="tabpanel" aria-labelledby="Previewtooltip-tab">
         <div class="row">
         <div class="col-md-12">
         <div class="contents p-5">
            <img src="/images/button-tooltip.png">
               </div>
   </div>              
   </div>
   </div>
        <div class="tab-pane fade show" id="Angulartooltip" role="tabpanel" aria-labelledby="Angulartooltip-tab">
          <div class="contents bg-code">
<div class="row">

```html
<rds-button
  colorVariant="primary"
  [block]="false"
  size="medium"
  label="button"
  tooltipTitle="This is tooltip"
  tooltipPlacement="bottom"
></rds-button>
```

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
        <img src="/images/button-skeleton.png" class="img-fluid">
     </div>
   </div>
   </div>
 </div>
</div>	



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
