import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService {
  constructor(public httpClient: HttpClient) {}

  postRegistration(param: string): Observable<any> {
    return this.httpClient.post(
      'https://help-hack-back.azurewebsites.net/api/user/signup',
      JSON.parse(param)
    );
  }
}
