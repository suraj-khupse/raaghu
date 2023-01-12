import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompDynamicEnityPropertiesComponent } from './rds-comp-dynamic-enity-properties.component';
import { RdsCompNewDynamicEntityPropertyModule } from "../rds-comp-new-dynamic-entity-property/rds-comp-new-dynamic-entity-property.module";
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import { RdsOffcanvasModule } from "../../../../libs/rds-elements/src/rds-offcanvas/src/lib/rds-offcanvas.module";


@NgModule({
    declarations: [
        RdsCompDynamicEnityPropertiesComponent
    ],
    exports: [
        RdsCompDynamicEnityPropertiesComponent
    ],
    imports: [
        CommonModule,
        RdsCompNewDynamicEntityPropertyModule,
        RdsCompDataTableModule,
        RdsOffcanvasModule
    ]
})
export class RdsCompDynamicEntityPropertiesModule { }
