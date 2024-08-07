import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../../../service/cart-count/cart-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private cartCountService:CartCountService){}

  cartCount:number=0;


  ngOnInit(){
    this.cartCountService.cartCount$.subscribe({
      next:(res)=>{
        this.cartCount = res;
      }
    }
    )
  }

}
