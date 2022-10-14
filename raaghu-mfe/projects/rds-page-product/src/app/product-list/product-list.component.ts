import { Component, OnInit } from '@angular/core';
import { getProducts, Product, productsSelector, selectProduct } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(productsSelector);
    this.loadProducts();
  }

  selectProduct(selectedProduct: Product) {
    this.store.dispatch(selectProduct({ selectedProduct }));
  }

  loadProducts() {
    this.store.dispatch(getProducts());
  }
}
