import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(
      public sharedService: SharedServiceService,
      private location: Location
    ) { }

  ngOnInit(): void {
  }

  exitSignUp() {
    this.sharedService.steps = 1;
    this.location.back()
  }
}
