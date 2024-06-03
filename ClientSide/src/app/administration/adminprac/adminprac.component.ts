import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormArray,FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminprac',
  templateUrl: './adminprac.component.html',
  styleUrl: './adminprac.component.css'
})
export class AdminpracComponent implements OnInit {

  signUpForm:FormGroup;

constructor(private fb:FormBuilder){}

ngOnInit(): void {
    this.signUpForm = this.fb.group({
    action:['ADD',Validators.required],
    category:['utensils',Validators.required],
    subcategory:['cups', Validators.required],
    itemid:['', Validators.required],
    productname:['', Validators.required],
    image:['', Validators.required],
    quantity:[null, Validators.required],
    price: this.fb.group({
      amount:[null,Validators.required],
      specification:[''],
    }),

    description:['', Validators.required],
    discount:[null, Validators.required],

    })
}


  onSubmitForm(){
console.log(this.signUpForm)
  }



}
