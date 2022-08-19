import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productID= 0;

  constructor(
    private activatedEoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedEoute.params.subscribe(data => {
      this.productID = data['id'];

      this.productService.deleteProduct(this.productID).subscribe(deleteData => {
        console.log("Product has been deleted successfully")
      })
  });
}

}
