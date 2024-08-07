import { Component,OnInit,signal,effect, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../Models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartCountService } from '../../service/cart-count/cart-count.service';


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
    private cartCountService:CartCountService,
    
  ){ 
    // effect(()=> {console.log(this.selectedProduct())})
  }

  shopProducts:Product[]=[]
  filteredData:Product[]=[]
  showProductDetail:boolean = false;
  selectedItemId:number = 0;
  selectedProductDetail:string='';
  itemsinCart:number=0
  // selectedProduct = signal(null);
  selectedProduct:Product;
  subcategory:(string|null) ='';
  observable:any;
  


  ngOnInit(): void {

  this.productService.getProducts().subscribe({
      next: (data)=> {
      console.log(data)
      this.shopProducts = data;
      this.filteredData = data;
      }
    });
   

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
    this.selectedItemId = data.itemid;
    console.log(this.selectedProduct);
    this.selectedProductDetail = data.itemDesc;
  }

  hideDetail(action:boolean){
    console.log(action);
    this.showProductDetail=action;
  }

  productContainerClicked(item:Product){
    console.log(item);
    // this.selectedProduct.set(item);
    this.selectedProduct=item;
    console.log(this.selectedProduct);
    this.showProductDetail= true;

  }

  addCartCount(item:Product){
  console.log('working')
  this.filteredData.forEach((product)=> product.productadded=false);
  item.productadded=true;
  setTimeout(()=>{
    item.productadded=false;
  },500)
  this.cartCountService.manageCartCount();
  }

ngOnDestroy(): void {
    this.observable.unsubscribe();
}

}
