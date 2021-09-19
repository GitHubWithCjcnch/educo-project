import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent  {
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