import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart = faCartShopping;

  categoryList: Category | any;

  constructor(private productsService : ProductService) {
  }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }

}
