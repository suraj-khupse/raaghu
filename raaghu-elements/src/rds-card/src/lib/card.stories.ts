import { Story, Meta } from '@storybook/angular';
import { RdsCardComponent } from './rds-card.component';

export default {
  title: 'Elements/Card',
  component: RdsCardComponent,
  argTypes: {    
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'Standard'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card  [header]="header" [body]="body"
   [footer]="footer"  [Data]="Data" [borderCard]="borderCard"
    class="rounded-avatar-basic" [custClass]="custClass" [custSidePadding]="custSidePadding">
   <ng-template #header>
   <div class="text-center">
   <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
    </div>
   </ng-template>
   <ng-template #body>
  <h5 class="custom-title">{{Data.headerTitle}}</h5>
   <p class="custom-desc">{{Data.cardDescription}}</p>
    </ng-template>
   <ng-template #footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-template>
   </rds-card>`
});

// const teletext = "some text"
export const Default = Template.bind({});
Default.args = {
  //width: '30%',
  //cardWidth: 0,
  colorVariant: '',
  borderCard: false,
  //Recommended: false,
  Data: {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"

  }
};

const Avatar: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card  [header]="header" [body]="body" [Data]="Data"
   [footer]="footer" [borderCard]="borderCard" [custClass]="custClass" [custSidePadding]="custSidePadding"
    width="30%"
    class="rounded-avatar-left">
   <ng-template #header>
   <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
   <img src="https://placekitten.com/300/300" alt="" class="profile-image img-avatar-left">
   </ng-template>
   <ng-template #body>
   <h5 class="custom-title">{{Data.headerTitle}}</h5>
    <p class="custom-desc">{{Data.cardDescription}}</p>
     </ng-template>
   <ng-template #footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-template>  
   </rds-card>`
});

// const teletext = "some text"
export const withAvatar = Avatar.bind({});
withAvatar.args = {
  //width: '30%',
  //cardWidth: 0,
  colorVariant: '',
  borderCard: false,
  //Recommended: false,
  Data: {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"

  }
};
const Avatarpos: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card  [header]="header" [body]="body" [Data]="Data"
     [footer]="footer" [custClass]="custClass" [custSidePadding]="custSidePadding"
     [borderCard]="borderCard"
      width="28%"
     >
     <ng-template #header>
     <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
     <img src="https://placekitten.com/300/300" alt="" class="profile-image img-avatar">
     </ng-template>  
     <ng-template #body>
     <h5 class="custom-title">{{Data.headerTitle}}</h5>
      <p class="custom-desc">{{Data.cardDescription}}</p>
       </ng-template>
     <ng-template #footer>
     <a href="#" class="btn btn-primary mt-3">Go somewhere</a>  
     </ng-template>    
     </rds-card>`
});

// const teletext = "some text"
export const withAvatarcenter = Avatarpos.bind({});
withAvatarcenter.args = {
 // width: '30%',
  //cardWidth: 0,
  colorVariant: '',
  borderCard: false,
  //Recommended: false,
  Data: {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"

  }
};
