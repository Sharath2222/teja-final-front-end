import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dishes } from 'src/app/models/dishes';
import { DishService } from 'src/app/service/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent implements OnInit {
  initialDishes!:Dishes[];
  id:number=0;
  dish: Dishes = {
    id:0,
    name: '',
    price: 0,
    category: '',
    img: '',
    description: '',
  };

  constructor(private dishService:DishService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getAllDishes();
  }

  addDish() {
    if(this.id===0){
      console.log(this.dish);
      this.dishService.addDish(this.dish).subscribe({
        next:(response:any)=>{
          console.log();
          this.router.navigate(['']);
          
        },
        error:(error:any)=>{
          console.log(error);
          
        }
      });
    }else{
      this.dishService.updateDish(this.dish).subscribe({
        next:(response:any)=>{
          console.log();
          this.router.navigate(['']);
          
        },
        error:(error:any)=>{
          console.log(error);
          
        }
      });
    }
    console.log(this.dish);
    
  
  }
  


  getAllDishes(){
    this.dishService.getAllDishes().subscribe({
      next:(response:any)=>{
        this.initialDishes=response;
        for(let i=0;i<this.initialDishes.length;i++){
          if(this.initialDishes[i].id==this.id){
            this.dish=this.initialDishes[i];
          }
         
        }
        console.log(this.dish);
        
      },
      error:(error:any)=>console.log(error),
      
      
    })
  }
  
}
