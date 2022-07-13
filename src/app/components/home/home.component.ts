import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dishes } from 'src/app/models/dishes';
import { DishService } from 'src/app/service/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  initialDishes!: Dishes[];
  dishes: Dishes[] = [];
  currentRoute: String = '';
  title: string = '';

  constructor(private router: Router, private dishService: DishService) {}

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes() {
    this.dishService.getAllDishes().subscribe({
      next: (response: any) => {
        console.log(response);
        this.initialDishes = response;
        this.currentRoute = this.router.url.replace('/', '');
        if (this.currentRoute === '') {
          this.title = 'Todays Special';
          this.dishes = this.initialDishes.slice(0,50);
        } else if (
          this.currentRoute === 'formals' ||
          this.currentRoute === 'casuals' ||
          this.currentRoute === 'sneakers' ||
          this.currentRoute === 'boots'
        ) {
          this.title =
            this.currentRoute[0].toUpperCase() +
            this.currentRoute.substring(1).toLowerCase();
          this.dishes = this.initialDishes.filter(
            (dish) => dish.category === this.currentRoute
          );
        }
      },
      error:(error:any)=>console.log(error),
      
    });
  }
}
