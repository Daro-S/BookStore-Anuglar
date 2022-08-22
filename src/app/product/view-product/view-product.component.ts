import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productID =0;
  productData: Book | any;
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
    })
    this.bookService.viewProduct(this.productID).subscribe(viewData =>{
      this.productData = viewData;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }


}
