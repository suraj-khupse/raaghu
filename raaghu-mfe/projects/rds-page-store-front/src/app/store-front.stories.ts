import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';
import { RdsCompBackgroundImageComponent } from 'projects/rds-components/src/app/rds-comp-background-image/rds-comp-background-image.component';
import { RdsCompProductListComponent } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.component';
import { RdsCompBackgroundImageModule } from 'projects/rds-components/src/app/rds-comp-background-image/rds-comp-background-image.module';
import { RdsCompProductListModule } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.module';
import { RdsLabelModule } from '@libs/rds-label';

export default {
    title: 'Pages/Store Front',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                AppComponent
            ],
            imports: [
                RdsCompBackgroundImageModule,
                RdsCompProductListModule,
                RdsLabelModule
            ]
        })
    ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args
});
export const Default = Template.bind({});

Default.args = {
    section2Title:  'Shop by Collection',
    section2Description: 'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.',
    role: 'ImageWithInfo',
    productListItems: [{ "title": "Premium Handcrafted Collection", "subTitle": "Best for your phone, keys, and wallet together, so you can lose everything at once.", imageUrl: '../assets/product_img_with_title.png' },
         { "title": "Trendy Desk Collection", "subTitle": "The rest of the house will still be a mess, but your desk will look good every time.", imageUrl: '../assets/product_img_with_title.png' },
        { "title": "Smart Wardrobe Collection", "subTitle": "Be more productive than enterprise project managers with a single piece of paper.", imageUrl: '../assets/product_img_with_title.png' }
        ],
    // productListItemsTwo : [
    //     {id: 1, "icon": "heart", "title": "Basic Tee 1", "subTitle": "White", imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false },
    //     { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White", imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false },
    //     { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White", imageUrl: '../assets/product_img_with_title.png', iconColor: 'dark', fill: false }
    // ],
    backgroundImage : [
        {
            "imageUrl": 'https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg',
            "title": 'New arrivals are here',
            "subtitle": 'The new arrivals have, well newly arrived. Check out the latest options from our summer small-batch release while they are still in stock.',
            "btnLabel": 'CHECK NEW ARRIVALS HERE',
            "backgroundRepeat": 'no-repeat',
            "backgroundSize": 'cover',  
        },
        {
            "imageUrl": "https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg",
            "title": 'Level up your desk',
            "subtitle": 'Make your desk beautiful and organized. Post a picture to social media and watch it get more like than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.',
            "btnLabel": 'SHOP WORK DESKS NOW',
            "backgroundRepeat": 'no-repeat',
            "backgroundSize"  : 'cover',  
        },
    
    ],

    backgroundImage1 : [
            {
            "imageUrl2": 'https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg',
            "title2": 'Feel like luxury home décor',
            "subtitle2": 'Mark of luxury items is here, live life as the king size with us. Royal finish luxury product bring you to top of the world. Try this once and be a Royal treatment yourself.',
            "btnLabel2": 'SHOP HOME DÉCOR NOW',
            "backgroundRepea2": 'no-repeat',
            "backgroundSize2": 'cover',  
        }
    ]
      
}
