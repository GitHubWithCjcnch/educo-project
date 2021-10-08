import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, AfterViewInit {
  constructor(
    public service: StatusService,
    ) {

   }

  ngOnInit(): void {
    //console.log(this.service.token)
    //console.log(this.service.userId)
  }
  ngAfterViewInit(): void{
    this.service.getUserById(this.service.userId)
    console.log(this.service.user)
  }


}
