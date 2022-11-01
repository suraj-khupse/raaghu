import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthResourceServerErrorHandler } from "angular-oauth2-oidc/public_api";
import { Observable } from "rxjs";
@Injectable()
export class OAuthNoopResourceServerErrorHandler implements OAuthResourceServerErrorHandler {
    
    handleError(err: HttpResponse<any>): Observable<any> {
        return _throw(err);
    }

}

function _throw(err: HttpResponse<any>): Observable<any> {
    throw new Error("Function not implemented.");
}
