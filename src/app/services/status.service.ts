import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3333'
@Injectable({
  providedIn: 'root'
})

export class StatusService {

  constructor(private api: HttpClient) {  }

  authenticationUser( email: string, password: string ){
   return this.api.post(baseUrl+'/sessions', {email, password});
  }
  createUser( email: string, name: string, password: string ) {
    return this.api.post(baseUrl+'/users', { email, name, password}).subscribe(res => alert(res));
  }
}
