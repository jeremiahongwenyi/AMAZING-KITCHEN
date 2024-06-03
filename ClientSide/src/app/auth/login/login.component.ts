import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLogginMode:boolean=true;
  isLoginMode: boolean = true;
  isLoading: boolean = false;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmitted(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    

}
}
