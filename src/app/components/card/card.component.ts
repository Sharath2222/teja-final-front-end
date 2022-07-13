import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dishes } from 'src/app/models/dishes';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';
import { DishService } from 'src/app/service/dish.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dish!: Dishes;
  count!: number;
  isAdmin:boolean=false;
  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }
  addToCart() {
    this.cartService.addToCart(this.dish);
    this.count = this.cartService.getCount();
    this.cartService.cartSubject.next(this.count);
    console.log(this.cartService.showCarts());
  }

  edit(dish:Dishes){
    this.router.navigate(['/add-dish',dish.id]);
  }
  delete(id:number){
    console.log('clicked');
    
    this.dishService.delete(id).subscribe({
      next:(response:any)=>console.log(response),
      error:(error:any)=>console.log(error),     
      
    });
  }
}
