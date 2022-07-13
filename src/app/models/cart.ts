import { Dishes } from "./dishes";

export interface Cart{
    username:string | null;
    dishName:string;
    quantity:number;
    price:number;
  
}