import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsDatepickerComponent } from './rds-datepicker.component';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Elements/Datepicker',
  component: RdsDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [BsDatepickerModule.forRoot(), BrowserAnimationsModule, FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template1: Story<RdsDatepickerComponent> = (args: RdsDatepickerComponent) => ({
  props: args,
});
export const advanced = Template1.bind({});
advanced.args = {
  label: 'Date Range',
  datePickerType: 'advanced'
}

const Template: Story<RdsDatepickerComponent> = (args: RdsDatepickerComponent) => ({
  props: args,
  template: `<div class="row"><div class="col-md-3"><rds-datepicker [datePickerType]="datePickerType"
 > 
    </rds-datepicker></div></div>`,
});
export const Default = Template.bind({});

Default.args = {
  datePickerType: 'basic',
  datePickerConfig: { dateInputFormat: 'MM/DD/YYYY', showWeekNumbers: false, isAnimated: true },
  placeholder: 'Date',
  datesDisabled: [new Date()],
  dateTooltipTexts: [{ date: new Date(), tooltipText: 'todays Date' }],
  daysDisabled: [3],
  maxDate: new Date(new Date().setDate(27)),
  placement: 'bottom'
}

