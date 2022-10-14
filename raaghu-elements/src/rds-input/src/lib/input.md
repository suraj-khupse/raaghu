---
slug: "/Input"
date: "2019-05-04"
title: "Elements > Input"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">


#### Input

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
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents p-5">
              <div class="row">
                 <div class="col-md-12">
                      <img src="/images/input-basic.png" class="img-fluid w-100">
                 </div>             
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-input
size="default"
[disabled]="false"
Title=""
TitleType="text"
[readonly]="false"
value=""
inputType="text"
placeholder="Add placeholder"
inputName="Field_name"
icon=""
iconCursor="pointer"
iconHeight="16px"
iconWidth="16px"
[iconStroke]="true"
[iconFill]="false"
iconOpacity="0.4"
[isRequired]="false"
tooltipTitle=""
tooltipPlacement="bottom">
</rds-input>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>


<!-- input with tooltip -->
<section class="py-4">
    <h6>Tooltip</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#Previewtooltip" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#Angulartooltip" type="button" role="tab" aria-controls="AngularBasic" aria-selec0ted="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Previewtooltip" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents bg-light p-5">
              <div class="row">
               <img src="/images/input-tooltip.png" class="img-thumbnail w-100">
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="Angulartooltip" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<rds-input
size="default"
[disabled]="false"
Title=""
TitleType="text"
[readonly]="false"
value=""
inputType="text"
placeholder="Add placeholder"
inputName="Field_name"
icon=""
iconCursor="pointer"
iconHeight="16px"
iconWidth="16px"
[iconStroke]="true"
[iconFill]="false"
iconOpacity="0.4"
[isRequired]="false"
tooltipTitle=""
tooltipPlacement="bottom">
</rds-input>
```
</div>
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
                                    <div class="col-md-6">
                                       <img src="https://portal.raaghu.io/images/components/_dropdown-list/img-1.png" class="img-fluid">
                                    </div>
                                    <div class="col-md-6 ">
                                       <img src="https://portal.raaghu.io/images/components/_dropdown-list/img-2.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>




<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
