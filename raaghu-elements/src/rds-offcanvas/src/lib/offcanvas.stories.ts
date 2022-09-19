import { Story, Meta } from '@storybook/angular';
import { RdsOffcanvasComponent } from './rds-offcanvas.component';

export default {
  title: 'Elements/Offcanvas',
  component: RdsOffcanvasComponent,
  argTypes: {
    onShow: { click: "clicked" },
    onClose: { click: "clicked" },
  },
} as Meta;
const Template: Story<RdsOffcanvasComponent> = (args: RdsOffcanvasComponent) => ({
  props: args,
});
export const Default: Story<RdsOffcanvasComponent> = (args) => ({
  props: args,
  template:
    `
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#canvasExample"
  aria-controls="canvasExample" (click)="onShow.emit($event)">
   Button
  </button>
  <rds-offcanvas
  [colorVariant]=[colorVariant]
  [placement]=[placement]
  >
  </rds-offcanvas>
    `,

});
Default.args = {
  offId:'canvasExample',
  canvasTitle:'Offcanvas Title',
  placement:'end',
  colorVariant:'light'

};

// export const basic = Template.bind({});
// basic.args = {
//   // offId:'canvas1',
//   backDrop: true,
//   scrolling: true,
//   buttonTitle: 'Button'
// }
