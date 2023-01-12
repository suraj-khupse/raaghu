import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEditionComponent } from './rds-comp-edition.component';
import { RdsCardModule } from "../../../../libs/rds-elements/src/rds-card/src/lib/rds-card.module";


@NgModule({
    declarations: [
        RdsCompEditionComponent
    ],
    exports: [
        RdsCompEditionComponent
    ],
    imports: [
        CommonModule,
        RdsCardModule
    ]
})
export class RdsCompEditionModule { }
