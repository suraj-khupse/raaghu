import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule, RdsColorModule, RdsLabelModule, RdsRatingModule } from '@libs/rds-elements';
import { RdsCompProductListComponent } from './rds-comp-product-list.component';
import { RdsIconModule } from '@libs/rds-icon';

export default {
  title: 'Components/Product List',
  component: RdsCompProductListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsLabelModule, RdsCardModule, RdsBadgeModule,
        RdsColorModule, RdsRatingModule, RdsIconModule,RdsLabelModule
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
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
}

export const simple = Template.bind({})
simple.args = {
  role: 'simple',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },],
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
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
}

export const withColorSwatchesAndHorizontalScrolling = Template.bind({})
withColorSwatchesAndHorizontalScrolling.args = {
  role: 'withColorSwatchesAndHorizontalScrolling',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },],
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
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
}

export const withImageOverlayAndAddButton = Template.bind({})
withImageOverlayAndAddButton.args = {
  role: 'withImageOverlayAndAddButton',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
}

export const withTallImagesAndCTALink = Template.bind({})
withTallImagesAndCTALink.args = {
  role: 'withTallImagesAndCTALink',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
}

export const withBorderGrid = Template.bind({})
withBorderGrid.args = {
  role: 'withBorderGrid',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },],
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
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
}

export const cardWithFullDetails = Template.bind({})
cardWithFullDetails.args = {
  role: 'cardWithFullDetails',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },],
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
  productListItems: [{ "title": "Basic Tee", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' }],
}

export const productWithInfo= Template.bind({})
productWithInfo.args = {
  role: 'ImageWithInfo',
  productListItems: [{ "title": "Basic Tee", "subTitle": "White", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 2", "subTitle": "White 2", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee 3", "subTitle": "White 2", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
  { "title": "Basic Tee", "subTitle": "White",imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' }]
}








