import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsPriceModule,RdsCardModule, RdsColorModule, RdsProductImageModule} from '@libs/rds-elements'

import { NgxTranslateModule, SharedModule } from '@libs/shared';


import { RdsCompProductListComponent } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent as infiniteproduct } from './app.component';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsRatingModule} from '@libs/rds-rating';
import { RdsIconModule} from '@libs/rds-icon';
import { RdsBadgeModule} from '@libs/rds-badge';
import { RdsButtonModule} from '@libs/rds-button';







export default {
  title: 'Pages/Infinite Product List',
  component: RdsCompProductListComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompProductListComponent,
        RdsProductImageModule      
    ],
      imports: [
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
        RdsColorModule
        
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompProductListComponent> = (args: RdsCompProductListComponent) => ({
    props:{
      ...args
    },
  template:`
  <h4>
  <rds-label [label]="'Trending Products'" [multiline]="false" [bold]="true" [italic]="false"></rds-label>
</h4>

<div class="mt-5">
<rds-comp-product-list [productListItems]="productListItems" [role]="'infiniteproductlist'"></rds-comp-product-list>
</div>


  
  `
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



   