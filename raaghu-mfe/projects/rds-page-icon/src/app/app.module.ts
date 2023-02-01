import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompIconModule } from "../../../rds-components/src/app/rds-comp-icon/rds-comp-icon.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RdsIconModule,
        RdsCompIconModule
    ]
})
export class AppModule { }
