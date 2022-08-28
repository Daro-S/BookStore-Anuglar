import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { CartService } from 'src/app/product/service/cart.service';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // auth = getAuth();
  // user = this.auth.currentUser;
  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(private cartService : CartService, public authService: AuthService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}

