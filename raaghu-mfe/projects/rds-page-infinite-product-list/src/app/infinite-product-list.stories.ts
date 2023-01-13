import { FormBuilder} from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsPriceModule,RdsCardModule, RdsColorModule, RdsProductImageModule} from '@libs/rds-elements'
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsRatingModule} from '@libs/rds-rating';
import { RdsIconModule} from '@libs/rds-icon';
import { RdsBadgeModule} from '@libs/rds-badge';
import { RdsButtonModule} from '@libs/rds-button';
import { RdsCompProductListModule } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.module';
import { CommonModule } from '@angular/common';
import { RdsCookieConsentConfig, RdsCookieConsentService, WindowService } from 'projects/libs/rds-cookieconsent/src/public-api';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export default {
  title: 'Pages/Infinite Product List',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent
    ],
      imports: [
        CommonModule,
        RdsButtonModule,
        NgxTranslateModule,
        SharedModule,
        RdsLabelModule,
        RdsRatingModule,
        RdsPriceModule,
        RdsIconModule,
        RdsCardModule,
        InfiniteScrollModule,
        RdsBadgeModule,
        RdsColorModule,
        RdsCompProductListModule,
        RouterModule     
      ],
      providers: [
        FormBuilder,
        RdsCookieConsentService,
        WindowService,
        RdsCookieConsentConfig
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props:{
      ...args
    },
  });

  export const Default= Template.bind({})
Default.args = {
  role: 'infiniteproductlist',
  productListItems: [{ id: 1, "icon": "heart", "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 2, "icon": "heart", "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg', iconColor: 'dark', fill: false },
  { id: 3, "icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg', iconColor: 'dark', fill: false },
  { id: 4, "icon": "heart", "title": "School Bag Black", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 5, "icon": "heart", "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 6, "icon": "heart", "title": "Goggles", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 7, "icon": "heart", "title": "School Bag", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 8, "icon": "heart", "title": "Goggles", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 9, "icon": "heart", "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg', iconColor: 'dark', fill: false },
  { id: 10,"icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg', iconColor: 'dark', fill: false },
  { id: 11,"icon": "heart",  "title": "Lunch Box", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg' , iconColor: 'dark', fill: false },
  { id: 12,"icon": "heart",  "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 13,"icon": "heart",  "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg', iconColor: 'dark', fill: false },
  { id: 14,"icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg', iconColor: 'dark', fill: false },
  { id: 15,"icon": "heart",  "title": "Lunch Box", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg' , iconColor: 'dark', fill: false },
  { id: 16,"icon": "heart",  "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', iconColor: 'dark', fill: false },
  { id: 17,"icon": "heart",  "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , iconColor: 'dark', fill: false },
  { id: 18,"icon": "heart",  "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg', iconColor: 'dark', fill: false }
]
}



   