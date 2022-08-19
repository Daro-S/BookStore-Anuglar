import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productID =0;
  productDetails: Product | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];

      this.productService.viewProduct(this.productID).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails);
      })
    })
  }
    updateProduct(form: { value: { product_name: any; product_isbn: any; product_image: any; product_price: any; product_category: any; }; }){
      const updateProduct = {
          name:form.value.product_name,
          isbn: form.value.product_isbn,
          productImg: form.value.product_image,
          price: form.value.product_price,
          category: form.value.product_category,
      };
      console.log(form);
      this.productService.updateProduct(this.productID, updateProduct).subscribe(data =>{
        console.log(data)
      });
}
}
