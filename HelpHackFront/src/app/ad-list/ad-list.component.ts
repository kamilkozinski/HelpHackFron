import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css'],
})
export class AdListComponent implements OnInit {
  adverts: Advert[];

  constructor(private advertService: AdvertService) {}

  ngOnInit(): void {
    this.adverts = this.advertService.getAds();
  }
}
