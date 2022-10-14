import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompCardDetailListComponent } from './rds-comp-card-detail-list.component';
import { RdsCardDetailModule } from 'projects/libs/rds-elements/src/rds-card-detail/src/public-api';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsRadioButtonModule } from '@libs/rds-elements';

export default {
  title: 'Components/Card Details List',
  component: RdsCompCardDetailListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RdsCardDetailModule,
        RdsIconModule,
        RdsRadioButtonModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompCardDetailListComponent> = (args: RdsCompCardDetailListComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
    listItems:[{cardID:'1011',cardName:'MasterCard',cardExpiry:'06/2027',cardLogo:'editions',cardNumber:1111, isDefault:false,radioItems: [{id: 1011, checked: false, name: "Radio-Button"}]}
    ,{cardID:'1012',cardName:'Visa',cardExpiry:'11/2032',cardLogo:'tenant',cardNumber:3256, isDefault:false, radioItems: [{id: 1011, checked: false, name: "Radio-Button"}]}
    ,{cardID:'1013',cardName:'DEbit',cardExpiry:'04/2023',cardLogo:'plus',cardNumber:8001, isDefault:true, radioItems: [{id: 1011, checked: true, name: "Radio-Button"}]}
    ,{cardID:'1014',cardName:'Discover',cardExpiry:'08/2027',cardLogo:'roles',cardNumber:3412, isDefault:false, radioItems: [{id: 1011, checked: false, name: "Radio-Button"}]}
],
IsEditAndDefaultFunctionalityRequired:false,
IsSelectionRequired:false
  
}
