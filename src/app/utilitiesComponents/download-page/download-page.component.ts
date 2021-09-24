import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.scss'],
})
export class DownloadPageComponent implements OnInit {
  @Input() article: any

  constructor() {}

  ngOnInit(): void {
    
  }
}
