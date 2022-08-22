import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';




@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList : Book | any;
  public filterCategory : any;
  searchKey:string ="";
  constructor(private bookService : BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
