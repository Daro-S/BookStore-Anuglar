import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  addNewProduct(form: {
    value: {
      product_rating: any;
      product_description: any;
      product_name: any;
      product_isbn: any;
      product_image: any;
      product_price: any;
      product_category: any;
    };
  }) {
    console.log(form.value);
    let newProduct = {
      //auto increament id
      id: 0,
      name: form.value.product_name,
      isbn: form.value.product_isbn,
      image: form.value.product_image,
      price: form.value.product_price,
      categoryId: form.value.product_category,
      description: form.value.product_description,
      rating: form.value.product_rating,
      isAvailable: 1,
    };

    console.log(newProduct);
    this.bookService.addBook(newProduct).subscribe((data) => {
      console.log(data);
    });
  }
}
