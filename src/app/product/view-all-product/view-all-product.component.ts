import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';



@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  
  productList : Book | any
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe(data=> {
      this.productList = data;
    })
  }

}
