import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';

@Component({
  selector: 'app-ad-item-ngo',
  templateUrl: './ad-item-ngo.component.html',
  styleUrls: ['./ad-item-ngo.component.css'],
})
export class AdItemNgoComponent implements OnInit {
  constructor(private advertService: AdvertService) {}
  @Input() ad: Advert;
  ngOnInit(): void {}
  onSelected() {
    this.advertService.adSelected.emit(this.ad);
  }
}
