import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = 'api/';
  constructor(private http: HttpClient) { }

  getBookList(text?:string):Observable<any> {
    let url = this.url + 'books';
    if(text){
      url = url + `/?id=${text}`;
    }
    return this.http.get(url);    
  }
}
