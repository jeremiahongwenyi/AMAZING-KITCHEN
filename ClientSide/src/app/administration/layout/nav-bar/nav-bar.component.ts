import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(
    private route:Router,
  ){}

  utensilOptionChanged(event:any){
    console.log(event.target.value)
    this.route.navigate(['/product',event.target.value],)

  }

}
