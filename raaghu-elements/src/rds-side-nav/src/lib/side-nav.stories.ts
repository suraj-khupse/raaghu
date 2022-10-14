import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSideNavComponent } from './rds-side-nav.component';

export default {
  title: 'Elements/Side Navigation',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule],
    }),
  ],
  component: RdsSideNavComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<RdsSideNavComponent> = (args: RdsSideNavComponent) => ({
  props: args,
  template: `<div class="row"><div class="col-lg-3"><rds-side-nav
    [sidenavItems]="sidenavItems" [collapseRequired]="collapseRequired" >
  </rds-side-nav></div></div>`,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['sidenavItems', 'collapseRequired'] } };
Default.args = {
  sidenavItems: [
    { label: 'Dashboard', id: '', icon: 'home', path: 'home' },
    { label: 'Tenant', id: '', icon: 'tenant', path: 'tenant' },
    { label: 'Administration', id: 'administration', icon: 'administration', path: 'administration', children: [{ label: 'Role', icon: 'roles', path: 'role' }, { label: 'Users', icon: 'users', path: 'users' }] },
    { label: 'UI Components', id: '', icon: 'demo_ui', path: 'demo_ui' },
  ],
  collapseRequired: true,
};
