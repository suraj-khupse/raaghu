import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsPaginationComponent } from './rds-pagination.component';
import { RdsIconModule } from '@libs/rds-icon';

export default {
      title: 'Elements/Pagination',
      component: RdsPaginationComponent,
      decorators: [
            moduleMetadata({
                  imports: [RdsIconModule]
            }),
      ],
      argTypes: {

      },
} as Meta;
const Template: Story<RdsPaginationComponent> = (args: RdsPaginationComponent) => ({
      props: args,
});

export const Default = Template.bind({});
Default.args = {
      totalRecords: 10,
      recordsPerPage: 1,
      // role: 'Basic',
};
export const advanced = Template.bind({});
advanced.args = {
      totalRecords: 101,
      recordsPerPage: 5,
      role: 'Advanced',
};
