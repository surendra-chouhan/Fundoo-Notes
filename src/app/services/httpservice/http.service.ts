import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  // encode(data : any) {
  //   const formBody = [];
  //   for (const property in data) {
  //     const encodedKey = encodeURIComponent(property);
  //     const encodedValue = encodeURIComponent(data[property]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   return formBody.join('&');
  // }

  Post(url: any, data: any, options: any){
    // let options = {
    //   headers: new HttpHeaders({
    //     'Authorization': token,
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    //   })
    // }

    return this.httpClient.post(this.BaseUrl + url, data, options);
  }

  Get(url: any,options: any){
    // let options = {
    //   headers: new HttpHeaders({
    //     'Authorization': id,
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    //   })
    // }
    return this.httpClient.get(this.BaseUrl+url, options);
  }
}
