//import { AbpHttpInterceptor, RefreshTokenService, AbpHttpConfigurationService } from 'abp-ng2-module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DefaultOAuthInterceptor } from './http.interceptor';
import { OAuthNoopResourceServerErrorHandler } from './resource-server-error-handler';
//import { DefaultOAuthInterceptor } from './http.interceptor';


import * as ApiServiceProxies from './service-proxies';
//import { ZeroRefreshTokenService } from '@account/auth/zero-refresh-token.service';
//import { ZeroTemplateHttpConfigurationService } from './zero-template-http-configuration.service';

@NgModule({
    providers: [
        ApiServiceProxies.ServiceProxy,
         
        OAuthNoopResourceServerErrorHandler,
       { provide: HTTP_INTERCEPTORS, useClass: DefaultOAuthInterceptor, multi: true },
    ],
})
export class ServiceProxyModule {}
