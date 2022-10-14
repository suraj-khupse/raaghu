import { Component, Injector, OnInit } from '@angular/core';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  title = 'store-front';

  section2Title: string = 'Shop by Collection';
  section2Description: string = 'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.'
  public rdsCompBackgroundImageMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompBackgroundImage',
    input: {
      imageUrl: '../assets/storefront.png',
      title: 'New arrivals are here',
      subtitle: 'The new arrivals have, well newly arrived. Check out the latest options from our summer small-batch release while they are still in stock.',
      btnLabel: 'CHECK NEW ARRIVALS HERE',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  };
  public rdsCompBackgroundImageMfeConfig1: ComponentLoaderOptions = {
    name: 'RdsCompBackgroundImage',
    input: {
      imageUrl: '../assets/storefront1.png',
      title: 'Level up your desk',
      subtitle: 'Make your desk beautiful and organized. Post a picture to social media and watch it get more like than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.',
      btnLabel: 'SHOP WORK DESKS NOW',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  };
  public rdsCompBackgroundImageMfeConfig2: ComponentLoaderOptions = {
    name: 'RdsCompBackgroundImage',
    input: {
      imageUrl: '../assets/storefront2.png',
      title: 'Feel like luxury home décor',
      subtitle: 'Mark of luxury items is here, live life as the king size with us. Royal finish luxury product bring you to top of the world. Try this once and be a Royal treatment yourself.',
      btnLabel: 'SHOP HOME DÉCOR NOW',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  };
  public rdsCompProductListMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompProductList',
    input: {
      role: 'ImageWithInfo',
      productListItems: [{ "title": "Premium Handcrafted Collection", "subTitle": "Best for your phone, keys, and wallet together, so you can lose everything at once.", imageUrl: '../assets/collection1.png' },
      { "title": "Trendy Desk Collection", "subTitle": "The rest of the house will still be a mess, but your desk will look good every time.", imageUrl: '../assets/collection2.png' },
      { "title": "Smart Wardrobe Collection", "subTitle": "Be more productive than enterprise project managers with a single piece of paper.", imageUrl: '../assets/collection3.png' }]
    }
  }
  public rdsCompProductListMfeConfig1: ComponentLoaderOptions = {
    name: 'RdsCompProductList',
    input: {
      role: 'ImageWithTitle',
      productListItems: [{ "title": "New Arrivals", imageUrl: '../assets/Image 183.png' },
      { "title": "New Sale", imageUrl: '../assets/Image 188.png' },
      { "title": "Accessories", imageUrl: '../assets/Image 186.png' },
      { "title": "School Items", imageUrl: '../assets/Image 187.png' }]
    }
  }
  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
