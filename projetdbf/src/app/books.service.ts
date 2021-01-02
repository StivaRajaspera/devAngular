import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _booksURL = "http://localhost:3000/api/getAllbooks"

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<any>(this._booksURL)
  }
}
