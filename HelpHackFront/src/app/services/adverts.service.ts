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
  advertsForVolunteers: Advert[] = [
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenc eget tristique tortor, ut lacinia tortor. Nulla. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Krakowie',
      'Pomoc zwierzakom',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'EAST',
      'Active',
      8,
      4,
      5
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aene.',
      'Schronisko dla zwierząt w Wroclawiu',
      'Pomoc starszym',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'WEST',
      'Active',
      8,
      4,
      5
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. AVivamus at suscipitunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Gdansku',
      'Pomoc srodowisku',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'SOUTH',
      'Active',
      8,
      4,
      5
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagc eget tristique tortor, ut lacinia tortor. ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Choroszczy',
      'Pomoc zwierzakom',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'NORTH',
      'Inactive',
      8,
      4,
      5
    ),
  ];

  advertsForNGOs: Advert[] = [
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aenc eget tristique tortor, ut lacinia tortor. Nulla. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Krakowie',
      'Pomoc zwierzakom',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'EAST',
      'Active',
      8,
      4,
      5
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. Aene.',
      'Schronisko dla zwierząt w Wroclawiu',
      'Pomoc starszym',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'WEST',
      'Active',
      16,
      9,
      11
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagittis luctus urna. AVivamus at suscipitunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Gdansku',
      'Pomoc srodowisku',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'SOUTH',
      'Active',
      2,
      5,
      7
    ),
    new Advert(
      'Sed ex neque, vehicula eu dapibus vitae, sagc eget tristique tortor, ut lacinia tortor. ac. Aliquam vehicula mi interdum pulvinar ullamcorper. Vivamus at suscipit quam. Nullam vitae lorem nec ex semper pellentesque. Donec tincidunt arcu eu diam tristique, id blandit turpis ornare. Pellentesque fermentum, sem quis consectetur accumsan, libero mi sodales elit, in ullamcorper leo urna et nisi.',
      'Schronisko dla zwierząt w Choroszczy',
      'Pomoc zwierzakom',
      this.formattedDate,
      'JanuszMilosnikZwierzat',
      'NORTH',
      'Inactive',
      4,
      4,
      5
    ),
  ];
  getAdsForVolunteer(): Advert[] {
    return this.advertsForVolunteers.slice();
  }
  getAdsForNGO(): Advert[] {
    return this.advertsForNGOs.slice();
  }
}
