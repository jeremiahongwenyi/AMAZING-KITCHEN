import { Component, EventEmitter, Output,Input,signal, effect, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
@Input()
  // @Input() selectedProduct = signal<any>(null)
  @Input() selectedProduct:Product;
  itemsinCart:number=0


constructor(){
//   console.log(this.selectedProduct())
//   effect( ()=>{
//     console.log(this.selectedProduct())
//   })
 }

  @Output()
  closeProductDetailComponent = new EventEmitter<boolean>()

  ngOnInit(): void {
  
  }

  closeProductDetail(){
  this.closeProductDetailComponent.emit(false)
  }

  increamentCartValue(){
    // if(this.itemsinCart<this.selectedProduct().available){
    //   this.itemsinCart++
    // }
    // return 
  
  }

  decreamentCartValue(){
    if (this.itemsinCart >0){
      this.itemsinCart--
    }
    return
  }


}
