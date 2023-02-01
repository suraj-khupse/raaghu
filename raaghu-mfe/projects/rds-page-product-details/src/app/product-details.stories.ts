import { RdsButtonModule, RdsColorModule, RdsLabelModule, RdsPriceModule, RdsRatingModule, RdsSizeModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompProductOverviewComponent } from 'projects/rds-components/src/app/rds-comp-product-overview/rds-comp-product-overview.component';

export default {
    title: 'Pages/Product Overview',
    component: RdsCompProductOverviewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompProductOverviewComponent],
            imports: [
                RdsPriceModule,
                RdsRatingModule,
                RdsLabelModule,
                RdsColorModule,
                RdsButtonModule,
                RdsSizeModule,
                RdsIconModule,

            ],
            providers: [

            ],
        })
    ]
} as Meta;
const Template: Story<RdsCompProductOverviewComponent> = (args: RdsCompProductOverviewComponent) => ({
    props: {
        ...args
    }
});
export const Default = Template.bind({});
Default.args={
    itemBenifitList: [
        {
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          },
          {
            name: 'Jems Rock',
            date: new Date(),
            reviewRate: 4,
            reviewTitle: 'Very good and color also nice & fresh look',
            reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
            description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
          }
      ],
      sizeData : [{value: 'XXS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'},{value:'XXS'}],
      itemList: [
        { id: 1, color: '#F88AAC' },
        { id: 2, color: '#6F6F6F' },
        { id: 3, color: '#16BE36' },
      ],
      listItems: [
        { id: 1, value: 'Only the best materials', some: 'value' },
        { id: 2, value: 'Ethically and locally made', some: 'value' },
        { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
        { id: 4, value: 'Machine wash cold with similar colors', some: 'value' },
      ],
      productListItems : [
        { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU']},
        { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "" , imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU']},
        { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "" , imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU']},
        { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured" , imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU'] }
      ],
      itemListOne: [
        "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"       
      ]
}

