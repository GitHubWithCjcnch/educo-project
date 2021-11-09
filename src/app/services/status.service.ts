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
  posts: any
  public socket: Socket = io('http://localhost:3333')

  constructor(private http: HttpClient,
    private router: Router,
    ) {
      this.socket.on('broadcast', data=>{
        console.log(data)
      })
   }

   createUser( email: string, name: string, password: string, birth: string ) {
    return this.http.post(baseUrl+'/users', { email, name, password, birth}).subscribe(res => alert(res), (err) => alert(err));
  }
  authenticationUser( email: string, password: string ){
    const auth = this.http.post(baseUrl+'/sessions', {email, password}).subscribe(res => {
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
    return this.http.get(baseUrl+'/sessions', {headers: headers}).subscribe(res => {
      var resjson = JSON.stringify(res)
      this.user = JSON.parse(resjson)
      this.userId = this.user.id
      this.router.navigateByUrl('/principal');
    })
  }
  getUserById(id: string){
    return this.http.get(baseUrl+'/users/by_id/'+id)
  }
  getImageById(imageId: number){
    return this.http.get(baseUrl+'/images/by_id/'+imageId).subscribe(res =>{
      const resjson = JSON.stringify(res)
      this.localImage = JSON.parse(resjson).local
    },
    (err) => console.log(err))
  }
  getGroupsByUserId(userId: string){
    return this.http.get(baseUrl+'/groups/'+userId)
  }
  getPostsByGroup(groupId: any){
    return this.http.post(baseUrl+'/posts/by_group/'+groupId, {})
  }
  makePosts(userId: string, text: string, groupId: number) {
    return this.http.post(baseUrl+'/posts', {userId, text, groupId});
  }
}
