import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  group: boolean = false;
  clickedGroup!: number;

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
      for(let group = 0; group < groups.length; group++){
        a.push(groups[group][0])
      }
      this.service.groups = a
    })
  }

  groupOnFocus(event: any) {
    const elementClicked: Element = event.target;
    elementClicked.classList.add('group-on-focus')
  }

  showGroup(value: number) {
    this.clickedGroup = value
    this.group = true;
    this.service.getPostsByGroup(this.clickedGroup).pipe().subscribe(res => {
      const resjson = JSON.stringify(res)
      this.service.posts = JSON.parse(resjson)
    })
  }

  onKeyDown(event: any) {
    let text = event.target.value;
    if (text !== "") {
      this.service.makePosts(this.service.userId, text, this.clickedGroup).subscribe(res => res)
    }
    text = null;
  }
}
