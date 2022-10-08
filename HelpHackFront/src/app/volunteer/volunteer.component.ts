import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  selectedAd: Advert;
  constructor(public advertService: AdvertService) {}

  ngOnInit(): void {
    this.advertService.adSelected.subscribe(
      (recipe: Advert) => (this.selectedAd = recipe)
    );
  }
}
