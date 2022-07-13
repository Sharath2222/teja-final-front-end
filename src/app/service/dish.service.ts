import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dishes } from '../models/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  initialDishes: Dishes[] = [
    {
      id:1,
      name: 'Italian Pizza',
      price: 289,
      category: 'pizza',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:2,
      name: 'Italian Pizza',
      price: 289,
      category: 'pizza',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:3,
      name: 'Italian Pizza',
      price: 289,
      category: 'beverages',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:4,
      name: 'Italian Pizza',
      price: 289,
      category: 'beverages',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:5,
      name: 'Italian Pizza',
      price: 289,
      category: 'burger',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:6,
      name: 'Italian Pizza',
      price: 289,
      category: 'burger',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:7,
      name: 'Italian Pizza',
      price: 289,
      category: 'snacks',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
    {
      id:8,
      name: 'Italian Pizza',
      price: 289,
      category: 'snacks',
      img: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
      description:
        'Some quick example text to build on the card title and make up the bulk ofthe card.',
    },
  ];

  constructor(private http:HttpClient) { }

  getAllDishes(){
    return this.http.get('http://localhost:6900/api/order/get/all');
  }

  addDish(dish:Dishes){
    
    return this.http.post('http://localhost:6900/api/order/add',dish);
    
  }
  getAll(){
    return this.http.get('http://localhost:6900/api/order/get/all');
  }
  updateDish(dish:Dishes){
    return this.http.put('http://localhost:6900/api/order/update',dish)
  }
  delete(id:number){
    return this.http.delete(`http://localhost:6900/api/order/delete/${id}`)
  }
}
