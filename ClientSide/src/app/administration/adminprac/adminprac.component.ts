import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormArray,FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product.model';
import { noSpaceValidator, numbersOnlyValidator, passwordValidator } from '../../validators';


@Component({
  selector: 'app-adminprac',
  templateUrl: './adminprac.component.html',
  styleUrl: './adminprac.component.css'
})
export class AdminpracComponent implements OnInit {

  signUpForm:FormGroup;


constructor(
  private fb:FormBuilder,
  private productService:ProductService

){}
;
subcategoriesDisplayed:any[]=[];
categorySelected:string=''
subcategorySelected:string=''
itemid:string=''
filteredData:any[]=[]
productsData:any[]=[]
 itemidFormControl:AbstractControl;
 categoryFormControl:AbstractControl;
 subcategoryFormControl:AbstractControl;
 


ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (data)=> {
console.log(data)
this.productsData = data
this.filteredData = data
    }
  })
// this.productsData = this.productService.shopProducts
this.filteredData = this.productsData.filter((prod)=>{
  return  prod.category.toLowerCase() === 'utensils'
 })
 this.subcategoriesDisplayed = [...new Set(this.filteredData.map((prod)=>{return prod.subCategory}))]
 

    this.signUpForm = this.fb.group({
    action:['ADD',Validators.required],
    category:['utensils',Validators.required],
    subcategory:['cups', Validators.required],
    itemid:['', Validators.required],
    productname:['', [Validators.required, passwordValidator()]],
    image:['', Validators.required],
    quantity:[null, Validators.required],
    price: this.fb.group({
      amount:[null,Validators.required],
      specification:['per box', Validators.required],
    }),

    description:['', Validators.required],
    discount:[null, [Validators.required,numbersOnlyValidator(),noSpaceValidator]],

    })

    this.itemidFormControl=this.signUpForm.get('itemid');
    this. categoryFormControl=this.signUpForm.get('category');
    this. subcategoryFormControl=this.signUpForm.get('subcategory')
    this.initializeItemIdFormControl()

    this.signUpForm.get('category').valueChanges.subscribe((changes)=>{
    
        if(changes.toLowerCase()==='utensils'){
          this.initializeItemIdFormControl()
        } else {
          this.itemidFormControl.setValue('')
        }
        this.filteredData = this.productsData.filter((prod)=>{
          return  prod.category.toLowerCase() === changes.toLowerCase()
         })
         this.subcategoriesDisplayed = [...new Set(this.filteredData.map((prod)=>{return prod.subCategory}))]
         
      } 
    )

    this.signUpForm.get('subcategory').valueChanges.subscribe({
      next:(data:string)=>{
          this.subcategorySelected=data
          this.itemid=this.categorySelected.toUpperCase().charAt(0) + this.subcategorySelected.toUpperCase()[0] + Math.floor(Math.random()*100)
         this. itemidFormControl.setValue(this.itemid)
          // this.signUpForm.get('itemid').setValue(
          // this.categorySelected.toUpperCase().charAt(0) + this.subcategorySelected.toUpperCase()[0] + Math.floor(Math.random()*100))
   }
    })
}

onSelectCategory(event:any){
this.categorySelected=event.target.value
console.log(this.categorySelected)
console.log(this.productsData);
console.log(this.filteredData)
console.log(this.subcategoriesDisplayed)

}

initializeItemIdFormControl(){
  this.categorySelected = this.categoryFormControl.value
  this.subcategorySelected = this.subcategoryFormControl.value
  this.itemid = this.categorySelected.toUpperCase().charAt(0) + this.subcategorySelected.toUpperCase()[0] + Math.floor(Math.random()*100)
  this.itemidFormControl.setValue(this.itemid)
  console.log(this.itemid)
}



  onSubmitForm(){
   console.log(this.signUpForm)
   let formvalue= this.signUpForm.value
   console.log(formvalue)
   let newProduct = new Product(formvalue.itemid,formvalue.productname,formvalue.category,formvalue.subcategory,formvalue.description,formvalue.price,formvalue.image,formvalue.quantity,formvalue.discount)
   console.log(newProduct)
  //  this.productService.shopProducts.push(newProduct)
  //  console.log(this.productService.shopProducts)
  //  this.productService.storeData(newProduct).subscribe({
  //   next:(resp)=>{ 
  //     console.log(resp)
  //     if(resp.staus===200){
  //       alert('Product was added successfully')
  //     }
  //   }
  //  }
   //)
  
  }



}
