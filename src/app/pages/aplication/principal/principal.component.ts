import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, AfterViewInit {
  groupState: boolean = false;
  clickedGroup!: number;

  constructor(public service: StatusService, private el: ElementRef) { }

  ngOnInit(): void {
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
      this.service.groups = a;
    })
  }

  ngAfterViewInit() {
    this.el.nativeElement.ownerDocument
    .body.style.backgroundColor = '#094067';
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
    this.groupState = true;
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
