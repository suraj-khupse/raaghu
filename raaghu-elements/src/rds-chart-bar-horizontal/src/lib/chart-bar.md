---
slug: "/Chart-Bar-Horizontal"
date: "2019-05-04"
title: "Chart-bar-horizontal"
---

### Chart-bar-horizontal

<p class="">A card is a small rectangular module with images and text. It is an entry point for users to learn more details</p>
<section class="py-4">
    <h6>Basic</h6>
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
         <div class="contents bg-light p-5">
              <div class="row">
            <img src="/images/popular-pages.png" class="img-thumbnail w-50">
     </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <rds-chart-bar-horizontal
  [chartWidth]="100"
  [chartLabels]="chartLabels"
  [ChartDataSets]="ChartDataSets"
  [chartOptions]="chartOptions"
></rds-chart-bar-horizontal>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   