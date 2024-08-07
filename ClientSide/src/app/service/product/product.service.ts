import { Injectable } from "@angular/core";
import { Product } from "../../Models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { CartCountService } from "../cart-count/cart-count.service";

@Injectable({
    providedIn:'root',
})
export class ProductService{

    constructor(
        private http:HttpClient,
    ){}

    // shopProducts:Product[]=[
    //     {itemId:1.1, name:'Italian crystall clear glasses',category:'utensils', subCategory: 'glasses', description:'Available ', price: {amount:400, specification:'per box'}, discount: 10, image:'assets/image.jpg', available: 17},
    //     {itemId:1.2, name:'Melanin cups',category:'utensils',subCategory: 'cups' ,description:'Melanin cups Available in green, black and blue colors,  durable and imported from China', price: {amount:1000, specification:'per box'}, discount: 10, image:'assets/cups/image2.jpg' ,available:500},
    //     {itemId:1.2, name:'Ceramic cups',category:'utensils',subCategory: 'cups' ,description:'Ceramic cups  durable and imported from Italy', price: {amount:1000, specification:'per box'}, discount: 10, image:'assets/cups/cups2.jpg' ,available:50},
    //     {itemId:1.2, name:'Dotted cups',category:'utensils',subCategory: 'cups' ,description:'Multicoloured cups,  are strong and not easily breakable', price: {amount:1000, specification:'per box'}, discount: 10, image:'assets/cups/cups3.jpg' ,available:30},
    //     {itemId:1.2, name:'Belly-sized cups',category:'utensils',subCategory: 'cups' ,description:' cups Available in green, black and blue colors,  made in kenya', price: {amount:1000, specification:'per box'}, discount: 10, image:'assets/cups/cups4.jpg' ,available:15},
    //     {itemId:1.3, name:'Hotpots',category:'utensils',subCategory: 'hotpots' ,description:'Hotpots', price: {amount:2000, specification:'per box'}, discount: 10, image:'assets/image3.jpg', available: 70},
    //     {itemId:1.3, name:'Hotpots',category:'utensils',subCategory: 'hotpots' ,description:'Hotpots', price: {amount:2000, specification:'per box'}, discount: 10, image:'assets/image3.jpg', available: 50},
    //     {itemId:2.1, name:'Ceramic plates',category:'utensils',subCategory: 'plates' ,description:'Non-malleable plates', price: {amount:500, specification:'per item'}, discount: 5, image:'assets/plates/plates1.jpg', available: 30},
    
    //      ]

         storeData(product:Product):Observable<any>{
            console.log(product)
             return this.http.post<any>('https://amazing-kitchen-1c28d-default-rtdb.firebaseio.com/products.json',product)
         }


         getProducts():Observable<any>{
            return this.http.get<{[key:string]:any}>('https://amazing-kitchen-1c28d-default-rtdb.firebaseio.com/products.json')
            .pipe(
                map( (responseData)=>{
                   let arraydata:Product[]=[]
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                        console.log(key)
                        console.log(responseData[key])
                        arraydata.push({...responseData[key]})
                    }
                   
                }
                return arraydata
                })
            )
         }

}