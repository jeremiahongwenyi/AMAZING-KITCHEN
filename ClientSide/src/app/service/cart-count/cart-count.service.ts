import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

 @Injectable({
  providedIn:'root'
 })

export class CartCountService {

  constructor() { }

 cartCount = new BehaviorSubject<number>(0);
 cartCount$ = this.cartCount.asObservable()




  manageCartCount(){
    this.cartCount.next(this.cartCount.value + 1)
  }
}
