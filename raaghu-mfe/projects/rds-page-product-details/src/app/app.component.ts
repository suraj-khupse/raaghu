import { Component, Injector, OnInit } from '@angular/core';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { BreadcrumbsItems } from 'projects/libs/rds-elements/src/rds-breadcrumb/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  rdsbenefitMfeConfig: ComponentLoaderOptions;

  constructor(private injector: Injector) {
    super(injector);
  }

  title = 'product-details';
  public rdsprodlistMfeConfig: ComponentLoaderOptions;
  public RdsCompProductOverview: ComponentLoaderOptions;
  public RdsCompReviewCategory: ComponentLoaderOptions;
  breadCrumbItems: BreadcrumbsItems[] = [{ name: 'Woman', route: '/home', icon: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: true },
  { name: 'Clothing', route: '/About', icon: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: false },
  { name: 'Basic Tees', route: '/Contact', icon: 'dashboard', iconWidth: '15px', iconHeight: '15px', disabled: true }];


  itemList = [
    "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    // "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
    // "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_765x.jpg?v=1639994439",
    // "https://cdn.shopify.com/s/files/1/0752/6435/products/2_1418d8b1-f625-4531-b858-bf6e2ba4b2f3_1_160x.jpg?v=1639994439",
    // "https://cdn.shopify.com/s/files/1/0752/6435/products/1_dac179d7-7d1c-438c-a053-e85703a08be1_160x.jpg?v=1639546727",
    // "https://cdn.shopify.com/s/files/1/0752/6435/products/7_560d64a9-7d29-4ea4-93ed-7b6d29bd6339_1_160x.jpg?v=1639994439"
  ]

  // productListItems = [{"title": "Basic Tee", "subTitle": "White","price": "$35", "badgeLabel": "Quality Assured"},
  // {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  // {"title": "Basic Tee 2", "subTitle": "White 2","price": "$40", "badgeLabel": ""},
  // {"title": "Basic Tee 3", "subTitle": "White 2","price": "$45", "badgeLabel": "Quality Assured"},]

  productListItems = [
    { "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU'},
    { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "" , imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU'},
    { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "" , imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU'},
    { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured" , imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' }
  ]




  ngOnInit(): void {

    this.rdsbenefitMfeConfig = {
      name: 'RdsCompBenefit',
      input: {
        itemList: [{
          display_type: "benefit_type3",
          colSize: 4,
          items: [
            { id: 6, 
              display_type: "benefit_type3", 
              iconHeight :"40px",
              iconWidth: "40px",
              icon: 'users',
              title: "100% Safe & Secure", 
              description: "on every order"
            },
            { id: 6,  
              iconHeight :"40px",
              display_type: "benefit_type3",
              iconWidth: "40px",
              icon: 'users',
              title: "Best Price & Offers", 
              description: "on top products"
            },
            { id: 6,
              display_type: "benefit_type3",  
              iconHeight :"40px",
              iconWidth: "40px",
              icon: 'users',
              title: "Latest Style", 
              description: "from top brands"
            }
          ]
        }
      ]
      }
    };


    this.rdsprodlistMfeConfig = {
      name: 'RdsCompProductList',
      input: {
        // productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured" },
        // { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "" },
        // { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "" },
        // { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured" },]
        productListItems: [{ "title": "Basic Tee", "subTitle": "White", "price": "$35", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
        { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
        { "title": "Basic Tee 2", "subTitle": "White 2", "price": "$40", "badgeLabel": "", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },
        { "title": "Basic Tee 3", "subTitle": "White 2", "price": "$45", "badgeLabel": "Quality Assured", imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU' },]
      },
      output: {
      }
    }

    this.RdsCompProductOverview = {
      name: 'RdsCompProductOverview',
      input: {
        productType: 'producroverview2',
      //   itemListbenefit: [{
      //     display_type: "Basic",
      //     colSize: 6,
      //     items: [
      //       {
      //         id: 1,
      //         icon: 'roles',
      //         iconHeight: "25px",
      //         iconWidth: "25px",
      //         title: "International delivery",
      //         description: "Get your order in 2 month",
      //         display_type: "Basic",
      
      //       },
      //       {
      //         id: 1,
      //         icon: 'roles',
      //         iconHeight: "25px",
      //         iconWidth: "25px",
      //         title: "Loyalty rewards",
      //         description: "Don't look at other tees",
      //         display_type: "Basic",
      //       }
      //     ],
      //     itemList: [
      //       { id: 1, color: '#F88AAC' },
      //       { id: 2, color: '#6F6F6F' },
      //       { id: 3, color: '#16BE36' },
      //     ],
      //     listItems: [
      //       { id: 1, value: 'Only the best materials', some: 'value' },
      //       { id: 2, value: 'Ethically and locally made', some: 'value' },
      //       { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
      //       { id: 4, value: 'Machine wash cold with similar colors', some: 'value' },
      //     ]
      //   }
      // ]

      listItems: [
        { id: 1, value: 'Only the best materials', some: 'value' },
        { id: 2, value: 'Ethically and locally made', some: 'value' },
        { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
        { id: 4, value: 'Machine wash cold with similar colors', some: 'value' },
      ],
      itemList: [
        { id: 1, color: '#F88AAC' },
        { id: 2, color: '#6F6F6F' },
        { id: 3, color: '#16BE36' },
      ],
      sizeData : [{value: 'XXS'},{value:'S'},{value:'M'},{value:'L'},{value:'XL'},{value:'2XL'},{value:'3XL'},{value:'XXS'}],
      itemListbenefit: [{
        display_type: "Basic",
        colSize: 6,
        items: [
          {
            id: 1,
            icon: 'roles',
            iconHeight: "25px",
            iconWidth: "25px",
            title: "International delivery",
            description: "Get your order in 2 month",
            display_type: "Basic",
    
          },
          {
            id: 1,
            icon: 'roles',
            iconHeight: "25px",
            iconWidth: "25px",
            title: "Loyalty rewards",
            description: "Don't look at other tees",
            display_type: "Basic",
          }
        ]
      }
    ]
      }
      
    };

    this.RdsCompReviewCategory = {
      name: 'RdsCompReviewCategory',
      input: {
        display_type: "ReviewType_2",
        itemList: [{
          display_type: "ReviewType_2",
          items: [
            {
                name: 'Jems Rock',
                date: new Date(),
                reviewRate: 4,
                reviewTitle: 'Very good and color also nice & fresh look',
                reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
                description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
              },
              {
                name: 'Jems Rock',
                date: new Date(),
                reviewRate: 4,
                reviewTitle: 'Very good and color also nice & fresh look',
                reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
                description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
              },
              {
                name: 'Jems Rock',
                date: new Date(),
                reviewRate: 4,
                reviewTitle: 'Very good and color also nice & fresh look',
                reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
                description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
              }
          ]
        }
      ]
      }
    };



  }

}