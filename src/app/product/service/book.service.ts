import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  public getBook(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8088/books/all');
  }

  public addBook(book: Book): Observable<Book>{
    return this.http.post<Book>('http://localhost:8088/books/add', book);
  }
  public updateBook(book: Book): Observable<Book>{
    return this.http.put<Book>('http://localhost:8088/books/update', book);
  }
  public deleteBook(bookID: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:8088/books/delete/${bookID}`);
  }
  viewProduct(id: any):Observable<Book>{
    const baseUrl = "http://localhost:8088/books/find/"+ id;
    return this.http.get<Book>(baseUrl);
  }

}
