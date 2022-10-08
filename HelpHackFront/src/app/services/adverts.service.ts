import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advert } from '../models/advert.model';

@Injectable()
export class LoginService {
  constructor(public httpClient: HttpClient) {}
  adverts: Advert[] = [
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.'
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.'
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.'
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.'
    ),
  ];

  postRegistration() {
    return this.adverts.slice;
  }
}
