import { Component, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css'],
})
export class NgoComponent implements OnInit {
  selectedAd: Advert;
  constructor(public advertService: AdvertService) {}

  ngOnInit(): void {
    this.advertService.adSelected.subscribe(
      (recipe: Advert) => (this.selectedAd = recipe)
    );
  }
}
