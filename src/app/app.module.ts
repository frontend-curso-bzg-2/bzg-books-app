import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './api-data/api-books-demo';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";

import { routes } from "./routes";
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HttpModule,
    HttpClientModule,
    /**HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 3000 }
    ), **/   
    AngularFireModule.initializeApp(environment.firebase, 'bzg-books-app-2'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
