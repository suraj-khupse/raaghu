import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompFaqComponent } from 'projects/rds-components/src/app/rds-comp-faq/rds-comp-faq.component';
import { RdsCompFaqModule } from 'projects/rds-components/src/app/rds-comp-faq/rds-comp-faq.module';
import { AppComponent } from './app.component';

export default {
    title: 'Pages/FAQ',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                RdsCompFaqModule
            ],
            providers: [
                
            ],
        })
    ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: {
        ...args
    }
});
export const Default = Template.bind({});

Default.args={
    questionList: [
        {
          question: "What's the best thing about Switzerland?",
          description: "The flag has a with plus on it and red for the background here is an explanation about it-The flag of Switzerland displays a white cross in the centre of a square red field."
        },
        {
          question: "Where is the Niagara waterfall?",
          description: "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the New York."
        },
        {
          question: "Which is the best part of Himalayas?",
          description: "The snow-capped mountains set against the backdrop of wide-open skies, Nubra Valley, is among the most beautiful Himalaya places to visit."
        },
        
        {
          question: "Why Elephant size is too big?",
          description: "Being so large puts elephants at a survival advantage. Their size has helped them defend themselves, store fats and water better, digest more efficiently and develop a larger brain."
        },
        {
          question: "Where is the Niagara waterfall?",
          description: "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the New York."
        },       
      ],
    
}


