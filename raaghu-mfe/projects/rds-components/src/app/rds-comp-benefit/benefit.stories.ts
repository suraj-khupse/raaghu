import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBenefitModule, RdsIconModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompBenefitComponent } from './rds-comp-benefit.component';
import { CommonModule } from '@angular/common';
 
export default {
    title: 'Components/Benefit',
    component: RdsCompBenefitComponent,
    decorators: [
        moduleMetadata({
            imports: [
                RdsBenefitModule,
                RdsIconModule,
                CommonModule,
                FormsModule,
                RdsLabelModule
            ],
            
        })
    ]
} as Meta;

const Template: Story<RdsCompBenefitComponent> = (args: RdsCompBenefitComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    itemList: [{
      display_type: "Default",
      colSize: 4,
      items: [
        {
          id: 1,
          icon: 'roles',
          iconHeight: "35px",
          iconWidth: "35px",
          title: "International delivery",
          description: "Get your order in 2 years",
          display_type: "Default",

        },
        {
          id: 1,
          icon: 'currency_dollar_circle',
          iconHeight: "35px",
          iconWidth: "35px",
          title: "Royalty Rewards",
          description: "Dont look at other tees",
          display_type: "Default",
        }
      ]
    }
  ]
};
export const Left_Aligned = Template.bind({});
Left_Aligned.args = {
    itemList: [{
      display_type: "Left Aligned",
      colSize: 4,
      items: [
        { id: 3, 
          display_type: "Left Aligned",
          icon: "../assets/benefit_type1.png",  
          iconHeight :"40px",
          iconWidth: "40px",
          position:"start",
          title: "Free delivery all year long", 
          description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free." 
        },
        { id: 3, 
          display_type: "Left Aligned",
          icon: "../assets/benefit_type2.svg",  
          iconHeight :"40px",
          iconWidth: "40px",
          position:"start",
          title: "24/7 Customer Support", 
          description: "Or so we want you to believe. In reality our chat widget is powered by a naïve series of if/she statements that churn out canned responses. Guaranteed to irritate." 
        },
        { id: 3, 
          display_type: "Left Aligned",
          icon: "../assets/benefit_type3.svg",  
          iconHeight :"40px",
          iconWidth: "40px",
          position:"start",
          title: "Fast Shopping Cart", 
          description: "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know." 
        }
      ]
    }
  ]
};
export const Centre_Aligned = Template.bind({});
Centre_Aligned.args = {
    itemList: [{
      display_type: "Centre Aligned",
      colSize: 4,
      items: [
        { id: 6, 
          display_type: "Centre Aligned", 
          iconHeight :"40px",
          iconWidth: "40px",
          icon: 'truck',
          title: "Free shipping", 
          description: "Free delivery is our main part of company we just price it into the products. Someone's paying for it, and it's not us."
        },
        { id: 6,  
          iconHeight :"40px",
          display_type: "Centre Aligned",
          iconWidth: "40px",
          icon: 'refresh_sync',
          title: "Exchanges", 
          description: "We are take our customer and their needs also, if you don't like it, trade it to one of your friends for something of theirs."
        },
        { id: 6,
          display_type: "Centre Aligned",  
          iconHeight :"40px",
          iconWidth: "40px",
          icon: 'shield_check',
          title: "10-year warranty", 
          description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though. This is the best part of our service."
        }
      ]
    }
  ]
};
export const With_Label = Template.bind({});
With_Label.args = {
    itemList: [{
      display_type: "With Label",
      colSize: 6,
      items: [
        { id: 7, 
          display_type: "With Label", 
          icon: '../assets/benefit_type1.png',
          status:'Active',
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Free delivery all year long',
          description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free."
        },
        { id: 7,  
          icon: '../assets/benefit_type2.svg',
          display_type: "With Label",
          iconHeight :"40px",
          iconWidth: "40px",
          title:  '24/7 Customer Support',
          description: "Or so we want you to believe. In reality our chat widget is powered by a naïve series of if/she statements that churn out canned responses."
        },
        { id: 7,  
          display_type: "With Label",
          icon: '../assets/benefit_type3.svg',
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Fast Shopping Cart',
          description: "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know."
        },
        { id: 7, 
          display_type: "With Label", 
          icon: '../assets/benefit_type4.svg',
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Gift Cards',
          description: "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great."
        }
      ]
    }
  ]
};


export const Heading_With_Icon = Template.bind({});
Heading_With_Icon.args = {
    itemList: [{
      display_type: "Heading With Icon",
      colSize: 4,
      items: [
        { id: 7, 
          display_type: "Heading With Icon", 
          icon: 'truck',
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Free shipping world wide',
          description: "Free delivery is our main part of company"
        },
       
      ]
    }
  ]
};

export const Without_Label = Template.bind({});
Without_Label.args = {
    itemList: [{
      display_type: "Without Label",
      colSize: 4,
      items: [
        { id: 7, 
          display_type: "Without Label", 
          icon: 'truck',
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Free shipping world wide',
        },
        { id: 7,  
          icon: 'refresh_sync',
          display_type: "Without Label",
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Exchanges or returns any time',
         },
        { id: 7,  
          display_type: "Without Label",
          icon: 'shield_check',
          iconHeight :"40px",
          iconWidth: "40px",
          title:  'Warranty 10-year on all product',
           }
      ]
    }
  ]
};
