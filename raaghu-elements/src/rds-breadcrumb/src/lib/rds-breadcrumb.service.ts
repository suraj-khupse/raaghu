import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface BreadcrumbsItems {
  name: string;
  route: string;
  icon: string;
  iconFill?: boolean,
  iconStroke?: boolean,
  iconHeight: string;
  iconWidth: string;
  disabled : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RdsBreadcrumbService {

  constructor() { }

  private subject = new Subject<any>();

  sendItems(breadcrumbs: BreadcrumbsItems[]) {
    this.subject.next(breadcrumbs);
  }

  getItem(): Observable<any> {
    return this.subject.asObservable();
  }

}
