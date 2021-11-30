import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  group: boolean = false;
  clickedGroup!: number;

  constructor(public service: StatusService) { }

  ngOnInit(): void {
    console.log(this.service.user)

    this.service.getUserById(this.service.userId, this.service.token).subscribe(res => {
      const resjson = JSON.stringify(res)
      this.service.user = JSON.parse(resjson)
      //console.log(this.user.avatar)
    },
    (err) => console.log(err))
    this.service.getGroupsByUserId(this.service.userId, this.service.token).pipe().subscribe(res =>{
      const resjson = JSON.stringify(res)
      const groups = JSON.parse(resjson)
      let a: Array<Object> = []
      for(let group = 0; group < groups.length; group++){
        a.push(groups[group])
      }
      this.service.groups = a
    })
  }

  ageFromBirth(date: Date) {
    const actualYear = new Date().getFullYear();
    const birthUser = parseInt(this.service.user.birth.substring(0, 4), 10)
    return actualYear - birthUser
  }
  groupOnFocus(event: any) {
    const elementClicked: Element = event.target;
    elementClicked.classList.add('group-on-focus')
  }

  showGroup(value: number) {
    this.clickedGroup = value
    this.group = true;
    this.service.getPostsByGroup(this.clickedGroup, this.service.token).pipe().subscribe(res => {
      const resjson = JSON.stringify(res)
      this.service.posts = JSON.parse(resjson)
    })
  }


  onKeyDown(event: any) {

    let text = event.target.value;
    if (text !== "") {
      this.service.makePosts(this.service.userId, text, this.clickedGroup, this.service.token).subscribe(res => res)
    }
    text = null;
  }
}
