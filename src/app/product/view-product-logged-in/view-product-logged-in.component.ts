import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/auth.service';
import { Book } from '../book';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-view-product-logged-in',
  templateUrl: './view-product-logged-in.component.html',
  styleUrls: ['./view-product-logged-in.component.css']
})
export class ViewProductLoggedInComponent implements OnInit {

   auth = getAuth();
  user= this.auth.currentUser;
  productList : Book | any;
  public filterCategory : any;
  public searchTerm !: string;
  public totalItem : number = 0;
  searchKey:string ="";
  authentication: any;

  constructor(private bookService : BookService, private cartService: CartService, public authService: AuthService) { }


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
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
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }


}
