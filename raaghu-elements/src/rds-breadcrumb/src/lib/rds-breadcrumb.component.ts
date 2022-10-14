import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { RdsBreadcrumbService, BreadcrumbsItems } from './rds-breadcrumb.service';

@Component({
  selector: 'rds-breadcrumb',
  templateUrl: './rds-breadcrumb.component.html',
  styleUrls: ['./rds-breadcrumb.component.scss']
})
export class RdsBreadcrumbComponent implements OnInit {

  title = 'rds-breadcrumb';

  @Input() breadcrumbsItems: BreadcrumbsItems[] = [{ name: 'Home', route: '/home', icon: 'home', iconWidth: '15px', iconHeight: '15px', disabled: true },
  { name: 'About', route: '/About', icon: 'information', iconWidth: '15px', iconHeight: '15px', disabled: false },
  { name: 'Contact US', route: '/Contact', icon: 'phone', iconWidth: '15px', iconHeight: '15px', disabled: true },
  ];
  @Input() activePage: number = 0;
  @Input() role: 'basic' |  'withDivider' = 'basic';
  @Output() onItemClick = new EventEmitter<any>();



  onClick(item: any, i: number): void {
    this.activePage = i;
    this.onItemClick.emit(item);
  }


  constructor(private breadcrumbsService: RdsBreadcrumbService) { }

  ngOnInit(): void {
    // this.subscription = this.breadcrumbsService.getItem().subscribe(items => {
    //   if (items) {
    //     this.customBreadcrumbsItems = item
    //   } else {
    //     this.customBreadcrumbsItems = [];
    //   }
    // });
    // this.breadcrumbsService.sendItems(this.customBreadcrumbsItems);


  }


 

}

