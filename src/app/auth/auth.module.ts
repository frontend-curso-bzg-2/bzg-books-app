import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { routes } from "./routes.auth";
import { LoginComponent } from './containers/login/';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { reducers } from "./reducers";
import { AlertsModule } from "../alerts/alerts.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    StoreModule.forFeature('auth', reducers),
    AlertsModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
