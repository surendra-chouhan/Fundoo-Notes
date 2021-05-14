import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService ) { 

  }

  encode(data: any){
    const formBody = [];
    for(const property in data){
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  loginService(data: any){
    return this.http.Post('user/login', data, "");
    console.log("login service is called");
    console.log(data);
  }

  registerService(data: any){
    return this.http.Post('user/userSignUp', data, "");
  }

  forgotPasswordService(data: any){
    return this.http.Post('user/reset', data, "");
  }

  resetPasswordService(data: any, token: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization' : token,
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept' : 'application/json'
      })
    }
    return this.http.Post('user/reset-password', this.encode(data), options);
  }

  createNote(data: any , id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/addNotes',data,options);

  }

  getNoteList(id:any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Get('notes/getNotesList',options)
  }

  updateNote(data : any,token : any ){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/updateNotes',data,options);
  }

  deleteNote(data : any,token : any){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/trashNotes',data,options);
  }
}
