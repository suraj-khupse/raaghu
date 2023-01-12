import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompUserPermissionsModule } from '../../../rds-components/src/app/rds-comp-user-permissions/rds-comp-user-permissions.module';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsDropdownlistModule } from '@libs/rds-elements';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTranslateModule.forRoot(),
    RdsCompUserPermissionsModule,
    RdsDropdownlistModule
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent],
})
export class AppModule { }
