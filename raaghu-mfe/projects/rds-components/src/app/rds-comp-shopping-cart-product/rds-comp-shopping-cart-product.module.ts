import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompShoppingCartProductComponent } from './rds-comp-shopping-cart-product.component';
import { RdsIconLabelModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompShoppingCartProductComponent
  ],
  exports: [
    RdsCompShoppingCartProductComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsIconLabelModule
  ]
})
export class RdsCompShoppingCartProductModule { }
