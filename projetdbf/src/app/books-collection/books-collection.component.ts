import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.scss']
})
export class BooksCollectionComponent implements OnInit {

  books = []
  constructor(private _booksService: BooksService, private _router: Router) { }

  ngOnInit(): void {
    this._booksService.getBooks()
      .subscribe(
        res => this.books = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
