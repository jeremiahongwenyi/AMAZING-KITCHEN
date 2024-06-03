import { Component,OnInit,signal,effect, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit,OnDestroy {

  constructor (
    private http:HttpClient,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    
  ){ 
    effect(()=> {console.log(this.selectedProduct())})
  }

  shopProducts:any[]=[]
  filteredData:any[]=[]
  showProductDetail:boolean = false;
  selectedItemId:number = 0;
  selectedProductDetail:string='';
  itemsinCart:number=0
  selectedProduct = signal(null);
  subcategory:(string|null) ='';
  observable:any;
  


  ngOnInit(): void {

    this.shopProducts=this.productService.shopProducts;
    this.filteredData=this.productService.shopProducts;

    // const param = this.activatedRoute.snapshot.paramMap.get('subcategory')
    // this.shopProducts = this.shopProducts.filter( (product)=> product.subCategory.toLowerCase()==param?.toLowerCase())
    
    this.observable=this.activatedRoute.params.subscribe((params)=>{
      if(params['subcategory']){

        let param = params['subcategory']
      this.subcategory = param;
      console.log(this.subcategory);
      console.log(param);
      this.filteredData = this.shopProducts.filter((prod)=> {
        console.log('it works')
       return prod.subCategory.toLowerCase() === param.toLowerCase()
      })
      } else {
        return
      }
      console.log(this.shopProducts)
    })  
  }

  showDetails(data:{itemid:number,itemDesc:string}){
    console.log('hello')
    this.showProductDetail=true;
    this.selectedItemId = data.itemid
    console.log(this.selectedProduct)
    this.selectedProductDetail = data.itemDesc;
  }

  hideDetail(action:boolean){
    console.log(action)
    this.showProductDetail=action
  }

  productContainerClicked(itemid:any){
    console.log(itemid)
    this.selectedProduct.set(itemid);
    console.log(this.selectedProduct)
    this.showProductDetail= true

  }



ngOnDestroy(): void {
    this.observable.unsubscribe()
}

 
}
