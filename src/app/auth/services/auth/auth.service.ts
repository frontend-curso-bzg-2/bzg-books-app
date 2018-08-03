import { Injectable } from '@angular/core';
import { IAuth } from '../../models';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(auth : any){
    localStorage.setItem('bzgBooksApp2', JSON.stringify(auth));
    this.router.navigate(['/']);
  }

  logout(){
    localStorage.removeItem('bzgBooksApp2');
    this.router.navigate(['/login']);
  }
}
