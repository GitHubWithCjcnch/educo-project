import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StatusService } from '../../services/status.service'

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})


export class signInPageComponent  {
  status: boolean = false;
  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
      private myElement: ElementRef,
      private service: StatusService
    ) { 
    this.myElement.nativeElement
  }

  
  onSubmit() {
    this.service.authenticationUser(this.loginForm.value.email, this.loginForm.value.password);
    console.warn(this.loginForm.value)
  }
  
}