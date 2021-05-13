import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService ) { 

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
    return this.http.Post('user/reset-password', data, token);
  }

  createNote(data: any , id: any){
    return this.http.Post('notes/addNotes',data,id);

  }

  getNoteList(id:any){
    return this.http.Get('notes/getNotesList',id)
  }
}
