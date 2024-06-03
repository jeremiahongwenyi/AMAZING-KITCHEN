import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  firstName:string='';
  lastName:string='';
  nchi:string = 'Usa';
  message:string='';

  isSubmitted = false;

  onSubmit(){
    this.isSubmitted = true;
  }

}
