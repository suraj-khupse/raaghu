import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompOpenPositionComponent } from './rds-comp-open-position.component';
import { RdsCompApplyForPositionModule } from "../rds-comp-apply-for-position/rds-comp-apply-for-position.module";
import { RdsButtonModule, RdsLabelModule, RdsNavTabModule } from '@libs/rds-elements';


@NgModule({
    declarations: [
        RdsCompOpenPositionComponent
    ],
    exports: [
        RdsCompOpenPositionComponent
    ],
    imports: [
        CommonModule,
        RdsLabelModule,
        RdsNavTabModule,
        RdsButtonModule,
        RdsCompApplyForPositionModule
    ]
})
export class RdsCompOpenPositionModule { }
