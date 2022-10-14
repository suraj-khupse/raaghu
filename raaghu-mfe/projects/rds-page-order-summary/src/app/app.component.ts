import { Component, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-summary';
  subTotalPrice = 0;
  rdsCompShoppingCartProduct: ComponentLoaderOptions;
  rdsCompOrderSummary: ComponentLoaderOptions;
  cardData: any;

  ngOnInit(): void {
    this.rdsCompShoppingCartProduct = {
      name: 'RdsCompShoppingCartProduct',
      input: {
        role: 'withoutQuantity',
        itemList: [
          {
            id: 1,
            image: '../assets/Group 189569@2x.png',
            prodname: 'Tea Coaster Set Antique',
            prdosubname: 'Natural',
            price: 40,
          },
          {
            id: 2,
            image: '../assets/Group 189568@2x.png',
            prodname: 'Leather Long Wallet',
            prdosubname: 'Natural',
            price: 33,
          }
        ]
      }
    };
    this.rdsCompOrderSummary = {
      name: 'RdsCompOrderSummary',
      input: {
        isCheckout: false,
        Subtotal: 0,
        Shippingestimate: 10,
        Taxestimate: 20
      }
    };
    this.cardData = {
      cardID: '1011', cardName: 'MasterCard', cardExpiry: '11/2027', cardLogo: 'dashboard', cardNumber: 1111, isDefault: false, radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }]
    }
    for (let i = 0; i < this.rdsCompShoppingCartProduct.input.itemList.length; i++) {
      this.rdsCompOrderSummary.input.Subtotal += this.rdsCompShoppingCartProduct.input.itemList[i].price;
    }
  }
}
