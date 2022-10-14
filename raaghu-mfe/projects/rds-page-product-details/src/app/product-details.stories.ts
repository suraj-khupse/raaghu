// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Meta, moduleMetadata, Story } from '@storybook/angular';
// import { RdsBreadcrumbModule, RdsIconModule, RdsLabelModule } from '@libs/rds-elements';
// import { AppComponent } from './app.component';
// import { RdsImageModule } from 'projects/libs/rds-elements/src/rds-image/src/public-api';
// import { CommonModule } from '@angular/common';
// import { RdsProductImageModule } from 'projects/libs/rds-elements/src/rds-product-image/src/public-api';
// import { RdsCompProductListComponent } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.component';



// export default {
//     title: 'Pages/Product Details',
//     component: RdsCompProductListComponent,
//     decorators: [
//         moduleMetadata({
//             declarations: [RdsCompProductListComponent],
//             imports: [
//                 RdsBreadcrumbModule,
//                 RdsImageModule,
//                 CommonModule,
//                 FormsModule, ReactiveFormsModule, RdsLabelModule, RdsIconModule, RdsProductImageModule
//             ],
//             providers: [
//                 FormBuilder,

//             ],
//         })
//     ]
// } as Meta;
// const Template: Story<RdsCompProductListComponent> = (args: RdsCompProductListComponent) => ({
//     props: {
//         ...args
//     }
// });
// export const productDetails = Template.bind({});
// productDetails.args = {
//     role: 'withDivider',
//     iconShow: true,
//     disabled: false,
//     customBreadcrumbsItems: [{ name: '', route: '/home', iconClass: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: true },
//     { name: 'Clothing', route: '/About', iconClass: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: false },
//     { name: 'Basic Tees', route: '/Contact', iconClass: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: true }],

//     productListItems : [{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
//     {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
//     {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
//     {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},]
// }

// // export const productDetails1 = Template.bind({});
// // productDetails1.args = {
// //     role: 'withDivider',
// //     iconShow: true,
// //     disabled: false,
// //     productListItems : [{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
// //   {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
// //   {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
// //   {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},]
// // }

