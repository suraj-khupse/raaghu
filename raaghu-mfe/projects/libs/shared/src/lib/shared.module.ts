import { NgModule } from '@angular/core';
import { ComponentLoaderComponent } from './component-loader.component';
import { OAuthNoopResourceServerErrorHandler } from './resource-server-error-handler';
import { ServiceProxyModule } from './service-proxy.module';

@NgModule({
  declarations: [ComponentLoaderComponent],
  imports: [ServiceProxyModule],
  exports: [ComponentLoaderComponent],
  providers:[]
})
export class SharedModule {

}
