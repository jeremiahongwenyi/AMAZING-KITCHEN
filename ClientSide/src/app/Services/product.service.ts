import { Injectable } from "@angular/core";
import { Product } from "../Models/product.model";

@Injectable({
    providedIn:'root'
})
export class ProductService{

    shopProducts:Product[]=[
        {itemId:1.1, name:'Italian crystall clear glasses',category:'Utensils', subCategory: 'glasses', description:'Available ', price: {pri:400, specification:'per box'}, discount: 10, image:'assets/image.jpg', available: 17},
        {itemId:1.2, name:'Melanin cups',category:'Utensils',subCategory: 'cups' ,description:'Melanin cups Available in green, black and blue colors,  durable and imported from China', price: {pri:1000, specification:'per box'}, discount: 10, image:'assets/cups/image2.jpg' ,available:500},
        {itemId:1.2, name:'Ceramic cups',category:'Utensils',subCategory: 'cups' ,description:'Ceramic cups  durable and imported from Italy', price: {pri:1000, specification:'per box'}, discount: 10, image:'assets/cups/cups2.jpg' ,available:50},
        {itemId:1.2, name:'Dotted cups',category:'Utensils',subCategory: 'cups' ,description:'Multicoloured cups,  are strong and not easily breakable', price: {pri:1000, specification:'per box'}, discount: 10, image:'assets/cups/cups3.jpg' ,available:30},
        {itemId:1.2, name:'Belly-sized cups',category:'Utensils',subCategory: 'cups' ,description:' cups Available in green, black and blue colors,  made in kenya', price: {pri:1000, specification:'per box'}, discount: 10, image:'assets/cups/cups4.jpg' ,available:15},
        {itemId:1.3, name:'Hotpots',category:'Utensils',subCategory: 'hotpots' ,description:'Hotpots', price: {pri:2000, specification:'per box'}, discount: 10, image:'assets/image3.jpg', available: 70},
         ]

}