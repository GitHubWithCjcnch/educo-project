import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/shared-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  constructor(public sharedService: SharedServiceService) {}

  ngOnInit(): void {
  }

  nextStep() {
    this.sharedService.steps += 1;
  }
}
