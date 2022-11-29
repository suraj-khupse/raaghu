import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsColorModule, RdsLabelModule, RdsPriceModule, RdsProductImageModule, RdsRatingModule } from '@libs/rds-elements';
import { RdsCompProductListComponent } from './rds-comp-product-list.component';
import { RdsIconModule } from '@libs/rds-icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

export default {
  title: 'Components/Product List',
  component: RdsCompProductListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsLabelModule, RdsCardModule, RdsBadgeModule,
        RdsColorModule, RdsRatingModule, RdsIconModule,RdsLabelModule,RdsProductImageModule,
        InfiniteScrollModule,RdsPriceModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompProductListComponent> = (args: RdsCompProductListComponent) => ({
  props: {
    ...args
  }
});

export const withInlinePrice = Template.bind({});
withInlinePrice.args = {
  role: 'withInlinePrice',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },]
}

export const simple = Template.bind({})
simple.args = {
  role: 'simple',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}

export const withCTALink = Template.bind({})
withCTALink.args = {
  role: 'withCTALink',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },],
  
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}

export const withColorSwatchesAndHorizontalScrolling = Template.bind({})
withColorSwatchesAndHorizontalScrolling.args = {
  role: 'withColorSwatchesAndHorizontalScrolling',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },],
  itemListColor: [
    { id: 1, color: '#FFFFFF' },
    { id: 2, color: '#FDD2FF' },
    { id: 3, color: '#BFEAFF' },
  ],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}


export const withTallImages = Template.bind({})
withTallImages.args = {
  role: 'withTallImages',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },]
}

export const withImageOverlayAndAddButton = Template.bind({})
withImageOverlayAndAddButton.args = {
  role: 'withImageOverlayAndAddButton',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },]
}

export const withTallImagesAndCTALink = Template.bind({})
withTallImagesAndCTALink.args = {
  role: 'withTallImagesAndCTALink',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },]
}

export const withBorderGrid = Template.bind({})
withBorderGrid.args = {
  role: 'withBorderGrid',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}

export const withSupportingText = Template.bind({})
withSupportingText.args = {
  role: 'withSupportingText',
  productListItems: [{ id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White", "price": "35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", "price": "40", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },]
}

export const cardWithFullDetails = Template.bind({})
cardWithFullDetails.args = {
  role: 'cardWithFullDetails',
  productListItems: [{ id: 1, "icon": "heart", "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  { id: 1, "icon": "heart", "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ],
}
export const ProductImageWithTitle = Template.bind({})
ProductImageWithTitle.args = {
  role: 'ImageWithTitle',
  productListItems: [{ id: 1, "icon": "heart", "title": "Basic Tee", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  {id: 1, "icon": "heart", "title": "Basic Tee 2", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  {id: 1, "icon": "heart", "title": "Basic Tee 3", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  },
  {id: 1, "icon": "heart", "title": "Basic Tee", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false  }],
}

export const productWithInfo= Template.bind({})
productWithInfo.args = {
  role: 'ImageWithInfo',
  productListItems: [{id: 1, "icon": "heart", "title": "Basic Tee", "subTitle": "White", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 2", "subTitle": "White 2", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee 3", "subTitle": "White 2", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false },
  { id: 1, "icon": "heart","title": "Basic Tee", "subTitle": "White",imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU', iconColor: 'dark', fill: false }]
}

export const InfiniteProductList= Template.bind({})
InfiniteProductList.args = {
  role: 'infiniteproductlist',
  productListItems: [{ id: 1, "icon": "heart", "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 2, "icon": "heart", "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 3, "icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 4, "icon": "heart", "title": "School Bag Black", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 5, "icon": "heart", "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 6, "icon": "heart", "title": "Goggles", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 7, "icon": "heart", "title": "School Bag", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 8, "icon": "heart", "title": "Goggles", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 9, "icon": "heart", "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 10,"icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 11,"icon": "heart",  "title": "Lunch Box", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'] , iconColor: 'dark', fill: false },
  { id: 12,"icon": "heart",  "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 13,"icon": "heart",  "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 14,"icon": "heart",  "title": "Pencil Box", "subTitle": "White 2", "price": "45", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg'], iconColor: 'dark', fill: false },
  { id: 15,"icon": "heart",  "title": "Lunch Box", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'] , iconColor: 'dark', fill: false },
  { id: 16,"icon": "heart",  "title": "School Bag", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
  { id: 17,"icon": "heart",  "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'] , iconColor: 'dark', fill: false },
  { id: 18,"icon": "heart",  "title": "Lunch Box", "subTitle": "White 2", "price": "40", "badgeLabel": "", imageUrl: ['https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg'], iconColor: 'dark', fill: false }
],
  itemListRating: [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]
}




// productListItems: [
//   { "title": "Basic Tee", "subTitle": "White", "imageUrl": "https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
//   { "title": "Basic Tee 2", "subTitle": "White 2", "imageUrl": "https://cdn.pixabay.com/photo/2016/01/15/05/57/lunch-box-1141196_960_720.jpg" },
//   { "title": "Basic Tee 3", "subTitle": "White 2", "imageUrl": "https://cdn.pixabay.com/photo/2022/01/22/10/03/coca-cola-6956750_960_720.jpg" },
//   { "title": "Basic Tee", "subTitle": "White","imageUrl": "https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }]
// }









