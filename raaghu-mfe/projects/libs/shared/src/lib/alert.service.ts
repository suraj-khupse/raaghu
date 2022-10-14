import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface AlertEvent {
  type: any;
  title: string;
  message: string;
}
export enum AlertTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertEvents: Observable<AlertEvent>;
  private _alertEvents = new Subject<AlertEvent>();

  constructor() {
    this.alertEvents = this._alertEvents.asObservable();
  }

  /**
   * Show success toast notification.
   * @param title Toast title
   * @param message Toast message
   * @param type Toast type
   */
  showAlert(title: string, message: string, type: string) {
    this._alertEvents.next({
      message,
      title,
      type
    });
  }
}
