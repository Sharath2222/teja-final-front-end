import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/cart';
import { Dishes } from '../models/dishes';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartSubject = new Subject<any>();
  carts: Cart[] = [];

  constructor() {}
  addToCart(dish: Dishes) {
    for (let cart of this.carts) {
      if (cart.dishName === dish.name) {
        cart.quantity++;
        return;
      }
    }
    this.carts.push({
      username: localStorage.getItem('username'),
      dishName: dish.name,
      quantity: 1,
      price: dish.price,
    });
  }

  updateProductQuantity(dishName: string, quantity: number) {
    this.carts = this.carts.map((cart) => {
      if (dishName === cart.dishName) {
        return {
          username: cart.username,
          dishName: cart.dishName,
          quantity: quantity,
          price: cart.price,
        };
      }
      return cart;
    });
  }

  showCarts() {
    return this.carts;
  }

  deleteProduct(dishName: string) {
    this.carts = this.carts.filter((cart) => dishName !== cart.dishName);
  }
  getCount() {
    return this.carts.length;
  }
  deleteAll() {
    this.carts = [];
  }
}
