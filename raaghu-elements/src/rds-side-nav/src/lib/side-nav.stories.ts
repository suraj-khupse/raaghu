import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSideNavComponent } from './rds-side-nav.component';
import { RdsToggleModule } from '@libs/rds-toggle';

export default {
  title: 'Elements/Side Navigation',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule, RdsToggleModule],
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
Default.parameters = { controls: { include: ['sidenavItems', 'collapseRequired','emitPath','collapsedState','selectedMode'] } };
Default.args = {
  sidenavItems: [
    { label: 'Dashboard', id: '1', parent: null, icon: 'home', path: 'home' },
    { label: 'Tenant', id: '2', icon: 'tenant', path: 'tenant', parent: null },
    { label: 'Administration', id: '3',parent:null, icon: 'administration', path: 'administration', children: [{ label: 'Role', icon: 'roles', path: 'role',id:'3.1',parent:'3' }, { label: 'Users', icon: 'users', path: 'users',id:'3.2',parent:'3'  }] },
    { label: 'UI Components', id: '4', parent: null, icon: 'demo_ui', path: 'demo_ui' },
  ],
  collapseRequired: true,
};
