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

  public getSidebarStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getSideBarStatus(): Observable<any> {
    return this.getSidebarStatus$.asObservable();
  }

  setSideBarStatus(status: boolean) {
    this.getSidebarStatus$.next(status);
  }

  subjects: { [key: string]: Subject<any> } = {};

  // Incorrect password
  public getPasswordStatus$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  getPasswordStatus(): Observable<any> {
    return this.getPasswordStatus$.asObservable();
  }

  setPasswordStatus(status: any) {
    this.getPasswordStatus$.next(status);
  }

  public getLanguage$: BehaviorSubject<any> = new BehaviorSubject(null);

  getLanguageStatus(): Observable<any> {
    return this.getLanguage$.asObservable();
  }

  setLanguageStatus(status: any) {
    this.getLanguage$.next(status);
  }
}
