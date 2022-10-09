import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(public httpClient: HttpClient) {}

  postLogin(param: string): Observable<any> {
    return this.httpClient.post(
      'https://help-hack-back.azurewebsites.net/login',
      JSON.parse(param),
      {
        responseType: 'text',
      }
    );
  }
}
