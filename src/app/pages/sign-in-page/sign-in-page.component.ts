import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})


export class signInPageComponent  {
  status: boolean = false;

  constructor(private myElement: ElementRef) { 
    this.myElement.nativeElement
  }

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })
  
  onSubmit() {
    console.warn(this.loginForm.value)
  }
  
}