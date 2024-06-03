import { Component, EventEmitter, Output,Input,signal, effect, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
@Input()
  productId:number = 0
  @Input() productDetail:string=''
  @Input() selectedProduct = signal<any>(null)
  itemsinCart:number=0


constructor(){
  console.log(this.selectedProduct())
  effect( ()=>{
    console.log(this.selectedProduct())
  })
}

  @Output()
  closeProductDetailComponent = new EventEmitter<boolean>()

  ngOnInit(): void {
      console.log(this.productDetail)
  }

  closeProductDetail(){
  this.closeProductDetailComponent.emit(false)
  }

  increamentCartValue(){
    if(this.itemsinCart<this.selectedProduct().available){
      this.itemsinCart++
    }
    return
    
  
  }

  decreamentCartValue(){
    if (this.itemsinCart >0){
      this.itemsinCart--
    }
    return
  }


}
