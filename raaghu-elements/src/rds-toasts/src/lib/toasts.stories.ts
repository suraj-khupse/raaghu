
import { CommonModule } from '@angular/common';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsToastsComponent } from './rds-toasts.component';

export default {
  title: 'Elements/Toast',
  component: RdsToastsComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RdsIconModule, CommonModule
      ],

    })
  ],
  argTypes: {
    colorVariant: {
      options: ['info', 'warning', 'success', 'danger', 'primary', 'secondary', 'light', 'dark'],
      control: { type: 'select' }
    },
    position: {
      options: ['Top-Left', 'Top-Center', 'Top-Right', 'Middle-Left', 'Middle-Center', 'Middle-Right', 'Bottom-Left', 'Bottom-Center', 'Bottom-Right'],
      control: { type: 'select' }
    }
  },
} as Meta;

const Template: Story<RdsToastsComponent> = (args: RdsToastsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['colorVariant', 'headerTitle', 'message', 'show'] } };
Default.args = {
  headerTitle: 'Toast',
  show: true,
  colorVariant: 'light',
  message: 'This is a sample toast'
};
export const toastWithAutohide = Template.bind({});
toastWithAutohide.parameters = { controls: { include: ['colorVariant', 'headerTitle', 'message', 'show', 'autohide'] } };
toastWithAutohide.args = {
  headerTitle: 'Toast',
  show: true,
  colorVariant: 'light',
  message: 'This is a sample toast',
  autohide: true
};

export const toastWithDelay = Template.bind({});
toastWithDelay.parameters = { controls: { include: ['colorVariant', 'headerTitle', 'message', 'show', 'delay', 'autohide'] } };
toastWithDelay.args = {
  headerTitle: 'Toast',
  show: true,
  colorVariant: 'light',
  autohide: true,
  message: 'This is a sample toast',
  delay: 5000
};

export const toastWithPosition = Template.bind({});
toastWithPosition.parameters = { controls: { include: ['colorVariant', 'headerTitle', 'message', 'show', 'position'] } };
toastWithPosition.args = {
  headerTitle: 'Toast',
  show: true,
  colorVariant: 'light',
  message: 'This is a sample toast',
  position: 'Top-Left'
};

export const toastWithoutHeader = Template.bind({});
toastWithoutHeader.parameters = { controls: { include: ['colorVariant', 'headerTitle', 'message', 'show', 'showHeader'] } };
toastWithoutHeader.args = {
  headerTitle: 'Toast',
  show: true,
  colorVariant: 'light',
  showHeader: false,
  message: 'This is a sample toast',
};

// export const Type1 = Template.bind({})
// Type1.args = {
//   data_type: 'type1',
//   show: true,
//   autoHide: false,
//   delay: undefined,
//   headerTitle: 'File uploaded',
//   iconName:'check',
//   iconColorVariant:'success',
//   iconHeight:'14px',
//   iconWidth:'20px',
//   iconFill:false,
//   iconStroke:true,
//   message: 'Your file has been successfully downloaded'
// }


// const Content: Story<RdsToastsComponent> = (args: RdsToastsComponent) => ({
//   props: args,
//   template: `<rds-toasts
//     [withImage]="false"
//     [withHeader]="false"
//     [colorVariant]="colorVariant"
//     [toastMessageColorVariant]="toastMessageColorVariant"
//     headerTitle="Bootstrap"
//     time="11 Seconds ago"
//   >
//   <div class="mt-2 p-2 border-top">
//   <button type="button" class="btn btn-primary btn-sm">Take action</button>&nbsp;
//   <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
//    </div>
//   </rds-toasts>`
// });

// export const withCallToAction = Content.bind({})
// withCallToAction.args = {
//   withHeader: false,
//   headerTitle: 'Bootstrap',
//   time: '11 Seconds ago',
// }


// const Pos: Story<RdsToastsComponent> = (args: RdsToastsComponent) => ({
//   props: args,
//   template: `
//     <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
//     <rds-toasts
//     [withHeader]="false"
//     [colorVariant]="colorVariant"
//     [toastMessageColorVariant]="toastMessageColorVariant"
//     [position]="position"
//     headerTitle="Bootstrap"
//     time="11 Seconds ago"
//     [position]="position"
//   >
//   </rds-toasts>
//   </div>
//   `

// });

// export const Position = Pos.bind({})
// withCallToAction.args = {
//   withHeader: false,
//   colorVariant:'primary',
//   position: 'Top-Left',
//   headerTitle: 'Bootstrap',
//   time: '11 Seconds ago',
// }
