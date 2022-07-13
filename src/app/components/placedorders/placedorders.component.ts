import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-placedorders',
  templateUrl: './placedorders.component.html',
  styleUrls: ['./placedorders.component.css']
})
export class PlacedordersComponent implements OnInit {
  
  placedItems1!:Order[];
  total:number=0;
  arr1:Order[][]=[];
  arr2:Order[]=[];
  arr3:number[]=[];

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe({
      next:(response:any)=>{
        console.log(response);
        
        this.placedItems1=response;
        this.placedItems1.forEach((order)=>{
          if(this.arr2.length===0){
            console.log(this.arr2.length); 
            this.arr2.push(order);
            this.total+=order.price*order.quantity;          
          }else if(this.arr2[0].orderId===order.orderId){
            this.arr2.push(order);
            this.total+=order.price*order.quantity;
          }else{
            this.arr1.push(this.arr2);
            this.arr3.push(this.total);
            this.arr2=[];
            this.total=0;
            this.arr2.push(order);
            this.total+=order.price*order.quantity;
          }
        });
        this.arr1.push(this.arr2);
        this.arr3.push(this.total);
        console.log(this.arr1);
        
      },
      error:(error:any)=>console.log(error),
      
    });
 
  }


}
