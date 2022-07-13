import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})



export class OrderService {
  

  constructor(private http:HttpClient,private cartService:CartService) { }

  // getOrders(){
  //   return this.http.get('http://localhost:6900/api/order/get/all/${'username'}')
  // }

  getOrders(){
   
    return this.http.get(`http://localhost:6900/api/order/get/all/${localStorage.getItem("username")}`);
  }

  createOrder(){
    console.log(this.cartService.showCarts());
    return this.http.post('http://localhost:6900/api/order/create',this.cartService.showCarts());
    
  }


}




