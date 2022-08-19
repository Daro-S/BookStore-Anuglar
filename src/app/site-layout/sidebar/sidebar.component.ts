import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category|any;

  constructor(private productsService : ProductService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList = data;
    })
  }

}
