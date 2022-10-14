---
slug: "/checkbox-parent-child"
date: "2019-05-04"
title: "Elements > Checkbox-parent-child"
---

#### Checkbox Parent Child

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
         <div class="contents p-5">
              <div class="row">  
                 <div class="col-md-12">
                     <img src="/images/checbox-group-parent-child.png" class="img-fluid w-25">
                 </div>                        
           </div>                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
   <rds-checkbox-parent-child
  [checked]="false"
  [disabled]="false"
  id="checkboxid"
  label="default checkbox"
  [switch]="false"
  [inline]="false"
  [withLabel]="true"
  [isInputGroup]="false"
  state="checkbox"
></rds-checkbox-parent-child>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   