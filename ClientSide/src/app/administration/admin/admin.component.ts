import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  title = 'Reactive Form';

  signUpForm:FormGroup;

  status:string =''
  allfields:string=''
  username:string='';
  formData:{[key:string]:any}={};
  isHidden:boolean = true;

allCountries:any[]=[]

constructor(private http:HttpClient){}
  

  ngOnInit(): void {


    this.http.get<any[]>('https://restcountries.com/v3.1/all?fields=name').subscribe({
      next: (res)=>{
        // console.log(res)
        this.allCountries = res.flatMap(country => country)
      }
    })

    this.signUpForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        email: new FormControl(null, [Validators.required,Validators.email]),
        username: new FormControl(null,Validators.required),
        Dob: new FormControl(null),
        gender: new FormControl('male'),

        // address: new FormControl(null),
        address: new FormGroup({
          
          street: new FormControl('',Validators.required),
          country: new FormControl('America',Validators.required),
          city: new FormControl(null),
          region: new FormControl(null),
          postalCode: new FormControl(20,Validators.required),
        }),
// {updateOn:'blur'}
        skills:new FormArray([
          new FormControl(null, Validators.required),
         ]),

         experience:new FormArray([
        
        ])
        
      })

      this.signUpForm.get('firstName').valueChanges.subscribe((value)=>{
      console.log(value)
      })

      this.signUpForm.get('address').valueChanges.subscribe((value)=>{
       console.log(value)
      })

      this.signUpForm.get('username').statusChanges.subscribe((state)=>{
       console.log(state)
      })

      this.signUpForm.statusChanges.subscribe((state)=>{
        console.log(state);
        this.status = state;
        console.log(this.signUpForm)
       })
  }


  addSkills(){
    (this.signUpForm.get('skills') as FormArray).push(new FormControl(null, Validators.required))
  }

  removeSkill(index){
    (this.signUpForm.get('skills') as FormArray).removeAt(index)
  }

  onAddExperience(){
    (<FormArray>this.signUpForm.get('experience')).push(
      new FormGroup({
        company:new FormControl(null, Validators.required),
        position:new FormControl(null, Validators.required),
        totalExp:new FormControl(null, Validators.required),
        startDate:new FormControl(null, Validators.required),
        endDate:new FormControl(null, Validators.required)
      }),
    )
  }

  onDelete(index){
    let exp =(<FormArray>this.signUpForm.get('experience'))
    exp.removeAt(index)

  }


onSubmitForm(){
  console.log(this.signUpForm.value)
  this.formData= this.signUpForm.value

  console.log((<FormArray>this.signUpForm.get('experience')))
  if(this.signUpForm.valid){
    this.signUpForm.reset();
  this.isHidden = false;
  }
  else{
   
      alert('Form is Invalid Please fill all fields correctly')

  }
  // start here
  
}

createUsername(){
  let fname = document.querySelector<HTMLInputElement>('#fn');
  let lname = this.signUpForm.get('lastName').value;
  let dob = this.signUpForm.value.Dob
  console.log(dob)
  if(fname.value !== ''||null && lname !==''||null && dob !== ''||null){
    
    if(fname.value.length>= 3 && lname.length>=3) {
         this.username = fname.value.slice(1,3)
         this.username += lname.slice(0,3)
         this.username+= new Date(dob).getFullYear();
         this.username = this.username.toLowerCase()
         console.log(this.username)
         
         
    } else {
      this.username = fname.value
      this.username += lname
      this.username += (new Date(dob).getFullYear())
      this.username = this.username.toLowerCase()
      console.log(this.username)

    }

//      this.signUpForm.setValue({

//       firstName: this.signUpForm.get('firstName').value,
//         lastName: this.signUpForm.get('lastName').value,
//         email: this.signUpForm.get('email').value,
//         username: this.username,
//         Dob: this.signUpForm.get('Dob').value,
//         gender: this.signUpForm.get('gender').value,

//         // address: new FormControl(null),
//         address:{
          
//           street: this.signUpForm.get('address.street').value,
//           country: this.signUpForm.get('address.country').value,
//           city: this.signUpForm.get('address.city').value,
//           region: this.signUpForm.get('address.region').value,
//           postalCode: this.signUpForm.get('address.postalCode').value,
//         },
// // {updateOn:'blur'}
//         skills:this.signUpForm.get('skills').value,

//          experience:this.signUpForm.get('experience').value
        
//       })

this.signUpForm.patchValue({
  username:this.username,
  skills:['CSS', 'Java'],
  address:{street:'kawangware'}
}

)
     

  } else {
    this.allfields = 'Please ensure all fields are correctly filled';
  }

  console.log(this.signUpForm)

  
  
}


}
