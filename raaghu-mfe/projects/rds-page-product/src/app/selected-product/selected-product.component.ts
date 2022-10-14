import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product, selectedProductSelector } from '@libs/state-management';

@Component({
  selector: 'selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent implements OnInit {
  selectedProduct$: Observable<Product>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(selectedProductSelector).pipe(tap(r => console.log(r)))
  }
}
