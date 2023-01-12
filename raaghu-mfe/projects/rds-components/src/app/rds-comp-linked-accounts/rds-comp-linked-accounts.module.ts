import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsLinkedAccountsComponent } from './rds-comp-linked-accounts.component';
import { RdsButtonModule, RdsInputModule } from "@libs/rds-elements";

@NgModule({
    declarations: [
        RdsLinkedAccountsComponent
    ],
    exports: [
        RdsLinkedAccountsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RdsButtonModule,
        RdsInputModule
    ]
})
export class RdsCompLinkedAccountsModule { }
