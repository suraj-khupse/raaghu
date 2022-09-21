import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() { }

  public getNavHead$: BehaviorSubject<string> = new BehaviorSubject('');

  getTopNavTitle(): Observable<any> {
    return this.getNavHead$.asObservable();
  }

  setTopNavTitle(title: string) {
    this.getNavHead$.next(title);
  }

  subjects: { [key: string]: Subject<any> } = {};
}
