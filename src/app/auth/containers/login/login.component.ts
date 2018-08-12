import { Component, OnInit, NgZone } from '@angular/core';
import { IAuth } from '../../models';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import * as fromAuth from "../../reducers";
import * as Auth from "../../actions/auth";
import { MessagesService } from "../../../alerts/services/messages.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  pending$ = this.store.pipe(select(fromAuth.getPending));
  error$ = this.store.pipe(select(fromAuth.getError));
  success$ = this.store.pipe(select(fromAuth.getLoggedIn));

  constructor(private authService: AuthService, private router: Router, private zone: NgZone,
    private store: Store<fromAuth.State>, private alertMsg: MessagesService) { }

  ngOnInit() {
    this.error$.subscribe(
      error => {
        this.alertMsg.message('Usuario o Contraseña incorrecta', 'error');
      }
    );

    this.success$.subscribe(
      success => {
        console.log("Entro: " + success);
        if(success){
          this.router.navigate(['main']);
        }
      }
    );
  }

  login(event: IAuth) {
    //
    this.store.dispatch(new Auth.Login());
    this.authService.login(event)
      .then(
        auth => {
          localStorage.setItem('bzgBooksApp2', JSON.stringify(auth.user));
          this.store.dispatch(new Auth.LoginSuccess(auth.user.uid));
        },
        error => {
          this.store.dispatch(new Auth.LoginFailure(error));
        }
      );
  }

  signGoogle(event) {
    if (event) {
      this.store.dispatch(new Auth.Login());
      this.authService.signInWithGoogle()
        .then(
          auth => {
            localStorage.setItem('bzgBooksApp2', JSON.stringify(auth.user));            
            this.zone.run(() => {
              this.store.dispatch(new Auth.LoginSuccess(auth.user.uid));
            });
          }
        ).catch(
          (err) => {
            this.store.dispatch(new Auth.LoginFailure(err));
          }
        );
    }
  }

}
