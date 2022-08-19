import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  star =faStar;
  searchCategory:  Category | any

  productList : Product | any
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(data=>{
        this.searchCategory = data['id'];
        this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
          this.productList = categoryData;
        })

      })
  }

}
