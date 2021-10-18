import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { io, Socket } from 'socket.io-client';

const baseUrl = 'http://localhost:3333'
@Injectable({
  providedIn: 'root'
})

export class StatusService {
  statusToken: boolean | undefined
  token: any
  userId: any
  user: any
  localImage: number | undefined
  groups: any
  public socket: Socket = io('http://localhost:3333')

  constructor(private api: HttpClient,
    private router: Router,
    ) {
      this.socket.on('broadcast', data=>{
        console.log(data)
      })
   }

   createUser( email: string, name: string, password: string ) {
    return this.api.post(baseUrl+'/users', { email, name, password}).subscribe(res => alert(res), (err) => alert(err));
  }
  authenticationUser( email: string, password: string ){
    const auth = this.api.post(baseUrl+'/sessions', {email, password}).subscribe(res => {
      var resjson = JSON.stringify(res)
      this.token = JSON.parse(resjson)
      this.statusToken = true
      this.router.navigateByUrl('/getId');
    },
    () => this.statusToken = false);
    return auth
  }
  getIdUserByToken(token: string ){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.api.get(baseUrl+'/sessions', {headers: headers}).subscribe(res => {
      var resjson = JSON.stringify(res)
      this.userId = JSON.parse(resjson).id
      this.router.navigateByUrl('/principal');
    })
  }
  getUserById(id: string){
    return this.api.get(baseUrl+'/users/by_id/'+id)
  }
  getImageById(imageId: number){
    return this.api.get(baseUrl+'/images/by_id/'+imageId).subscribe(res =>{
      const resjson = JSON.stringify(res)
      this.localImage = JSON.parse(resjson).local
    },
    (err) => console.log(err))
  }
  getGroupsByUserId(userId: string){
    return this.api.get(baseUrl+'/groups/'+userId)
  }

}
