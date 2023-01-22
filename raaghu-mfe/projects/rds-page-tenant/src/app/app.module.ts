import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsButtonModule } from '@libs/rds-elements';
import { RdsCompTenantListNewModule } from 'projects/rds-components/src/app/rds-comp-tenant-list-new/rds-comp-tenant-list-new.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    RdsButtonModule,
    RdsCompTenantListNewModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
