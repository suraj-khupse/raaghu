import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rds-page-infinite-product-list';
  // RdsCompProductList: ComponentLoaderOptions = {
  //   name: 'RdsCompProductList'
  // };

  productListItems= [
    { id: 1, "icon": "heart", "title": "Goggles", "subTitle": "White", "price": "35", "badgeLabel": "", imageUrl: ['https://images.pexels.com/photos/10556653/pexels-photo-10556653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], iconColor: 'dark', fill: false },
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
  ]
  ngOnInit(): void {
    // this.RdsCompProductList = {
    //   name: 'RdsCompProductList',
    //   input: {
       
    // }
    // };
  }
  
}
