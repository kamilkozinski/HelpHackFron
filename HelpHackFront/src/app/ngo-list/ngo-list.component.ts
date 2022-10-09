import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';

@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css'],
})
export class NgoListComponent implements OnInit {
  adverts: Advert[];
  constructor(private advertService: AdvertService) {}

  ngOnInit(): void {
    this.adverts = this.advertService.getAdsForNGO();
  }
}
