import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(
    public service: StatusService,
    ) {

   }

  ngOnInit(): void {
    //console.log(this.service.token)
    //console.log(this.service.userId)
    this.service.getUserById(this.service.userId)
  }

}
