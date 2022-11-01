import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import {
//     ApplicationInfoDto,
//     GetCurrentLoginInformationsOutput,
//     SessionServiceProxy,
//     TenantLoginInfoDto,
//     UiCustomizationSettingsDto,
//     UserLoginInfoDto,
// } from '../../../shared/src/lib/service-proxies'

@Injectable()
export class AppSessionService {
    // private _user: UserLoginInfoDto;
    // private _impersonatorUser: UserLoginInfoDto;
    // private _tenant: TenantLoginInfoDto;
    // private _impersonatorTenant: TenantLoginInfoDto;
    // private _application: ApplicationInfoDto;
    // private _theme: UiCustomizationSettingsDto;

    // constructor(
    //     private _sessionService: SessionServiceProxy,
    // ) {
    // }

    // get application(): ApplicationInfoDto {
    //     return this._application;
    // }

    // set application(val: ApplicationInfoDto) {
    //     this._application = val;
    // }

    // get user(): UserLoginInfoDto {
    //     return this._user;
    // }

    // get userId(): number {
    //     return this.user ? this.user.id : null;
    // }

    // get tenant(): TenantLoginInfoDto {
    //     return this._tenant;
    // }

    // get tenancyName(): string {
    //     return this._tenant ? this.tenant.tenancyName : '';
    // }

    // get tenantId(): number {
    //     return this.tenant ? this.tenant.id : null;
    // }

    // getShownLoginName(): string {
    //     const userName = this._user.userName;
    //     return userName;

    // }

    // get theme(): UiCustomizationSettingsDto {
    //     return this._theme;
    // }

    // set theme(val: UiCustomizationSettingsDto) {
    //     this._theme = val;
    // }

    // init(): Promise<UiCustomizationSettingsDto> {
    //     return new Promise<UiCustomizationSettingsDto>((resolve, reject) => {
    //         this._sessionService
    //             .getCurrentLoginInformations()
    //             .toPromise()
    //             .then(
    //                 (result: GetCurrentLoginInformationsOutput) => {
    //                     this._application = result.application;
    //                     this._user = result.user;
    //                     this._tenant = result.tenant;
    //                     this._theme = result.theme;
    //                     this._impersonatorTenant = result.impersonatorTenant;
    //                     this._impersonatorUser = result.impersonatorUser;
    //                     resolve(result.theme);
    //                 },
    //                 (err) => {
    //                     reject(err);
    //                 }
    //             );
    //     });
    // }

    changeTenantIfNeeded(tenantId?: number): boolean {
        // if (this.isCurrentTenant(tenantId)) {
        //     return false;
        // }
        location.reload();
        return true;
    }

    // private isCurrentTenant(tenantId?: number) {
    //     let isTenant = tenantId > 0;

    //     if (!isTenant && !this.tenant) {
    //         // this is host
    //         return true;
    //     }

    //     if (!tenantId && this.tenant) {
    //         return false;
    //     } else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
    //         return false;
    //     }

    //     return true;
    // }

    // get impersonatorUser(): UserLoginInfoDto {
    //     return this._impersonatorUser;
    // }
    // get impersonatorUserId(): number {
    //     return this.impersonatorUser ? this.impersonatorUser.id : null;
    // }
    // get impersonatorTenant(): TenantLoginInfoDto {
    //     return this._impersonatorTenant;
    // }
    // get impersonatorTenancyName(): string {
    //     return this.impersonatorTenant ? this.impersonatorTenant.tenancyName : '';
    // }
    // get impersonatorTenantId(): number {
    //     return this.impersonatorTenant ? this.impersonatorTenant.id : null;
    // }
}
