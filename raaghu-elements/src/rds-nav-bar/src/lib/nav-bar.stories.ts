import { Story, Meta } from '@storybook/angular';
import { RdsNavBarComponent } from './rds-nav-bar.component';

export default {

  title: 'Elements/Navbar',
  component: RdsNavBarComponent,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<RdsNavBarComponent> = (args: RdsNavBarComponent) => ({

  props: args,
});
export const DefaultNavbar: Story<RdsNavBarComponent> = (args) => ({
  props: args,


});

DefaultNavbar.args = {
  size: 'medium',
  navbarItems: [{
    label: "Home",
    isActive: true,
    navclass: '',
    href: '',
  },
  {
    label: "Features",
    isActive: false,
    navclass: '',
    href: '',
  },
  {
    label: "Pricing",
    isActive: false,
    navclass: '',
    href: '',
  }]
};


// template: `<rds-nav-bar
// navbarId="navbarSupportedContent"
// [navbarheader]="navbarheader"
// [navbarcontent]="navbarcontent"
// [navbarItems]="navbarItems"
// [size]="medium"
// >
// <ng-template #navbarheader>


// </ng-template>
// <ng-template #navbarcontent let-val>
// <li class="nav-item "  >
// <a class="nav-link" [ngClass]="classes" [ngClass]="val.navclass" [href]="val.href">{{val.label}}</a>
// </li>
// </ng-template>
// </rds-nav-bar>
// `