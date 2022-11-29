import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTranslateModule, SharedModule } from '@libs/shared';

import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTranslateModule.forRoot()
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
