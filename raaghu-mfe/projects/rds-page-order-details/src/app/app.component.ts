import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'order-details';
  cardData: any;
  totalPrice: Number = 0;
  orderTotal: Number = 0;
  
  label: string = 'Payment Information';
  public rdsCompOrderSummaryMfeConfig: ComponentLoaderOptions;
  public rdsOrderDetailsMfeConfig: ComponentLoaderOptions
  public rdsCompOrderSummary: ComponentLoaderOptions
  public RdsCompCardDetailList: ComponentLoaderOptions
  ngOnInit(): void {
    this.rdsOrderDetailsMfeConfig = {
      name: 'RdsCompOrderDetails',
      input: {
        itemList: [
          {
            profilePic: 'https://th.bing.com/th/id/OIP.khH-pSAYsgQuFLbIrpFs6gHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.3',
            prodname: 'Premium Quality Soft T-Shirt',
            price: 20,
            highlights: 'White tees stain easily, and black tees fade. this is going to be gray for a while',
            update: 'Shopping Update',
            tno: 'Tracking number',
            trackingNumber: '655634573859574857',
            emailId: 'g******@gmail.com',
            phoneNo: '8*******53',
            qty: 50,
            orderTotal: 0,
            shipDetails: 'Preparing to ship on June 05,2022',
            orderStage:"shipped",
            label: 'Order#36690',
             address: [
              { header: "Shopping Address", addressLine1: "Brookland house,", addressLine2: "5439,Rose Mills Road,", addressLine3: "Santa Clara, CA95054" }
            ]

          },

          {
            profilePic: 'https://th.bing.com/th/id/OIP.khH-pSAYsgQuFLbIrpFs6gHaHa?pid=ImgDet&w=221&h=221&c=7&dpr=1.3',
            prodname: 'Premium Quality Soft T-Shirt',
            price: 12,
            highlights: 'White tees stain easily, and black tees fade. this is going to be gray for a while',
            update: 'Shopping Update',
            tno: 'Tracking number',
            trackingNumber: '655634573859574857',
            emailId: 'g******@gmail.com',
            phoneNo: '8*******53',
            qty: 3,
            orderTotal: 0,
            orderStage:"processing",
            shipDetails: 'Order is placed on June 06,2022',
            label: 'Order#36690',
            "stepparList": [
              { stepname: "step1", steptabname: "Order placed", tablink: '#nav-order-placed', ariacontrols: 'nav-order-placed' },
              { stepname: "step2", steptabname: "Processing", tablink: '#nav-processing', ariacontrols: 'nav-processing' },
              { stepname: "step3", steptabname: "Shipped", tablink: '#nav-shipped', ariacontrols: 'nav-shipped' },
              { stepname: "step3", steptabname: "Delivered", tablink: '#nav-delivered', ariacontrols: 'nav-delivered' }
            ],
            address: [
              { header: "Shopping Address", addressLine1: "Brookland house,", addressLine2: "5439,Rose Mills Road,", addressLine3: "Santa Clara, CA95054" }
            ]
           },
         ],
      },
   },
      this.rdsOrderDetailsMfeConfig.input.itemList.forEach((product: any) => {
        product.orderTotal = product.qty * product.price;
        this.totalPrice = product.orderTotal + this.totalPrice
      });
    this.rdsCompOrderSummary = {
      name: 'RdsCompOrderSummary',
      input: {
        Subtotal: this.totalPrice,
        Shippingestimate: 9.00,
        Taxestimate: 2.30,
        isCheckout: false,

      }
    },

      this.cardData = {
        cardID: '1011', cardExpiry: '11/2027', cardLogo: 'dashboard', cardNumber: 1111, isDefault: false, radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }]
      }
  }
}


