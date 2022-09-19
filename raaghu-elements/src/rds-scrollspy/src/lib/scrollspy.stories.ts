import { CommonModule } from "@angular/common";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular";
import { ScrollspyItemComponent } from "./scrollspy-item/scrollspy-item.component";
import { RdsScrollspyComponent } from "./rds-scrollspy.component";

export default {
    title: 'Elements/Scrollspy',
    component: RdsScrollspyComponent,
    decorators: [
        moduleMetadata({
          declarations: [RdsScrollspyComponent, ScrollspyItemComponent],
          imports: [CommonModule],
        }),
      ],
    argTypes: {

    },
} as Meta

const Template: Story<RdsScrollspyComponent> = (args: RdsScrollspyComponent) => ({
    props: args,
    template: `<rds-scrollspy></rds-scrollspy>`,
});

export const Default: Story<RdsScrollspyComponent> = (args) =>  ({
props: { ...args },
template: `
<div class="col-md-10 col-10 offset-1">
<div id="scrollspy">
<nav class="navbar navbar-light px-3">
      <ul class="nav nav-pills">
       <li class="nav-item">
         <a class="nav-link text-uppercase" target="_self" href="#scrollspyHeading1">First</a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-uppercase" target="_self" href="#scrollspyHeading2">Second</a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-uppercase" target="_self" href="#scrollspyHeading3">Third</a>
       </li>
     </ul>
   </nav>

</div>
  <rds-scrollspy scrollId = "scrollspy">
  <scrollspy-item scrollItemId="scrollspyHeading1" header = "First header">
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
  <div class="d-flex justify-content-end">
  <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
  </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading2" header = "Second header">
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
  <div class="d-flex justify-content-end">
  <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
  </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading3" header = "Third header">
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
  <div class="d-flex justify-content-end">
  <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
  </div>
  </scrollspy-item>
  </rds-scrollspy>
  </div>`,
});
