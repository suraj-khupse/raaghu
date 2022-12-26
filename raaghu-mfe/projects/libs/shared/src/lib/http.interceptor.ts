import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, switchMap, tap, timeout } from "rxjs/operators";
import { HttpConfigurationService, IAjaxResponse } from "./http-configuration.service";
import { mergeMap as _observableMergeMap } from 'rxjs/operators';
import { AlertService } from "./alert.service";
import { setRoleAlert } from "projects/libs/state-management/src/lib/state/role/role.actions";
import { Store } from "@ngrx/store";
export enum AlertTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
@Injectable({
  providedIn: 'root'
})
export class HttpsRequestResponseInterceptor implements HttpInterceptor {
  // private dialogConfirm: MatDialogRef<ConfirmationComponent, any> | undefined;

  constructor(
    private alertService: AlertService,
    private store: Store,
    private _httpconfigService: HttpConfigurationService,
    //private router: Router
  ) { }

  Strings = {
    "HTTP_REQUEST_HEADER_TIMEOUT": "4000"
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestTimeout: number = Number(req.headers.get(this.Strings.HTTP_REQUEST_HEADER_TIMEOUT));
    req = req.clone({ headers: req.headers.delete(this.Strings.HTTP_REQUEST_HEADER_TIMEOUT) });

    return next.handle(this.performRequest(req))
      .pipe(
        catchError(error => {
          if (!(error instanceof HttpErrorResponse && error.status === 401)) {
            return this.handleErrorResponse(error);
          }
        }),
        switchMap((event: HttpEvent<any>) => {
          return this.handleSuccessResponse(event);
        })
        // timeout(requestTimeout)
        // catchError((err: HttpErrorResponse) => this.handleErrorResponse(err, req))
      );
    // return next.handle(this.performRequest(req))
    // .pipe(tap(req=>{
    //  return this.handleSuccessResponse(req) 
    // }))

  }
  handleErrorResponse(error: any): Observable<any> {
    var self = this;
    if (!(error.error instanceof Blob)) {
      return throwError(error);
    }
    if (error.status !== 200 && error.status !== 204) {
      return self._httpconfigService.blobToText(error.error).pipe(_observableMergeMap((_responseText) => {
        let _error: any = _responseText
        if (_responseText) {
          _error = JSON.parse(_responseText);
          if (_error && _error.error) {
            this.store.dispatch(setRoleAlert({
              message: _error.error.message,
              title: 'SuccFailedess',
              type: AlertTypes.Error,
            }))
            this.alertService.showAlert('Failed', _error.error.message, AlertTypes.Error)
          }
        }
        return throwError(_error);
      }));
    }

    // return this._httpconfigService.blobToText(error.error).pipe(
    //   switchMap((json) => {
    //     // const errorBody = (json == "" || json == "null") ? {} : JSON.parse(json);
    //     // const errorResponse = new HttpResponse({
    //     //   headers: error.headers,
    //     //   status: error.status,
    //     //   body: errorBody
    //     // });

    //     // var ajaxResponse = this.configuration.getAbpAjaxResponseOrNull(errorResponse);

    //     // if (ajaxResponse != null) {
    //     //   this.configuration.handleAbpResponse(errorResponse, ajaxResponse);
    //     // } else {
    //     //   this.configuration.handleNonAbpErrorResponse(errorResponse);
    //     // }

    //     return throwError(error);
    //   })
    // );
  }


  performRequest(req: HttpRequest<any>): HttpRequest<any> {
    const credentials = localStorage.getItem('LoginCredential');
    var tenantInfo = localStorage.getItem('tenantInfo');

    if (credentials || tenantInfo) {
      const parsedCredentials = JSON.parse(credentials);
      const parsedTenantInfo = JSON.parse(tenantInfo);
      if (parsedCredentials && parsedTenantInfo) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${parsedCredentials.token}`,
            'abp.tenantid': `${parsedTenantInfo.id}`
          },
        });
      }
      else if (parsedTenantInfo) {
        req = req.clone({
          setHeaders: {
            'abp.tenantid': `${parsedTenantInfo.id}`
          },
        });
      }
      else if (parsedCredentials) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${parsedCredentials.token}`,
          },
        });
      }
      // if (parsedCredentials) {
      //   req = req.clone({
      //   //   // headers: req.headers.set("Authorization",  `Bearer ${storedBearerToken}`)
      //   //   setHeaders: {
      //   //     Authorization: `Bearer ${parsedCredentials.token}`
      //   //     //abp.tenantid: `${tenantId.id}`,
      //   //     //   observe: "response",
      //   //     //  responseType: "blob",

      //   //   }
      //       req.headers.set("Authorization",  `Bearer ${parsedCredentials.token}`),
      //       req.headers.set("abp.tenantid",  ` ${tenantId.id}`)
      //    });

      // }
    }

    return req;


  }
  protected handleSuccessResponse(event: HttpEvent<any>): Observable<HttpEvent<any>> {
    var self = this;

    if (event instanceof HttpResponse) {
      if (event.body instanceof Blob && event.body.type && event.body.type.indexOf("application/json") >= 0) {
        return self._httpconfigService.blobToText(event.body).pipe(
          map(
            json => {
              const responseBody = json == "null" ? {} : JSON.parse(json);

              var modifiedResponse = self.handleResponse(event.clone({
                body: responseBody
              }));

              return modifiedResponse.clone({
                body: new Blob([JSON.stringify(modifiedResponse.body)], { type: 'application/json' })
              });
            })
        );
      }
    }
    return of(event);
  }

  handleResponse(response: HttpResponse<any>): HttpResponse<any> {
    var ajaxResponse = this.getAbpAjaxResponseOrNull(response);
    if (ajaxResponse == null) {
      return response;
    }

    return this.handleAbpResponse(response, ajaxResponse);
  }
  getAbpAjaxResponseOrNull(response: HttpResponse<any>): IAjaxResponse | null {
    if (!response || !response.headers) {
      return null;
    }

    var contentType = response.headers.get('Content-Type');
    if (!contentType) {

      return null;
    }
    var responseObj = JSON.parse(JSON.stringify(response.body));
    if (!responseObj.__abp) {
      return null;
    }


    return responseObj as IAjaxResponse;
  }
  handleAbpResponse(response: HttpResponse<any>, ajaxResponse: IAjaxResponse): HttpResponse<any> {
    var newResponse: HttpResponse<any>;

    if (ajaxResponse.success) {

      newResponse = response.clone({
        body: ajaxResponse.result
      });


    }

    return newResponse;
  }


}
