import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(public httpClient: HttpClient) {}

  postRegistration(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/messages/hello', {
      responseType: 'text',
    });
  }
}
