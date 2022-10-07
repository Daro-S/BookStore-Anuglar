import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  productID = 0;
  productDetails: Book | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productID = data['id'];

      this.bookService.viewProduct(this.productID).subscribe((productData) => {
        this.productDetails = productData;
        console.log(this.productDetails);
      });
    });
  }
  updateProduct(form: {
    value: {
      product_name: any;
      product_isbn: any;
      product_image: any;
      product_price: any;
      product_category: any;
    };
  }) {
    const updateProduct = {
      name: form.value.product_name,
      isbn: form.value.product_isbn,
      image: form.value.product_image,
      price: form.value.product_price,
      categoryId: form.value.product_category,
      id: 0,
      description: '',
      rating: 0,
      isAvailable: 0,
    };
    console.log(form);
    this.bookService.updateBook(updateProduct).subscribe((data) => {
      console.log(data);
    });
  }
}
