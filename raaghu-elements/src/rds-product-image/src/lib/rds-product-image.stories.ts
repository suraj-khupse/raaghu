import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsProductImageComponent } from './rds-product-image.component';



export default {
  title: 'Elements/Product Image',
  component: RdsProductImageComponent,
  decorators: [
    
  ],
  
  
} as Meta

const Template: Story<RdsProductImageComponent> = (args: RdsProductImageComponent) => ({
  props: args,
});

export const Default = Template.bind({})
Default.args ={
  display_type: 'Basic',
  itemList:[
      "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png"
  ]
    
}


export const Product_overview1 = Template.bind({})
Product_overview1.args ={
  display_type: 'Product_overview1',
  itemList:[
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
    "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  ]
}

export const Product_overview2 = Template.bind({})
Product_overview2.args ={
  display_type: 'Product_overview2',
  itemList:[
    "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
    "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
    "https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439"
  ]
}

export const Product_overview3 = Template.bind({})
Product_overview3.args ={
  display_type: 'Product_overview3',
  itemList:[
    "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
  "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
  "https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439",
  "https://cdn.shopify.com/s/files/1/0752/6435/products/1_dac179d7-7d1c-438c-a053-e85703a08be1_160x.jpg?v=1639546727",
  "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_160x.jpg?v=1639994439"
  ]
}