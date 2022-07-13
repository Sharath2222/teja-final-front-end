import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Dishes } from 'src/app/models/dishes';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  count!: number;
  carts: Cart[] = [];
  cartDto!:Cart[];
  total: number = 0;
  quantity: number = 1;

  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {  }

  ngOnInit(): void {
    this.carts = this.cartService.showCarts();
    this.getTotal();
  }

  showCarts() {
    return this.cartService.showCarts();
  }

  noItems() {
    this.router.navigate(['']);
  }

  deleteProduct(dishName: string) {
    this.cartService.deleteProduct(dishName);
    this.count = this.cartService.getCount();
    this.cartService.cartSubject.next(this.count);
    this.carts = this.showCarts();
    this.getTotal();
  }

  onChange(quantity: number, dishName:string) {
    this.cartService.updateProductQuantity(dishName, quantity);
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    for (let cart of this.carts) {
      this.total += cart.price * cart.quantity;
    }
  }

  placeOrder() {
    this.orderService.createOrder().subscribe({
      next:(response:any)=>{
        this.router.navigate(['/payment']);
        this.cartService.deleteAll();
      },
      error:(error:any)=>console.log(error),
      
    })
  }
}
