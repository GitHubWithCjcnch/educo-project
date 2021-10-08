import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-get-id-page',
  templateUrl: './get-id-page.component.html',
  styleUrls: ['./get-id-page.component.scss']
})
export class GetIdPageComponent implements OnInit {

  constructor(private service: StatusService) { }

  ngOnInit(): void {
    this.service.getIdUserByToken(this.service.token)
  }

}
