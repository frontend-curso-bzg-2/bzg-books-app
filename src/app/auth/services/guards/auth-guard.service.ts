import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../reducers";
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private store: Store<fromAuth.State>) { }

  canActivate(): Observable<boolean> {

    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(loggedIn => {
        if(!loggedIn){
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
