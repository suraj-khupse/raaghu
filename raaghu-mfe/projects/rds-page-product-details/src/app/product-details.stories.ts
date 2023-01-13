import { RdsButtonModule, RdsColorModule, RdsIconModule, RdsLabelModule, RdsPriceModule, RdsRatingModule, RdsSizeModule } from '@libs/rds-elements';
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
      ]
}

