import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  productID = 0;

  constructor(
    private activatedEoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.activatedEoute.params.subscribe((data) => {
      this.productID = data['id'];

      this.bookService.deleteBook(this.productID).subscribe((deleteData) => {
        console.log('Product has been deleted successfully');
      });
    });
  }
}
