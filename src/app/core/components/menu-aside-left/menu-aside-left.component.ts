import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth/services/auth/auth.service";
import { Store } from "@ngrx/store";
import * as fromAuth from "../../../auth/reducers";
import * as Auth from "../../../auth/actions/auth";

@Component({
  selector: 'app-menu-aside-left',
  templateUrl: './menu-aside-left.component.html',
  styleUrls: ['./menu-aside-left.component.styl']
})
export class MenuAsideLeftComponent implements OnInit {

  constructor(private authService: AuthService, private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

  logout(){
    this.store.dispatch(new Auth.Logout());
    this.authService.logout();
  }

}
