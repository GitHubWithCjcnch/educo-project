import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollInto() {
    document.querySelector('#downloadSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    document.querySelector('#SupportSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

}
