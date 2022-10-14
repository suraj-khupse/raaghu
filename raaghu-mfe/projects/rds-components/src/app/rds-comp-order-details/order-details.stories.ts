import { RdsCompOrderDetailsComponent } from './rds-comp-order-details.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAddressDetailModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsProgressbarComponent, RdsProgressbarModule} from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';
import { CommonModule } from '@angular/common';
import { RdsIconComponent, RdsIconModule } from '@libs/rds-icon';


export default {
  title: 'Components/Order-details',
  component: RdsCompOrderDetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
        RdsAddressDetailModule,
        RdsLabelModule,
        CommonModule,
        RdsProgressbarModule,   
        RdsIconModule,     
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
    displaytype: {
      options: ['with-progress-bars', 'With large images and progress bars', 'With large images and progress bars - 1'],
      control: { type: 'select' }
    }
  }
} as Meta;

const Template: Story<RdsCompOrderDetailsComponent> = (args: RdsCompOrderDetailsComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  displaytype: 'with-progress-bars',
  itemList: [
    {
      profilePic: 'https://th.bing.com/th/id/OIP.khH-pSAYsgQuFLbIrpFs6gHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.3',
      prodname: 'Premium Quality Soft T-Shirt',
      price: 20,
      highlights: 'White tees stain easily, and black tees fade. this is going to be gray for a while',
      update: 'Shopping Update',
      tno: 'Tracking number',
      trackingNumber: '655634573859574857',
      emailId: 'g******@gmail.com',
      phoneNo: '8*******53',
      qty: 50,
      orderTotal: 0,
      shipDetails: 'Preparing to ship on June 05,2022',
      orderStage:"shipped",
      label: 'Order#36690',
       address: [
        { header: "Shopping Address", addressLine1: "Brookland house,", addressLine2: "5439,Rose Mills Road,", addressLine3: "Santa Clara, CA95054" }
      ]

    },]
}

export const advanced = Template.bind({});
advanced.args = {
  displaytype: 'With large images and progress bars',
  itemList: [
    {
      profilePic: 'https://th.bing.com/th/id/OIP.khH-pSAYsgQuFLbIrpFs6gHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.3',
      prodname: 'Premium Quality Soft T-Shirt',
      price: 20,
      highlights: 'White tees stain easily, and black tees fade. this is going to be gray for a while',
      update: 'Shopping Update',
      tno: 'Tracking number',
      trackingNumber: '655634573859574857',
      emailId: 'g******@gmail.com',
      phoneNo: '8*******53',
      qty: 50,
      orderTotal: 0,
      shipDetails: 'Preparing to ship on June 05,2022',
      orderStage:"shipped",
      label: 'Order#36690',
       address: [
        { header: "Shopping Address", addressLine1: "Brookland house,", addressLine2: "5439,Rose Mills Road,", addressLine3: "Santa Clara, CA95054" }
      ]

    },]
}


export const multiple_items = Template.bind({});
multiple_items.args = {
  displaytype: 'With large images and progress bars - 1',
  itemList: [
    {
      profilePic: 'https://th.bing.com/th/id/OIP.khH-pSAYsgQuFLbIrpFs6gHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.3',
      prodname: 'Premium Quality Soft T-Shirt',
      price: 20,
      highlights: 'White tees stain easily, and black tees fade. this is going to be gray for a while',
      update: 'Shopping Update',
      tno: 'Tracking number',
      trackingNumber: '655634573859574857',
      emailId: 'g******@gmail.com',
      phoneNo: '8*******53',
      qty: 50,
      orderTotal: 0,
      shipDetails: 'Preparing to ship on June 05,2022',
      orderStage:"shipped",
      label: 'Order#36690',
       address: [
        { header: "Shopping Address", addressLine1: "Brookland house,", addressLine2: "5439,Rose Mills Road,", addressLine3: "Santa Clara, CA95054" }
      ]

    },]

}


