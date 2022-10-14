import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RdsCarouselModule, RdsIconModule, RdsTestimonialModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompTestimonialsComponent } from './rds-comp-testimonials.component';

export default {
  title: 'Components/Testimonials',
  component: RdsCompTestimonialsComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTestimonialsComponent],
      imports: [
        FormsModule,CommonModule,BrowserModule, SharedModule, ReactiveFormsModule,RdsCarouselModule,RdsLabelModule,RdsIconModule, RdsTestimonialModule, RdsCarouselModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]

} as Meta;

const Template: Story<RdsCompTestimonialsComponent> = (args: RdsCompTestimonialsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  displayType: 'basic',
   carousalItem: [
      {
        icon:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
          name: 'Sam Smith',
          roleName: 'Product Manager',
          subTitle:'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat condimentum veilt class patent taciti sociosqu and litara ad litora torquent per conubia nastra.'
      },
      {
        icon:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
        name: 'king John',
        roleName: 'Tech Lead',
        subTitle:'this is the caption section were u can add the caption for the image',
      }
    ],
   
}


export const Advanced = Template.bind({});
Advanced.args = {
  displayType: 'advanced',
  testimonialItems: [
    { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'SAM SMITH',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'quote_right',
   
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:false,
    iconStroke:true},

    { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'King John',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'quote_right',
   
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:false,
    iconStroke:true,
  },

  { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
  title:'King John',
  subtitle: 'PRODUCT MANAGER', 
  description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
  icon: 'quote_right',
 
  iconHeight:'18px',
  iconWidth:'18px',
  iconFill:false,
  iconStroke:true,
},
  { img:'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    title:'King John',
    subtitle: 'PRODUCT MANAGER', 
    description: 'Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat', 
    icon: 'quote_right',
   
    iconHeight:'18px',
    iconWidth:'18px',
    iconFill:false,
    iconStroke:true,
  },
  ]
  
}


  
