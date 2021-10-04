import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})

export class SignUpPageComponent implements OnInit {
  @ViewChild('imageProfile') imageProfile!: ElementRef;

  registerUser = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    date: new FormControl('', [
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    public sharedService: SharedServiceService,
    private service: StatusService
  ) {}

  ngOnInit(): void {
  }

  nextStep() {
    this.sharedService.steps += 1;
  }

  onSubmit() {
    this.service.createUser(this.registerUser.value.email, this.registerUser.value.name, this.registerUser.value.password)
  }


  get f() { return this.registerUser.controls }
}
