import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router:Router,private http:HttpClient) { }
  login(user:any){

    return this.http.post('http://localhost:6900/api/auth/login',user);

  }
  isLoggedIn() : boolean{
    return localStorage.getItem('username')!=null;
   
  }

  logout(){
  
    this.router.navigate(['/logout']);
  }
  isAdmin():boolean{
    return localStorage.getItem('isAdmin')==='true';
  }

  register(userForm:any){
    return this.http.post('http://localhost:6900/api/auth/register',userForm);
  }

}
