import { Component, Injector, OnInit } from '@angular/core';
// import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'store-front';
  section2Title: string = 'Shop by Collection';
  section2Description: string = 'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.'
  productListItems = []
  productListItemsTwo: []
  backgroundImage: any = []
  backgroundImage1: any = []


  ngOnInit(): void {
  }

}
