import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {

  public rdsCompOrderSummaryMfeConfig: ComponentLoaderOptions;
public rdsCompShoppingCartProductMfeConfig: ComponentLoaderOptions;
subtotal : any
title: 'cart'
totalPrice:Number=0;
  ngOnInit(): void {
 this.rdsCompShoppingCartProductMfeConfig = {
      name: 'RdsCompShoppingCartProduct',
      input: {
        itemList : [  {
          id: 1,
          image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
          prodname: 'Premium Quality Soft T-Shirt',
          prdosubname: 'Gray - medium',
          price: 12,
          ProductTotalPrice:12,
          quantity: [
            { value: 1, displayText: 'Qty 1' },
            { value: 2, displayText: 'Qty 2' },
            { value: 3, displayText: 'Qty 3' },
            { value: 4, displayText: 'Qty 4' },
            { value: 5, displayText: 'Qty 5' },
            { value: 6, displayText: 'Qty 6' },
            { value: 7, displayText: 'Qty 7' },
            { value: 8, displayText: 'Qty 8' },
            { value: 9, displayText: 'Qty 9' },
            { value: 10, displayText: 'Qty 10' }
          ],
          highlights: {
            icon: 'check_mark',
            label: 'In Stock'
          },
    
        },
        {
          id: 2,
          image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
          prodname: 'Premium Quality Soft T-Shirt',
          prdosubname: 'Black & White - Large',
          price: 33,
          ProductTotalPrice:33,
          quantity: [
            { value: 1, displayText: 'Qty 1' },
            { value: 2, displayText: 'Qty 2' },
            { value: 3, displayText: 'Qty 3' },
            { value: 4, displayText: 'Qty 4' },
            { value: 5, displayText: 'Qty 5' },
            { value: 6, displayText: 'Qty 6' },
            { value: 7, displayText: 'Qty 7' },
            { value: 8, displayText: 'Qty 8' },
            { value: 9, displayText: 'Qty 9' },
            { value: 10, displayText: 'Qty 10' }
          ],
          highlights: {
            icon: 'clock',
            label: 'Ships in 3-4 weeks'
          },
    
        }
        ,
        {
          id: 3,
          image: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1',
          prodname: 'Premium Quality Soft T-Shirt',
          prdosubname: 'White - Small',
          price: 9,
          ProductTotalPrice:9,
          quantity: [
            { value: 1, displayText: 'Qty 1' },
            { value: 2, displayText: 'Qty 2' },
            { value: 3, displayText: 'Qty 3' },
            { value: 4, displayText: 'Qty 4' },
            { value: 5, displayText: 'Qty 5' },
            { value: 6, displayText: 'Qty 6' },
            { value: 7, displayText: 'Qty 7' },
            { value: 8, displayText: 'Qty 8' },
            { value: 9, displayText: 'Qty 9' },
            { value: 10, displayText: 'Qty 10' }
          ],
          highlights: {
            icon: 'check_mark',
            label: 'In Stock'
          },
    
        }],
        recordsPerPage: 10,
        width: '100%',
        pagination: true,
        noDataTitle: 'Currently you do not have product'
      },

      output: {
        onItemClick: (event ) => {
          this.totalPrice=0;
          this.rdsCompShoppingCartProductMfeConfig.input.itemList.forEach((product:any)=>{
            
            if(product.id===event.id){
              product.ProductTotalPrice=event.price*event.quantity
            }
            this.totalPrice  =  product.ProductTotalPrice+ this.totalPrice 
           })
         
           const mfeconfig=this.rdsCompOrderSummaryMfeConfig;
           mfeconfig.input.Subtotal= this.totalPrice 
           this.rdsCompOrderSummaryMfeConfig=mfeconfig;
        }

      }
    };
    this.rdsCompShoppingCartProductMfeConfig.input.itemList.forEach((product:any)=>{
     
      this.totalPrice  =  product.ProductTotalPrice+ this.totalPrice 
     })
    this.rdsCompOrderSummaryMfeConfig = {

      name: 'RdsCompOrderSummary',
      input: {
        Subtotal:this.totalPrice,
        Shippingestimate:9.00,
        Taxestimate:2.30
      },
     
    
    }
  }

}
