import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  group: boolean = false;

  constructor(public service: StatusService) { }

  ngOnInit(): void {
    this.service.getUserById(this.service.userId).subscribe(res => {
      const resjson = JSON.stringify(res)
      this.service.user = JSON.parse(resjson)
      //console.log(this.user.avatar)
    },
    (err) => console.log(err))
    this.service.getGroupsByUserId(this.service.userId).pipe().subscribe(res =>{
      const resjson = JSON.stringify(res)
      const groups = JSON.parse(resjson)
      let a: Array<Object> = []
      console.log(groups)
      for(let group = 0; group < groups.length; group++){
        a.push(groups[group][0])
      }
      this.service.groups = a
    })

  }
  showGroup(value: number) {
    let clickedGroup = value
    this.group = true;
    this.service.getPostsByGroup(clickedGroup).pipe().subscribe(res => {
      const resjson = JSON.stringify(res)
      this.service.posts = JSON.parse(resjson)

      console.log(this.service.posts)
    })

  }
}
