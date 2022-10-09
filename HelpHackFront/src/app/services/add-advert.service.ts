import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddAdvertService {
  constructor(public httpClient: HttpClient) {}

  postAdvert(param: string): Observable<any> {
    return this.httpClient.post(
      'https://help-hack-back.azurewebsites.net/api/events/create',
      JSON.parse(param),
      {
        responseType: 'text',
      }
    );
  }
}
