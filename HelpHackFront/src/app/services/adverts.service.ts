import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advert } from '../models/advert.model';
import { formatDate } from '@angular/common';

@Injectable()
export class AdvertService {
  constructor(public httpClient: HttpClient) {}
  adSelected = new EventEmitter<Advert>();
  format = 'dd/MM/yyyy';
  myDate = '2019-06-29';
  locale = 'en-US';
  formattedDate = formatDate(this.myDate, this.format, this.locale);
  adverts: Advert[] = [
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Krakowie',
      'Pomoc zwierzakom',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'Active'
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Wroclawiu',
      'Pomoc starszym',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'Active'
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Gdansku',
      'Pomoc srodowisku',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'Active'
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenean ornare accumsan ipsum, et viverra urna consequat quis. Aliquam id hendrerit odio, quis blandit mauris. Donec eget tristique tortor, ut lacinia tortor. Nulla lacinia pulvinar augue, ut pharetra ligula lacinia ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Choroszczy',
      'Pomoc zwierzakom',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'Inactive'
    ),
  ];

  getAds(): Advert[] {
    return this.adverts.slice();
  }
}
