import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  constructor(
    public service: StatusService
    ) {
   }

  ngOnInit(): void {
    this.service.getUserById(this.service.userId).subscribe(res => {
      const resjson = JSON.stringify(res)
      this.service.user = JSON.parse(resjson)
      //console.log(this.user.avatar)
    },
    (err) => console.log(err))
    this.service.getGroupsByUserId(this.service.userId).pipe().subscribe(res =>{
      const resjson = JSON.stringify(res)
      let groups = JSON.parse(resjson)
      let a: Array<Object> = []
      console.log(groups)
      for(let group = 0; group < groups.length; group++){
        a.push(groups[group][0])
      }
      this.service.groups = a
      console.log(this.service.groups)
    })
  }
  getButton(value: number){
    let clickedGroup = value
    console.log(clickedGroup)
  }


}
