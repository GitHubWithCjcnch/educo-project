import { Component } from '@angular/core';
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
  token = {};
  statusToken = false
  constructor(private service: StatusService) {
  }

  focusInput(event: Event) {
    const targetElement: any = event.target as Element
    const parentNodeChilds: any = (event.target as Element).parentNode?.childNodes;
    if(parentNodeChilds[1].localName === 'span') {
      parentNodeChilds[1].classList.add('onFocus')
      parentNodeChilds[0].style.fill = '#349afa'
    }
    event.target?.addEventListener('blur', () => {
      if (targetElement.value == "") {
        parentNodeChilds[1].classList.remove('onFocus')
        parentNodeChilds[0].style.fill = 'black'
      }
    })
  }

  onSubmit() {
    this.service.authenticationUser(this.loginForm.value.email, this.loginForm.value.password)
  }
}
