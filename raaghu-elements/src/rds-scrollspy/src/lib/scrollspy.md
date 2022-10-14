---
slug: "/scrollspy"
date: "2019-05-04"
title: "Elements > Scrollspy"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Scrollspy

<p class="checkbox-def">Scrollspy is a navigation mechanism that automatically highlights the nav links based on the scroll position</p>



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
                 <div class="col-md-12">
                     <img src="\images\scrollspy-basic.png" class="img-fluid w-75">
                 </div>              
              </div>
                       
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic-tab1">
          <div class="contents bg-code">
<div class="row m-0">

```html
<div id="scrollspy">
  <a
    type="button"
    href="#scrollspyHeading1"
    target="_self"
    class="btn btn-primary m-1"
  >
    First Header
  </a>
  <a
    type="button"
    href="#scrollspyHeading2"
    target="_self"
    class="btn btn-primary m-1"
  >
    Second Header
  </a>
  <a
    type="button"
    href="#scrollspyHeading3"
    target="_self"
    class="btn btn-primary m-1"
  >
    Third Header
  </a>
</div>
<rds-scrollspy scrollId="scrollspy">
  <scrollspy-item scrollItemId="scrollspyHeading1" header="First header">
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting
    </p>
    <div class="d-flex justify-content-end">
      <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
    </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading2" header="Second header">
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting
    </p>
    <div class="d-flex justify-content-end">
      <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
    </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading3" header="Third header">
    <p>
      This is some placeholder content for the scrollspy page. Note that as you
      scroll down the page, the appropriate navigation link is highlighted. It's
      repeated throughout the component example. We keep adding some more
      example copy here to emphasize the scrolling and highlighting
    </p>
    <div class="d-flex justify-content-end">
      <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
    </div>
  </scrollspy-item>
</rds-scrollspy>
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


<!-- Skeleton / Specifications -->
<section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="/images/skel-scrollspy.png" class="img-fluid">
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </section>



