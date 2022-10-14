import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rds-comp-product-list',
  templateUrl: './rds-comp-product-list.component.html',
  styleUrls: ['./rds-comp-product-list.component.scss']
})
export class RdsCompProductListComponent implements OnInit {

  constructor() { }

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() role: 'withInlinePrice' | 'simple'|'imageWithInfo' = 'withInlinePrice';

  ngOnInit() {
  }

  @Input() productListItems: any[] = []

  @Input()  itemListColor: []

  @Input() itemListRating: any = [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
  ]
 
}
