import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void { 
  }

  onSubmit() {
    console.warn(this.loginForm.value)

  }
}
