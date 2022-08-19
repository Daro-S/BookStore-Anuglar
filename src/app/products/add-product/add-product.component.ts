import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  addNewProduct(form: { value: { product_name: any; product_isbn: any; product_image: any; product_price: any; product_category: any}; }){
    console.log(form.value);
    let newProduct={
      //auto increament id
      id: null,
      name:form.value.product_name,
      isbn: form.value.product_isbn,
      productImg: form.value.product_image,
      price: form.value.product_price,
      category: form.value.product_category,
    };

    console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data =>{
      console.log(data)
    });
  }
  
}
